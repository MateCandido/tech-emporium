import { Link } from 'react-router-dom'

export const ThankYou = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>🎉 Thank you for your purchase!</h1>
      <p>Your order has been processed successfully.</p>
      <Link to="/" style={{ fontSize: '1.2rem', color: '#2c3e50' }}>
      Return to Home Page
      </Link>
    </div>
  )
}