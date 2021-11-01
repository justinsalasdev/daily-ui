import { Story, Meta } from "@storybook/react";
import NeoToggle from "./NeoToggle";

export default {
  component: NeoToggle,
  title: "NeoToggle",
} as Meta;

const Template: Story = (args) => <NeoToggle {...args} />;
export const Primary = Template.bind({});
