import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from '@/components';

export default {
  component: NumberInput,
  title: '@/components/NumberInput',
} as Meta;

type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: { value: 1 },
};
