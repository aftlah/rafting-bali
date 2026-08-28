import { useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Analytics } from './components/Analytics'
import { DefaultSeoTags } from './components/Seo'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { LanguageProvider } from './i18n/LanguageContext'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { PackageDetailPage } from './pages/PackageDetailPage'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash) {
      if (pathname !== '/') window.scrollTo(0, 0)
      return
    }
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <DefaultSeoTags />
        <Analytics />
        <ScrollToHash />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages/:id" element={<PackageDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
