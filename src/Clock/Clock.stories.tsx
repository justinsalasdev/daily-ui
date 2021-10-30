import { Story, Meta } from "@storybook/react";

import Clock from "./Clock";

export default {
  component: Clock,
  title: "Clock",
} as Meta;

const Template: Story = (args) => <Clock {...args} />;
export const Primary = Template.bind({});
