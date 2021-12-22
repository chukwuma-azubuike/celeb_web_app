import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from ".";

export default {
  title: "Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LargeLogoText = Template.bind({});
LargeLogoText.args = { size: "lg", variant: "logo_text_color" };

export const MediumLogoText = Template.bind({});
MediumLogoText.args = { size: "md", variant: "logo_text_color" };

export const SmallLogoText = Template.bind({});
SmallLogoText.args = { size: "sm", variant: "logo_text_color" };
