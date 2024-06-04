import type { Meta, StoryObj } from "@storybook/react";

import ScientistList from "./index";
const meta: Meta<typeof ScientistList> = {
  component: ScientistList,
};

export default meta;
type Story = StoryObj<typeof ScientistList>;
const scientist = [
  {
    imageId:
      "https://khunganhonline.com/images/frame/frame_icon/khung-anh-hoa-hinh5aec7498e4003.jpg",
    name: "Marie Curie",
    profession: "Physicist & Chemist",
    awards: "Nobel Prize in Physics, Nobel Prize in Chemistry",
    discoveries: "Radioactivity, Polonium, Radium",
    imageSize: 1400,
  },
];

export const ScientistsList: Story = {
  args: {
    scientists: scientist,
  },
};
