import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { Header } from './components/Header/Header'

function App() {
  return (
    <div>
      <Header />    
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App