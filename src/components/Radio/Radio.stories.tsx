import type { Meta, StoryObj } from '@storybook/react';

import Radio from './Radio';

const meta: Meta<typeof Radio> = {
  component: Radio,
};

const colorOptions = ['red', 'green', 'blue'];
const sizeOptions = ['S', 'M', 'L'];

export default meta;
type Story = StoryObj<typeof Radio>;

export const InputRadioColor: Story = {
  args: {
    variant: 'color',
    options: colorOptions,
  },
};

export const InputRadioSize: Story = {
  args: {
    variant: 'sizes',
    options: sizeOptions,
  },
};
