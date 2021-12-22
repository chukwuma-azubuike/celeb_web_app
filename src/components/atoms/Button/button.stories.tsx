import React from "react";
import "tailwindcss/tailwind.css";
import Button from ".";
import { action } from "@storybook/addon-actions";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const primary = () => (
  <Button width="w-48" onClick={action("Story Test Button Clicked!")}>
    Primary
  </Button>
);

export const primaryLoading = () => <Button width="w-48" loading />;

export const primaryDisabled = () => (
  <Button width="w-48" disabled>
    Primary disabled
  </Button>
);

export const secondary = () => <Button width="w-48" secondary>Secondary</Button>;

export const secondaryLoading = () => <Button width="w-48" secondary loading>Secondary</Button>;

export const secondaryDisabled = () => <Button width="w-48" secondary disabled>Secondary</Button>;