import mainImages from '@/assets/images/detail-small.jpg';
import secondaryImages from '@/assets/images/small-t-shirt.jpg';
import { Product } from '../types/product';

export const PRODUCT_DETAIL: Product = {
  id: 1,
  images: [mainImages, secondaryImages, secondaryImages],
  title: 'Smart T-Shirt',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.',
  price: 40,
  colors: ['Black', 'Blue', 'Green'],
  sizes: ['S', 'M', 'L'],
  stock: 50,
  rate: 4,
  numberRating: 5555,
};
