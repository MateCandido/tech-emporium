import { useCartStore } from '../hooks/useCartStore'
import { Link } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {
  const { items, removeItem } = useCartStore()
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Seu carrinho está vazio.</h2>
        <Link to="/">Voltar para a loja</Link>
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
              <p>Quantidade: {item.quantity}</p>
              <p>Preço: ${item.price.toFixed(2)}</p>
            </div>
            <button onClick={() => removeItem(item.id)} className="remove-button">
              Remover
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>
        <button className="checkout-button">Finalizar Compra</button>
      </div>
    </div>
  )
}