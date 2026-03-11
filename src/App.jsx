import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import EngineeringApproach from './components/EngineeringApproach';



function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <EngineeringApproach />
      <Projects />
      <Footer />
    </div>
  )
}

export default App

