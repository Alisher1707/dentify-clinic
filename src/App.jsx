import { Routes, Route } from "react-router-dom"
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
import ContactsPage from "./components/ContactsPage"
import "./App.css"

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/structure" element={<ClinicStructure />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </LanguageProvider>
  )
}

export default App
