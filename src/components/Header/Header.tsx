import { Link } from 'react-router-dom'
import { useCartStore } from '../../hooks/useCartStore'
import styles from './Header.module.css'

export const Header = () => {
  const { items } = useCartStore()
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Home
        </Link>
        <nav>
          <Link to="/cart" className={styles.cartLink}>
            🛒
            {totalItems > 0 && (
              <span className={styles.cartCounter}>{totalItems}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}