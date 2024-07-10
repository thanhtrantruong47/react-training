import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Components/Icon',
} as Meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {},
};
