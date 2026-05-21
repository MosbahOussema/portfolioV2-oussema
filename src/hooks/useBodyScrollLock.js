import { useLayoutEffect, useRef, useCallback } from "react";

export const useBodyScrollLock = (isLocked, options = {}) => {
  const scrollLockY = useRef(null);
  const { preserveNavbarPadding = false } = options;

  const unlock = useCallback(() => {
    if (scrollLockY.current === null) return;

    const savedY = scrollLockY.current;
    scrollLockY.current = null;
    const html = document.documentElement;
    const body = document.body;

    html.style.overflow = "";
    body.style.overflow = "";
    body.style.touchAction = "";
    body.style.paddingRight = "";

    const navbar = document.getElementById("navbar");
    if (navbar) navbar.style.paddingRight = "";

    const prevScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, savedY);
    html.style.scrollBehavior = prevScrollBehavior;
  }, []);

  useLayoutEffect(() => {
    if (!isLocked || scrollLockY.current !== null) return undefined;

    scrollLockY.current = window.scrollY;
    const html = document.documentElement;
    const body = document.body;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;
    const previousTouchAction = body.style.touchAction;
    const previousPaddingRight = body.style.paddingRight;
    const navbar = document.getElementById("navbar");
    const previousNavbarPaddingRight = navbar?.style.paddingRight;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";

    if (preserveNavbarPadding && scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
      if (navbar) navbar.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      if (scrollLockY.current === null) return;

      const savedY = scrollLockY.current;
      scrollLockY.current = null;

      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.touchAction = previousTouchAction;
      body.style.paddingRight = previousPaddingRight;
      if (navbar && previousNavbarPaddingRight !== undefined) {
        navbar.style.paddingRight = previousNavbarPaddingRight;
      }

      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, savedY);
      html.style.scrollBehavior = prevScrollBehavior;
    };
  }, [isLocked, preserveNavbarPadding]);

  return unlock;
};

export default useBodyScrollLock;
