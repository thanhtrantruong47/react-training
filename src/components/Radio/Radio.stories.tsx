import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

export default {
  component: Radio,
} as Meta;

type Story = StoryObj<typeof Radio>;

export const radio: Story = {
  args: {},
};
