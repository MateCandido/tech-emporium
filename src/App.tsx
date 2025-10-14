import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { Header } from './components/Header/Header'
import { Checkout } from './pages/Checkout'
import { ThankYou } from './pages/ThankYou'

function App() {
  return (
    <div>
      <Header />    
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
    </div>
  )
}

export default App