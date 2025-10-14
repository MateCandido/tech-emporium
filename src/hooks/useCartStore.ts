import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { IProduct, ICartItem } from '../interfaces/Product'

interface CartState {
  items: ICartItem[]
  addItem: (item: IProduct) => void
  removeItem: (itemId: number) => void
  incrementQuantity: (itemId: number) => void
  decrementQuantity: (itemId: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (newItem) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === newItem.id)
          if (existingItem) {
            const updatedItems = state.items.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
            return { items: updatedItems }
          } else {
            return { items: [...state.items, { ...newItem, quantity: 1 }] }
          }
        }),

      removeItem: (itemId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        })),

      incrementQuantity: (itemId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      decrementQuantity: (itemId) =>
        set((state) => {
          const itemToDecrement = state.items.find((item) => item.id === itemId)
          if (itemToDecrement?.quantity === 1) {
            return { items: state.items.filter((item) => item.id !== itemId) }
          }
          return {
            items: state.items.map((item) =>
              item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
            ),
          }
        }),
        clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage', 
    }
  )
)