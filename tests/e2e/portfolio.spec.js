import { expect, test } from '@playwright/test';
import { readFile } from 'node:fs/promises';

const siteOrigin = 'https://www.oussamamosbah.com';

test('both languages expose indexable production HTML before JavaScript', async ({ request }) => {
  for (const [path, language, title] of [
    ['/', 'en', 'Oussama Mosbah | Frontend Engineer, React & Next.js'],
    ['/fr/', 'fr', 'Oussama Mosbah | Ingénieur Frontend React & Next.js'],
  ]) {
    const response = await request.get(path, { headers: { 'User-Agent': 'OAI-SearchBot' } });
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toContain(`<html lang="${language}"`);
    expect(html).toContain(`<title>${title.replace('&', '&amp;')}</title>`);
    expect(html).toContain(`rel="canonical" href="${siteOrigin}${path}"`);
    expect(html).toContain('type="application/ld+json"');
    expect(html).toContain('Oussama Mosbah');
    expect(html).toContain('Frontend');
    expect(html).toContain('id="project-');
  }
});

test('desktop portfolio hydrates and preserves language, theme and dialogs', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle('Oussama Mosbah | Frontend Engineer, React & Next.js');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Oussama Mosbah');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${siteOrigin}/`);

  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.getByRole('button', { name: 'Switch to light mode' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.getByRole('button', { name: 'Switch to dark mode' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

  await page.getByRole('button', { name: 'Connect With Me' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', { name: 'Close contact modal' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);

  await page.getByRole('link', { name: /Switch to French/ }).click();
  await expect(page).toHaveURL(/\/fr\/$/);
  await expect(page).toHaveTitle('Oussama Mosbah | Ingénieur Frontend React & Next.js');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${siteOrigin}/fr/`);

  await page.goBack();
  await expect(page).toHaveURL(/127\.0\.0\.1:4174\/$/);
  await expect(page).toHaveTitle('Oussama Mosbah | Frontend Engineer, React & Next.js');
  expect(errors).toEqual([]);
});

test('mobile navigation, projects and experience dialog remain usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');

  await page.getByRole('button', { name: 'Toggle menu' }).click();
  await expect(page.locator('.nav-menu')).toHaveClass(/nav-menu--open/);
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page.locator('.nav-menu')).not.toHaveClass(/nav-menu--open/);
  await expect(page).toHaveURL(/#work$/);

  const firstProject = page.locator('#work [role="button"][aria-expanded]').first();
  await firstProject.click();
  await expect(firstProject).toHaveAttribute('aria-expanded', 'true');
  await expect(firstProject.locator('.project-mobile-panel')).toBeVisible();

  const firstExperience = page.locator('#experience [role="button"]').first();
  await firstExperience.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test('the supplied TCC wordmark loads in the experience card and dialog', async ({ page }) => {
  await page.goto('/');
  const card = page.locator('#experience [role="button"][aria-label*="TCC Informatique"]');
  const cardImage = card.locator('img');
  await card.scrollIntoViewIfNeeded();
  await expect(cardImage).toHaveAttribute('src', /^data:image\/webp;base64,/);
  await expect.poll(() => cardImage.evaluate((img) => ({ width: img.naturalWidth, height: img.naturalHeight }))).toEqual({ width: 160, height: 160 });

  await card.click();
  const modalImage = page.getByRole('dialog').locator('.experience-company-icon-image');
  await expect(modalImage).toHaveAttribute('src', await cardImage.getAttribute('src'));
  await expect.poll(() => modalImage.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
});

test('Astrolab, Talinty and Ciceria are visible, linked and show their local logos', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#work .mywork-format')).toHaveCount(9);
  const astrolabExperienceLogo = page.locator('#experience .experience-company-icon-image-astrolab').first();
  await expect(astrolabExperienceLogo).toHaveAttribute('src', /astrolab-navbar.*\.svg/);
  for (const [id, url] of [
    ['astrolab', 'https://astrolab.co/fr/'],
    ['talinty', 'https://talinty.com/en'],
    ['ciceria', 'https://app.ciceria.fr/auth/signin'],
  ]) {
    const card = page.locator(`#project-${id}`);
    await expect(card).toBeVisible();
    await expect(card.locator('.project-link').first()).toHaveAttribute('href', url);
    const logo = card.locator('.project-image-logo img');
    await logo.scrollIntoViewIfNeeded();
    await expect.poll(() => logo.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
    await expect(logo).toHaveCSS('object-fit', 'contain');
  }
  await expect(page.locator('#project-astrolab .project-image-logo img')).toHaveAttribute('src', /astrolab-navbar.*\.svg/);
  await expect(page.locator('#project-astrolab')).toContainText('Next.js');
  await expect(page.locator('#project-astrolab')).toContainText('Motion');
  await expect(page.locator('#project-astrolab')).toContainText('Shadcn/ui');
  await expect(page.locator('#project-talinty')).toContainText('Shadcn/ui');
  await expect(page.locator('#project-astrolab')).not.toContainText('Tailwind CSS');
  await expect(page.locator('#project-talinty')).not.toContainText('Tailwind CSS');
  await expect(page.locator('#project-astrolab')).toContainText('code review and user-flow validation');
  await expect(page.locator('#project-ciceria')).toContainText('React');
  await expect(page.locator('#project-ciceria')).toContainText('Tailwind CSS');
  await expect(page.locator('#project-ciceria')).not.toContainText('shadcn/ui');
  await expect(page.locator('#project-ciceria')).toContainText('managing users, operations, documents and reference data');
  await expect(page.locator('#project-ciceria')).not.toContainText(/V2|OCR|INPI|JALPRO/);

  await page.goto('/fr/');
  await expect(page.locator('#work .mywork-format')).toHaveCount(9);
  await expect(page.locator('#project-ciceria')).toContainText('formalités juridiques');
  await expect(page.locator('#project-astrolab')).toContainText('revue du code et validation des parcours');
  await expect(page.locator('#project-astrolab')).toContainText('Motion');
  await expect(page.locator('#project-astrolab')).toContainText('Shadcn/ui');
  await expect(page.locator('#project-talinty')).toContainText('Shadcn/ui');
  await expect(page.locator('#project-astrolab')).not.toContainText('Tailwind CSS');
  await expect(page.locator('#project-talinty')).not.toContainText('Tailwind CSS');
  await expect(page.locator('#project-ciceria')).toContainText('Tailwind CSS');
  await expect(page.locator('#project-ciceria')).not.toContainText('shadcn/ui');
  await expect(page.locator('#project-ciceria')).toContainText('gestion des utilisateurs, opérations, documents et référentiels');
  await expect(page.locator('#project-ciceria')).not.toContainText(/V2|OCR|INPI|JALPRO/);
});

test('Astrolab experience includes the three new projects in both languages', async ({ page }) => {
  for (const [path, expectedText] of [
    ['/', 'seven projects'],
    ['/fr/', 'sept projets'],
  ]) {
    await page.goto(path);
    const astrolabJob = page.locator('#experience [role="button"][aria-label*="Astrolab Agency"]');
    await expect(astrolabJob).toContainText(expectedText);
    await astrolabJob.click();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('.modal-project-card')).toHaveCount(7);
    for (const [name, url] of [
      ['Astrolab', 'https://astrolab.co/fr/'],
      ['Talinty', 'https://talinty.com/en'],
      ['Ciceria', 'https://app.ciceria.fr/auth/signin'],
    ]) {
      const project = dialog.locator('.modal-project-card').filter({ has: page.getByRole('heading', { name, exact: true }) });
      await expect(project).toHaveCount(1);
      await expect(project.locator('.modal-project-link')).toHaveAttribute('href', url);
      const logo = project.locator('.modal-project-img--logo');
      await expect.poll(() => logo.evaluate((img) => img.complete && img.naturalWidth > 0)).toBe(true);
      await expect(logo).toHaveCSS('object-fit', 'contain');
    }
    const ciceria = dialog.locator('.modal-project-card').filter({ hasText: 'Ciceria' });
    await expect(ciceria).toContainText('React');
    await expect(ciceria).not.toContainText(/V2|OCR|INPI|JALPRO/);
    await expect(dialog).not.toContainText(/webhook|notification engine|moteur de|Architected|Architecture d'un système/);
    for (const name of ['Sweetees Gift & Ticket', 'Eldo Wallet']) {
      await expect(dialog.locator('.modal-project-card').filter({ has: page.getByRole('heading', { name, exact: true }) })).toContainText('backend');
    }
    for (const name of ['Astrolab', 'Talinty']) {
      const project = dialog.locator('.modal-project-card').filter({ has: page.getByRole('heading', { name, exact: true }) });
      await expect(project).toContainText('Motion');
      await expect(project).toContainText(path === '/' ? 'code review' : 'revue du code');
      await expect(project).not.toContainText(/accelerat|sped up|faster|accélér/);
    }
    await page.keyboard.press('Escape');
    await expect(dialog).toHaveCount(0);
  }
});

test('both language resume links download the exact updated PDF assets', async ({ page, request }) => {
  for (const [route, language] of [['/', 'En'], ['/fr/', 'Fr']]) {
    await page.goto(route);
    const link = page.locator('.hero-actions a[href$=".pdf"]');
    await expect(link).toHaveCount(1);
    const response = await request.get(await link.getAttribute('href'));
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/pdf');
    const expected = await readFile(new URL(`../../src/assets/Cv_Oussama_Mosbah_${language} .pdf`, import.meta.url));
    expect((await response.body()).equals(expected)).toBe(true);
  }
});

for (const width of [320, 390, 768, 1440]) {
  for (const route of ['/', '/fr/']) {
    test(`revised project descriptions fit the existing cards: ${route} at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      await page.locator('#work').scrollIntoViewIfNeeded();
      for (const [index, id] of ['astrolab', 'talinty', 'ciceria', 'eldowallet', 'sweetees', 'sarabapp', 'championsmind', 'agcff', 'eekad'].entries()) {
        await page.locator('.mywork-carousel-dot').nth(index).click();
        const card = page.locator(`#project-${id}`);
        if (width <= 1024) await card.click();
        else await card.hover();
        const description = card.locator(width <= 1024 ? '.project-mobile-panel p' : '.project-card-back .project-info p');
        await expect(description).toBeVisible();
        const dimensions = await description.evaluate((node) => ({ full: node.scrollHeight, visible: node.clientHeight }));
        expect(dimensions.full, `${route} ${id} at ${width}px is clipped`).toBeLessThanOrEqual(dimensions.visible + 1);
        if (width === 390 || width === 1440) {
          await card.screenshot({ path: `qa-results/revised-${route === '/' ? 'en' : 'fr'}-${id}-${width}.png` });
        }
      }
    });
  }
}

test('light theme carousel is readable on desktop and mobile', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Switch to light mode' }).click();
  await page.locator('#work').scrollIntoViewIfNeeded();
  await expect(page.locator('.mywork-coverflow-slide').nth(1)).toHaveCSS('opacity', '1');
  await expect(page.locator('#project-talinty .project-card-front')).not.toHaveCSS('box-shadow', 'none');
  await page.locator('#work').screenshot({ path: 'qa-results/light-carousel-desktop.png' });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('#work').scrollIntoViewIfNeeded();
  await page.locator('#work').screenshot({ path: 'qa-results/light-carousel-mobile.png' });
  await page.getByRole('button', { name: 'Next projects' }).click();
  await expect(page.locator('.mywork-coverflow-slide').nth(1)).toHaveAttribute('data-position', 'active');
  await page.locator('#project-talinty').click();
  await expect(page.locator('#project-talinty .project-mobile-panel')).toBeVisible();
});

test('coverflow centers each project while preserving the original card flip', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.locator('#work').scrollIntoViewIfNeeded();
  await expect(page.locator('.mywork-coverflow-slide')).toHaveCount(9);
  await expect(page.locator('.mywork-carousel-dot')).toHaveCount(9);
  await expect(page.locator('.mywork-coverflow-slide').first()).toHaveAttribute('data-position', 'active');
  await expect(page.locator('.mywork-coverflow-slide').last()).toHaveAttribute('data-position', 'previous');
  const stage = await page.locator('.mywork-coverflow').boundingBox();
  const stageCenter = stage.x + stage.width / 2;
  const lastCardAtStart = await page.locator('#project-eekad').boundingBox();
  expect(lastCardAtStart.x + lastCardAtStart.width / 2).toBeLessThan(stageCenter);
  await expect(page.locator('.mywork-coverflow-slide').last()).toHaveCSS('opacity', '0.78');
  await expect.poll(async () => {
    const firstCardPosition = await page.locator('#project-astrolab').boundingBox();
    return Math.abs(firstCardPosition.x + firstCardPosition.width / 2 - stageCenter);
  }).toBeLessThan(2);
  const cardStyle = await page.locator('#project-astrolab .project-card-front').evaluate((node) => ({
    borderRadius: getComputedStyle(node).borderRadius,
    background: getComputedStyle(node).backgroundColor,
  }));
  await page.locator('#project-astrolab').hover();
  await expect.poll(() => page.locator('#project-astrolab .project-card-inner').evaluate((node) => getComputedStyle(node).transform)).toMatch(/matrix3d/);

  const talintyPoint = await page.locator('#project-talinty').evaluate((card) => {
    const box = card.getBoundingClientRect();
    for (let y = box.top + 20; y < box.bottom - 20; y += 10) {
      for (let x = box.left + 20; x < box.right - 20; x += 10) {
        if (card.contains(document.elementFromPoint(x, y))) return { x, y };
      }
    }
    return null;
  });
  expect(talintyPoint).not.toBeNull();
  await page.mouse.click(talintyPoint.x, talintyPoint.y);
  await expect(page.locator('.mywork-coverflow-slide').nth(1)).toHaveAttribute('data-position', 'active');
  await expect.poll(async () => {
    const secondCardPosition = await page.locator('#project-talinty').boundingBox();
    return Math.abs(secondCardPosition.x + secondCardPosition.width / 2 - stageCenter);
  }).toBeLessThan(2);
  await expect(page.locator('.mywork-carousel-dot').nth(1)).toHaveAttribute('aria-current', 'true');

  await page.getByRole('button', { name: 'Next projects' }).click();
  await expect(page.locator('.mywork-coverflow-slide').nth(2)).toHaveAttribute('data-position', 'active');
  await page.getByRole('button', { name: 'Previous projects' }).click();
  await expect(page.locator('.mywork-coverflow-slide').nth(1)).toHaveAttribute('data-position', 'active');
  await page.locator('.mywork-carousel-dot').last().click();
  await expect(page.locator('.mywork-coverflow-slide').last()).toHaveAttribute('data-position', 'active');
  await expect(page.locator('.mywork-coverflow-slide').first()).toHaveAttribute('data-position', 'next');
  await expect.poll(async () => {
    const firstCardAtEnd = await page.locator('#project-astrolab').boundingBox();
    return firstCardAtEnd.x + firstCardAtEnd.width / 2;
  }).toBeGreaterThan(stageCenter);
  await expect(page.locator('.mywork-coverflow-slide').first()).toHaveCSS('opacity', '0.78');
  await page.getByRole('button', { name: 'Next projects' }).click();
  await expect(page.locator('.mywork-coverflow-slide').first()).toHaveAttribute('data-position', 'active');
  await page.getByRole('button', { name: 'Previous projects' }).click();
  await expect(page.locator('.mywork-coverflow-slide').last()).toHaveAttribute('data-position', 'active');
  await page.getByRole('button', { name: 'Next projects' }).click();
  await expect(page.locator('.mywork-coverflow-slide').first()).toHaveAttribute('data-position', 'active');
  await expect(page.locator('#project-astrolab .project-card-front').evaluate((node) => ({
    borderRadius: getComputedStyle(node).borderRadius,
    background: getComputedStyle(node).backgroundColor,
  }))).resolves.toEqual(cardStyle);
  await page.screenshot({ path: 'qa-results/coverflow-desktop.png' });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/fr/');
  await expect(page.locator('.mywork-coverflow-slide')).toHaveCount(9);
  await expect(page.locator('.mywork-coverflow-slide').last()).toHaveAttribute('data-position', 'previous');
  await page.locator('#work').scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'qa-results/coverflow-mobile.png' });
  await page.getByRole('button', { name: 'Projets précédents' }).click();
  await expect(page.locator('.mywork-coverflow-slide').last()).toHaveAttribute('data-position', 'active');
  await page.getByRole('button', { name: 'Projets suivants' }).click();
  await expect(page.locator('.mywork-coverflow-slide').first()).toHaveAttribute('data-position', 'active');
  await page.getByRole('button', { name: 'Projets suivants' }).click();
  await expect(page.locator('.mywork-coverflow-slide').nth(1)).toHaveAttribute('data-position', 'active');
  await expect(page.locator('#project-talinty')).toBeInViewport({ ratio: 0.5 });
  await page.locator('#project-talinty').click();
  await expect(page.locator('#project-talinty .project-mobile-panel')).toBeVisible();
  await page.getByRole('button', { name: 'Projets suivants' }).click();
  await expect(page.locator('#project-talinty .project-mobile-panel')).toHaveCount(0);
  await expect(page.locator('.mywork-coverflow-slide').nth(2)).toHaveAttribute('data-position', 'active');
  await expect(page.locator('#work .mywork-format')).toHaveCount(9);
});

test('coverflow responds to a real horizontal touch swipe on mobile', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await context.newPage();
  try {
    await page.goto('http://127.0.0.1:4174/fr/');
    const stage = page.locator('.mywork-coverflow');
    await stage.scrollIntoViewIfNeeded();
    const box = await stage.boundingBox();
    const cdp = await context.newCDPSession(page);
    const y = box.y + box.height / 2;
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: box.x + 70, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: box.x + 180, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: box.x + 300, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await expect(page.locator('.mywork-coverflow-slide').last()).toHaveAttribute('data-position', 'active');
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: box.x + 300, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: box.x + 180, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: box.x + 70, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await expect(page.locator('.mywork-coverflow-slide').first()).toHaveAttribute('data-position', 'active');
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: box.x + 300, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: box.x + 180, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: box.x + 70, y }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await expect(page.locator('.mywork-coverflow-slide').nth(1)).toHaveAttribute('data-position', 'active');
  } finally {
    await context.close();
  }
});
