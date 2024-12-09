import {createContext, FC, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ICartContext, ICartContextProps} from '../interfaces/cartContext';
import {IFrequentlyBoughtProduct} from '../interfaces/product';

const CART_KEY = 'CART_ITEMS';
const WISHLIST_KEY = 'WISHLIST_ITEMS';

const CartContext = createContext<ICartContext | null>(null);

const CartContextProvider: FC<ICartContextProps> = ({children}) => {
  const [cartProducts, setCartProducts] = useState<IFrequentlyBoughtProduct[]>(
    [],
  );
  const [wishlistProducts, setWishlistProducts] = useState<
    IFrequentlyBoughtProduct[]
  >([]);

  useEffect(() => {
    const getItemsFromStorage = async () => {
      const storedCartItems = await AsyncStorage.getItem(CART_KEY);
      const storedWishlistItems = await AsyncStorage.getItem(WISHLIST_KEY);

      if (storedCartItems) setCartProducts(JSON.parse(storedCartItems));
      if (storedWishlistItems)
        setWishlistProducts(JSON.parse(storedWishlistItems));
    };

    getItemsFromStorage();
  }, []);

  useEffect(() => {
    const saveWishlistItems = async () => {
      try {
        await AsyncStorage.setItem(
          WISHLIST_KEY,
          JSON.stringify(wishlistProducts),
        );
      } catch (e) {
        console.error(e);
      }
    };

    saveWishlistItems();
  }, [wishlistProducts]);

  useEffect(() => {
    const saveCartItems = async () => {
      try {
        await AsyncStorage.setItem(CART_KEY, JSON.stringify(cartProducts));
      } catch (e) {
        console.error(e);
      }
    };

    saveCartItems();
  }, [cartProducts]);

  const addToCart = (product: IFrequentlyBoughtProduct) => {
    setCartProducts(prev => [...prev, product]);
  };

  const addToWishlist = (product: IFrequentlyBoughtProduct) => {
    if (!wishlistProducts.find(pro => product.id === pro.id)) {
      setWishlistProducts(prev => [...prev, product]);
    }
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistProducts(prev =>
      prev.filter(item => Number(item.id) !== productId),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        wishlistProducts,
        addToCart,
        addToWishlist,
        removeFromWishlist,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error('Error occured!');

  return context;
};
