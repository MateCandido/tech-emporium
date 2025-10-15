import { useState, useEffect } from 'react'
import { getProducts, getCategories, getProductsByCategory } from '../services/api'
import type { IProduct } from '../interfaces/Product'
import { ProductCard } from '../components/ProductCard'
import { CategoryFilter } from '../components/CategoryFilter/CategoryFilter'
import { ProductSkeletonCard } from './ProductSkeletonCard/ProductSkeletonCard'
import './Home.css'

export const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories()
        setCategories(data)
      } catch (err) {
        console.error("Failed to fetch categories:", err)
      }
    }
    fetchCategories()
  }, []) 

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setError(null)
      try {
        let data
        if (selectedCategory) {
          data = await getProductsByCategory(selectedCategory)
        } else {
          data = await getProducts()
        }
        setProducts(data)
      } catch (err) {
        setError('Unable to load products.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory]) 

  if (error) {
    return <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>Error: {error}</div>
  }

  return (
    <div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {isLoading ? (
                <div className="product-gallery">
                {Array.from({ length: 8 }).map((_, index) => (
                  <ProductSkeletonCard key={index} />
                ))}
              </div>
      ) : (
        <div className="product-gallery">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}