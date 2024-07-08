import { Product } from '../../types/product';

interface ProductListProps {
  products: Product[];
  onClick: () => void;
}

const ProductList = ({ products, onClick }: ProductListProps) => {
  return <></>;
};

export default ProductList;
