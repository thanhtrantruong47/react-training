import type { Meta, StoryObj } from '@storybook/react';
import HeroCarousel from './HeroCarousel';

export default {
  component: HeroCarousel,
  title: 'Components/HeroCarousel',
} as Meta;

type Story = StoryObj<typeof HeroCarousel>;

export const Default: Story = {
  args: {},
};
