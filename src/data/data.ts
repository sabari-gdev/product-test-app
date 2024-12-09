import {IProduct} from '../interfaces/product';

const productData: IProduct = {
  name: 'Decor Village Lightweight Mattress Sofa Set - 5 Seater',
  commonDescription:
    'Experience Comfort and Style with the Premium Sofa Set. Elevate your living space with our Decor Village Premium 5-Seater Sofa Set, designed for unmatched comfort and modern elegance. Crafted with high-quality materials, this sofa set is perfect for families, gatherings, or simply relaxing in style.',
  colors: [
    {name: 'Harvest Gold', hex: '#E3AD33'},
    {name: 'Eerie Black', hex: '#1A1919'},
    {name: 'Pakistan Green', hex: '#1C3A13'},
  ],
  images: {
    'Harvest Gold': [
      'https://m.media-amazon.com/images/I/51Y40HtI+WL._SL1000_.jpg',
      'https://m.media-amazon.com/images/I/61juWGeT4sL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51Vaq9Y9-pL._SL1500_.jpg',
    ],
    'Eerie Black': [
      'https://m.media-amazon.com/images/I/51BmXazdGVL._SL1000_.jpg',
      'https://m.media-amazon.com/images/I/511d1ir1rKL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51qqJd0hg-L._SL1500_.jpg',
    ],
    'Pakistan Green': [
      'https://m.media-amazon.com/images/I/517S9gX8uFL._SL1000_.jpg',
      'https://m.media-amazon.com/images/I/51PDAaLCNLL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51VJjD50iiL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61UOtwxbxDL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/51POWbDPIYL._SL1500_.jpg',
    ],
  },
  prices: {
    'Harvest Gold': 9999.99,
    'Eerie Black': 10249.99,
    'Pakistan Green': 10999.99,
  } as Record<string, number>,
  originalPrices: {
    'Harvest Gold': 19999.99,
    'Eerie Black': 102249.99,
    'Pakistan Green': 109999.99,
  },
  discountPercentages: {
    'Harvest Gold': 32,
    'Eerie Black': 17,
    'Pakistan Green': 24,
  },
  sizeDetails: {
    width: 70,
    height: 45,
    depth: 67,
    seatWidth: 78,
    seatDepth: 98,
    seatHeight: 65,
  },
  dimensionImage:
    'https://m.media-amazon.com/images/I/613aEKkqU2L._SL1435_.jpg',
  ratings: {
    'Harvest Gold': {rating: 4.7, totalRatings: 345},
    'Eerie Black': {rating: 3.7, totalRatings: 3845},
    'Pakistan Green': {rating: 4.2, totalRatings: 3405},
  } as Record<string, {rating: number; totalRatings: number}>,
  descriptions: {
    'Harvest Gold': `The Decor Village Lightweight Mattress Sofa Set in beige is designed to provide the perfect blend of comfort and elegance. Its lightweight build and washable design make it ideal for modern homes. Perfect for a 5-seater arrangement.`,
    'Eerie Black': `The Decor Village Lightweight Mattress Sofa Set in brown offers a timeless appeal with its rich tones. Built with durable, washable material, it combines functionality and sophistication effortlessly.`,
    'Pakistan Green': `The Decor Village Lightweight Mattress Sofa Set in gray is a versatile choice that fits seamlessly into contemporary decor styles. Comfortable, lightweight, and washable for long-term use.`,
  },
  frequentlyBought: [
    {
      id: '1',
      name: 'Brand 1',
      image: 'https://m.media-amazon.com/images/I/51BmXazdGVL._SL1000_.jpg',
      price: 1499.99,
      discountedPrice: 1299.99,
      discountPercentage: 45,
      ratings: {rating: 4.7, totalRatings: 345},
    },
    {
      id: '2',
      name: 'Brand 2',
      image: 'https://m.media-amazon.com/images/I/51BmXazdGVL._SL1000_.jpg',
      price: 999.99,
      discountedPrice: 799.99,
      discountPercentage: 45,
      ratings: {rating: 4.7, totalRatings: 345},
    },
    {
      id: '3',
      name: 'Brand 3',
      image: 'https://m.media-amazon.com/images/I/51BmXazdGVL._SL1000_.jpg',
      price: 499.99,
      discountedPrice: 399.99,
      discountPercentage: 45,
      ratings: {rating: 4.7, totalRatings: 345},
    },
  ],
};

export default productData;
