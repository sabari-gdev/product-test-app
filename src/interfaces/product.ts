export interface IProduct {
  name: string;
  commonDescription: string;
  colors: IProductColorOption[];
  images: Record<string, string[]>;
  prices: Record<string, number>;
  originalPrices: Record<string, number>;
  discountPercentages: Record<string, number>;
  sizeDetails: IProductSizeDetails;
  dimensionImage: string;
  ratings: Record<string, IProductRatingDetails>;
  descriptions: Record<string, string>;
  frequentlyBought: IFrequentlyBoughtProduct[];
}

interface IProductColorOption {
  name: string;
  hex: string;
}

interface IProductRatingDetails {
  rating: number;
  totalRatings: number;
}

interface IProductSizeDetails {
  width: number;
  height: number;
  depth: number;
  seatWidth: number;
  seatDepth: number;
  seatHeight: number;
}

export interface IFrequentlyBoughtProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  discountedPrice: number;
  discountPercentage: number;
  ratings: IProductRatingDetails;
}
