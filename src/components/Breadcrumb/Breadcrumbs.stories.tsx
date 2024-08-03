import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from '.';
import { BREADCRUMBS } from '../../mocks/breadcrumbs';

export default {
  component: Breadcrumbs,
  title: 'Components/Breadcrumbs',
} as Meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: { items: BREADCRUMBS },
};
