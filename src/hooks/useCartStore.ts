import { create } from 'zustand'
import type { IProduct, ICartItem } from '../interfaces/Product'

interface CartState {
  items: ICartItem[]
  addItem: (item: IProduct) => void
  removeItem: (itemId: number) => void
}

export const useCartStore = create<CartState>((set) => ({
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
}))