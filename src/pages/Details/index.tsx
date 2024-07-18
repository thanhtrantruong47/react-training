import ProductDetail from '../../components/ProductDetail/ProductDetail';
import image1 from '../../assets/images/detail-small.jpg';
import image2 from '../../assets/images/small-t-shirt.jpg';

const productDetailData = {
  id: 1,
  images: [image1, image2, image1],
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

const Details = () => {
  return <>{<ProductDetail {...productDetailData} />}</>;
};

export default Details;
