// src/pages/Home.tsx

import { useState, useEffect } from 'react'
import { getProducts, getCategories, getProductsByCategory } from '../services/api'
import type { IProduct } from '../interfaces/Product'
import { ProductCard } from '../components/ProductCard'
import { CategoryFilter } from '../components/CategoryFilter/CategoryFilter'
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
        console.error("Falha ao buscar categorias:", err)
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
        setError('Não foi possível carregar os produtos.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory]) 

  if (error) {
    return <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>Erro: {error}</div>
  }

  return (
    <div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Carregando produtos...</div>
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