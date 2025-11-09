import { createContext, useCallback, useMemo } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { toast } from 'sonner';

export const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useLocalStorage('cart', []);

  const addToCart = useCallback((item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      
      if (existingItem) {
        toast.success(`Increased quantity of ${item.name}`);
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      
      toast.success(`${item.name} added to cart`);
      return [...prevItems, { ...item, quantity: 1 }];
    });
  }, [setItems]);

  const removeFromCart = useCallback((itemId) => {
    setItems((prevItems) => {
      const item = prevItems.find((i) => i.id === itemId);
      if (item) {
        toast.success(`${item.name} removed from cart`);
      }
      return prevItems.filter((i) => i.id !== itemId);
    });
  }, [setItems]);

  const updateQuantity = useCallback((itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  }, [setItems, removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
    toast.success('Cart cleared');
  }, [setItems]);

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const itemCount = useMemo(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
