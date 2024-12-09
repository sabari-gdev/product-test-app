import {ReactNode} from 'react';
import {IFrequentlyBoughtProduct} from './product';

export interface ICartContext {
  wishlistProducts: IFrequentlyBoughtProduct[];
  cartProducts: IFrequentlyBoughtProduct[];
  addToCart: (product: IFrequentlyBoughtProduct) => void;
  addToWishlist: (product: IFrequentlyBoughtProduct) => void;
  removeFromWishlist: (productId: number) => void;
}

export interface ICartContextProps {
  children: ReactNode;
}
