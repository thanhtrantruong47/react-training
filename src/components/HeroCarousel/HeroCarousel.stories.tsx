import type { Meta, StoryObj } from '@storybook/react';
import HeroCarousel from './HeroCarousel';
import banner from '../../assets/images/banner.jpg';
import bannerMore from '../../assets/images/banner-more.jpg';

export default {
  component: HeroCarousel,
  title: 'Components/HeroCarousel',
} as Meta;

const images = [
  { id: 1, src: banner },
  { id: 2, src: bannerMore },
  { id: 3, src: bannerMore },
];

type Story = StoryObj<typeof HeroCarousel>;

export const Default: Story = {
  args: { images: images },
};
