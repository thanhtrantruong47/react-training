import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';
import { BrowserRouter } from 'react-router-dom';

export default {
  component: Logo,
  title: 'Components/Logo',
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};
