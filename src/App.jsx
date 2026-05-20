import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Solutions from "./Components/Solutions/Solutions";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
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
