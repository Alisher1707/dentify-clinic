import { LanguageProvider } from "./contexts/LanguageProvider"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Appointment from "./components/Appointment"
import "./App.css"

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Appointment />
        <Testimonials />
        <Contact />
      </div>
    </LanguageProvider>
  )
}

export default App
