import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/api'
import type { IProduct } from '../interfaces/Product'
import toast from 'react-hot-toast';
import { useCartStore } from '../hooks/useCartStore'
import './ProductDetail.css'

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<IProduct | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { addItem } = useCartStore()

  useEffect(() => {
    if (!id) {
      setIsLoading(false)
      setError('Product ID not provided.')
      return
    }

    const fetchProduct = async () => {
      setIsLoading(true)
      setError(null)
      setProduct(null)
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        setError('Product not found or API error.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addItem(product)
      toast.success(`"${product.title}" has been added to cart!`)
    }
  }

  if (isLoading) {
    return <div className="product-detail-loading">Loading product...</div>
  }

  if (error) {
    return <div className="product-detail-error">Error: {error}</div>
  }

  if (!product) {
    return <div className="product-detail-notfound">Product not found.</div>
  }

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} className="product-detail-image" />
      <div className="product-detail-info">
        <h1 className="product-detail-title">{product.title}</h1>
        <p className="product-detail-category">{product.category}</p>
        <p className="product-detail-description">{product.description}</p>
        <div className="product-detail-rating">
          <span>Review: {product.rating.rate} / 5 ({product.rating.count} reviews)</span>
        </div>
        <p className="product-detail-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
        </button>
      </div>
    </div>
  )
}