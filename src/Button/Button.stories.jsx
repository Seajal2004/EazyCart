import Button from "./NormalButton";
import React from "react";
import "../index.css"

const ButtonStory = {
    title:"Button"
} 

export default ButtonStory;


const Template  = (args) => <Button {...args}></Button>;



export const Primary = Template.bind({});
Primary.args = {
    name: "Primary",
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    name: "Secondry",
  type: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  name: 'Danger Button',
  type: 'danger',
};