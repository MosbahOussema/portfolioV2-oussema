import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div>
        <NavBar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
