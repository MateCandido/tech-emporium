import { Link } from 'react-router-dom'
import type { IProduct } from '../interfaces/Product'
import './ProductCard.css'

interface ProductCardProps {
  product: IProduct
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}