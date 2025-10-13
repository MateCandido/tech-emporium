import axios from 'axios'
import type { IProduct } from '../interfaces/Product'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await api.get<IProduct[]>('/products')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar a lista de produtos:', error)
    throw new Error('Não foi possível buscar os produtos.')
  }
}

export const getProductById = async (id: string): Promise<IProduct> => {
  try {
    const response = await api.get<IProduct>(`/products/${id}`)
    return response.data
  } catch (error) {
    console.error(`Erro ao buscar o produto com id ${id}:`, error)
    throw new Error('Não foi possível buscar o produto.')
  }
}