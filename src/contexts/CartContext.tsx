import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { CartItem as CartItemType } from '@/types/cartItem';

interface CartContextType {
  productsInCart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  isRemoving?: string | null; // Track which item is being removed
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [productsInCart, setProductsInCart] = useState<CartItemType[]>([]);
  const [isRemoving, setIsRemoving] = useState<string | null>(null);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('productsInCart') || '[]');
    setProductsInCart(items);
  }, []);

  const addToCart = (item: CartItemType) => {
    const existingItemIndex = productsInCart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
      const updatedCartItems = [...productsInCart];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + item.quantity,
      };
      setProductsInCart(updatedCartItems);
      localStorage.setItem('productsInCart', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...productsInCart, item];
      setProductsInCart(updatedCartItems);
      localStorage.setItem('productsInCart', JSON.stringify(updatedCartItems));
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedItems = productsInCart.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item));
    setProductsInCart(updatedItems);
    localStorage.setItem('productsInCart', JSON.stringify(updatedItems));
  };

  const removeFromCart = (id: string) => {
    setIsRemoving(id);
    const updatedItems = productsInCart.filter(item => item.id !== id);
    setProductsInCart(updatedItems);
    localStorage.setItem('productsInCart', JSON.stringify(updatedItems));
    setIsRemoving(null);
  };

  const clearCart = () => {
    setProductsInCart([]);
    localStorage.removeItem('productsInCart');
  };

  return (
    <CartContext.Provider value={{ productsInCart, addToCart, updateQuantity, removeFromCart, clearCart, isRemoving }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
