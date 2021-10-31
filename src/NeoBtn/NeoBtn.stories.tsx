import { Story, Meta } from "@storybook/react";
import NeoBtn from "./NeoBtn";

export default {
  component: NeoBtn,
  title: "NeoBtn",
} as Meta;

const Template: Story = (args) => <NeoBtn {...args} />;
export const Primary = Template.bind({});
