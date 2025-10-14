import { useCartStore } from '../hooks/useCartStore'
import { Link } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {
  const { items, removeItem, incrementQuantity, decrementQuantity } = useCartStore()

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty.</h2>
        <Link to="/">Back to the store</Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h1>Seu Carrinho</h1>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p className="item-price">Unit Price: ${item.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <button onClick={() => decrementQuantity(item.id)} className="quantity-button">
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)} className="quantity-button">
                  +
                </button>
              </div>

            </div>
            <div className="cart-item-actions">
              <p className="item-subtotal">Price: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)} className="remove-button">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Price: ${total.toFixed(2)}</h2>
        <Link to="/checkout" className="checkout-button">
        Checkout
        </Link>
    </div>
    </div>
  )
}