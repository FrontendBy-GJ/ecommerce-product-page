import product1 from './assets/image-product-1.jpg';
import product2 from './assets/image-product-2.jpg';
import product3 from './assets/image-product-3.jpg';
import product4 from './assets/image-product-4.jpg';
import thumbnail1 from './assets/image-product-1-thumbnail.jpg';
import thumbnail2 from './assets/image-product-2-thumbnail.jpg';
import thumbnail3 from './assets/image-product-3-thumbnail.jpg';
import thumbnail4 from './assets/image-product-4-thumbnail.jpg';

export const products = [
  {
    id: crypto.randomUUID(),
    product: 'Fall Limited Edition Sneakers',
    info: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 125.0,
    originalPrice: 250.0,
    images: {
      main: [product1, product2, product3, product4],
      thumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
    },
  },
];
