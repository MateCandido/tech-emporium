import { Link } from 'react-router-dom'

export const ThankYou = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>🎉 Obrigado pela sua compra!</h1>
      <p>Seu pedido foi processado com sucesso.</p>
      <Link to="/" style={{ fontSize: '1.2rem', color: '#2c3e50' }}>
        Voltar para a Página Inicial
      </Link>
    </div>
  )
}