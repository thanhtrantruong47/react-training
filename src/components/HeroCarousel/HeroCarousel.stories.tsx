import type { Meta, StoryObj } from '@storybook/react';
import HeroCarousel from './HeroCarousel';

export default {
  component: HeroCarousel,
} as Meta;

type Story = StoryObj<typeof HeroCarousel>;

export const primaryHeroCarousel: Story = {
  args: {},
};
