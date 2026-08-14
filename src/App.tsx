import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { Analytics } from './components/Analytics'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LanguageProvider } from './i18n/LanguageContext'
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
        <Analytics />
        <ScrollToHash />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages/:id" element={<PackageDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
