import { useState, useEffect } from 'react'
import { getProducts } from '../services/api'
import type { IProduct } from '../interfaces/Product'
import { ProductCard } from '../components/ProductCard'
import './Home.css'

export const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        setError('Não foi possível carregar os produtos. Tente novamente mais tarde.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (isLoading) {
    return <div className="loading-message">Carregando produtos...</div>
  }

  if (error) {
    return <div className="error-message">Erro: {error}</div>
  }

  return (
    <div className="product-gallery">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}