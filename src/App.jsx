import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'
import Booking from './pages/Booking'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/tseni" element={<Pricing />} />
          <Route path="/galeriya" element={<Gallery />} />
          <Route path="/kontakti" element={<Contacts />} />
          <Route path="/rezervatsiya" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
