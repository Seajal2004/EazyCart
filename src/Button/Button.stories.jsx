import React from "react";
import NormalButton from "./NormalButton";
import "../index.css";

const ButtonStory = {
    title: "My Button",
    component: NormalButton,  // Add component to the story
};
export default ButtonStory;

const Template = (args) => <NormalButton {...args} />;  // Ensure JSX is returned

export const myPrimaryButton = Template.bind({});
myPrimaryButton.args = {
    name: "Primary",
    type: "primary",
};

export const mySecondaryButton = Template.bind({});
mySecondaryButton.args = {
    name: "Secondary",
    type: "secondary",
};