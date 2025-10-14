import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../hooks/useCartStore'
import './Checkout.css'

export const Checkout = () => {
  const navigate = useNavigate()
  const { items, clearCart } = useCartStore()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() 
    
    console.log('Request sent:', {
      customer: formData,
      items: items,
      total: items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    })

    clearCart()

    navigate('/thank-you')
  }

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adress</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="submit-button">Pay Now</button>
      </form>
    </div>
  )
}