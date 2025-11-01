import { useState } from "react"
import { LanguageProvider } from "./contexts/LanguageProvider"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Appointment from "./components/Appointment"
import Location from "./components/Location"
import Footer from "./components/Footer"
import ServicesPage from "./components/ServicesPage"
import ClinicStructure from "./components/ClinicStructure"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToServices = () => {
    setCurrentPage('services');
    window.scrollTo(0, 0);
  };

  const navigateToStructure = () => {
    setCurrentPage('structure');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  return (
    <LanguageProvider>
      <div className="App">
        <Navbar
          onNavigateToServices={navigateToServices}
          onNavigateToStructure={navigateToStructure}
          onNavigateToHome={navigateToHome}
        />

        {currentPage === 'home' ? (
          <>
            <Hero />
            <About />
            <Contact />
            <Services />
            <Testimonials />
            <Appointment />
            <Location />
            <Footer />
          </>
        ) : currentPage === 'services' ? (
          <ServicesPage onBackToHome={navigateToHome} />
        ) : currentPage === 'structure' ? (
          <ClinicStructure onBackToHome={navigateToHome} />
        ) : null}
      </div>
    </LanguageProvider>
  )
}

export default App
