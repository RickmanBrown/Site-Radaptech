import BackgroundFX from './components/BackgroundFX'
import Header from './components/Header'
import Hero from './pages/home/Hero'
import About from './pages/home/About'
import Services from './pages/home/Services'
import EpiSystem from './components/EpiSystem'
import Process from './pages/home/Process'
import Contact from './pages/home/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
      <BackgroundFX />

      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <EpiSystem />
        <Process />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App