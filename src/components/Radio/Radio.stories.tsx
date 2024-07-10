import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

export default {
  component: Radio,
  title: 'Components/Radio',
} as Meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};
