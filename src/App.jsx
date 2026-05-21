import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Services from "./components/Services/Services";
import MyWork from "./components/MyWork/MyWork";
import Solutions from "./components/Solutions/Solutions";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app">
          <div className="global-bg" aria-hidden="true">
            <div className="global-beam global-beam--1"></div>
            <div className="global-beam global-beam--2"></div>
            <div className="global-beam global-beam--3"></div>
            <div className="global-beam global-beam--4"></div>
            <div className="global-beam global-beam--5"></div>
            <div className="global-particle global-particle--1"></div>
            <div className="global-particle global-particle--2"></div>
            <div className="global-particle global-particle--3"></div>
            <div className="global-particle global-particle--4"></div>
            <div className="global-particle global-particle--5"></div>
            <div className="global-particle global-particle--6"></div>
          </div>

          <NavBar />
          <Hero />
          <About />
          <Experience />
          <Services />
          <MyWork />
          <Solutions />
          <Contact />
          <Footer />

          <ToastContainer
            position="bottom-right"
            limit={1}
            closeOnClick
            pauseOnHover
            draggable
            newestOnTop
            hideProgressBar
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
