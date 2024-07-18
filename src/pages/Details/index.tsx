import ProductDetail from '../../components/ProductDetail/ProductDetail';
import image1 from '../../assets/images/detail-small.jpg';
import image2 from '../../assets/images/small-t-shirt.jpg';

const productDetailData = {
  id: 1,
  images: [image1, image2, image1],
  title: 'Sample Product',
  description:
    'This is a sample product descriptscreen sizes, you can utilize media queries in your CSS module (productDetail.module.css). Here',
  price: 99.99,
  colors: ['Red', 'Blue', 'Green'],
  sizes: ['S', 'M', 'L'],
  stock: 50,
  rate: 4,
  numberRating: 5555,
};

const Details = () => {
  return <>{<ProductDetail {...productDetailData} />}</>;
};

export default Details;
