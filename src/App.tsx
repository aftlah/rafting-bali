import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Packages } from './components/Packages'
import { Reviews } from './components/Reviews'
import { WhyUs } from './components/WhyUs'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Packages />
        <Experience />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
