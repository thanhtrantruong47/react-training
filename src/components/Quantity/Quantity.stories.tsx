import type { Meta, StoryObj } from '@storybook/react';
import Quantity from './Quantity';

export default {
  component: Quantity,
  title: 'Components/Quantity',
} as Meta;

type Story = StoryObj<typeof Quantity>;

export const Default: Story = {
  args: { defaultValue: 1 },
};
