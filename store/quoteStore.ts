import { create } from 'zustand';
import { Service } from '@/data/services';

interface QuoteItem {
  service: Service;
  quantity: number;
}

interface QuoteStore {
  items: QuoteItem[];
  addItem: (service: Service) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearQuote: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useQuoteStore = create<QuoteStore>((set, get) => ({
  items: [],
  
  addItem: (service: Service) => {
    const items = get().items;
    const existingItem = items.find(item => item.service.slug === service.slug);
    
    if (existingItem) {
      set({
        items: items.map(item =>
          item.service.slug === service.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({
        items: [...items, { service, quantity: 1 }]
      });
    }
  },
  
  removeItem: (slug: string) => {
    set({
      items: get().items.filter(item => item.service.slug !== slug)
    });
  },
  
  updateQuantity: (slug: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeItem(slug);
      return;
    }
    
    set({
      items: get().items.map(item =>
        item.service.slug === slug
          ? { ...item, quantity }
          : item
      )
    });
  },
  
  clearQuote: () => {
    set({ items: [] });
  },
  
  getTotal: () => {
    return get().items.reduce((total, item) => {
      return total + (item.service.price * item.quantity);
    }, 0);
  },
  
  getItemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  }
}));
