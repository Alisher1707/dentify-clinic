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
import "./App.css"

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Services />
        <Testimonials />
        <Appointment />
        <Location />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
