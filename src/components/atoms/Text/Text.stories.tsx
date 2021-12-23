import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { Children } from "react";
import Text from ".";

export default {
  title: "Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = { ...Template.args, children: "Primary Text" };

export const Bold = Template.bind({});
Bold.args = { ...Template.args, children: "Bold Text", bold: true };
