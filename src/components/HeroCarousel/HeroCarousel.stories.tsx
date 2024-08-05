import type { Meta, StoryObj } from '@storybook/react';
import HeroCarousel from './HeroCarousel';
import { BANNER_IMAGES } from '@/constants';

export default {
  component: HeroCarousel,
  title: '@/components/HeroCarousel',
} as Meta;

type Story = StoryObj<typeof HeroCarousel>;

export const Default: Story = {
  args: { imagesCarousel: BANNER_IMAGES },
};
