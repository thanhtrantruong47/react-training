import type { Meta, StoryObj } from '@storybook/react';

import RadioGruop from './Radio';

const meta: Meta<typeof RadioGruop> = {
  component: RadioGruop,
};

const colorOptions = ['red', 'green', 'blue'];

export default meta;
type Story = StoryObj<typeof RadioGruop>;

export const InputRadioColor: Story = {
  args: {
    options: colorOptions,
  },
};
