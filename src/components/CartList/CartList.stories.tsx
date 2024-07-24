import type { Meta, StoryObj } from '@storybook/react';
import CartList from './CartList';
import { CartItem } from '../../types/cartItem';

export default {
  component: CartList,
  title: 'Components/CartList',
} as Meta;

type Story = StoryObj<typeof CartList>;

const productDetails: CartItem[] = [
  {
    id: '1',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhjpAMGZr_n_ABGlri34mUcwi_mpNlTO1_essdAYk9IrlKhT53CbjMqxh44Lke-HDUO4wLmmCVL8Em31KLUql1Wf3ETUvI_28-kkJXb15eM2eOMBFCUUkT7GZ897B2bIDLBqre-D8&usqp=CAc',
    title: 'T-Shirt',
    price: 100,
    color: 'red',
    stock: 10,
    quantity: 5,
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQhjpAMGZr_n_ABGlri34mUcwi_mpNlTO1_essdAYk9IrlKhT53CbjMqxh44Lke-HDUO4wLmmCVL8Em31KLUql1Wf3ETUvI_28-kkJXb15eM2eOMBFCUUkT7GZ897B2bIDLBqre-D8&usqp=CAc',
    title: 'T-Shirt basic',
    price: 150,
    color: 'blue',
    stock: 5,
    quantity: 6,
  },
];

export const Default: Story = {
  args: { cartItems: productDetails },
};
