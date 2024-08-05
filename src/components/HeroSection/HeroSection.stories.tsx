import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from '@/components';

export default {
  component: HeroSection,
  title: '@/components/HeroSection',
} as Meta;

type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {},
};
