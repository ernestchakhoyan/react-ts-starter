import React from "react";
import {Story, Meta} from "@storybook/react";

import {Button as ButtonComponent, ButtonProps} from "./index";


export default {
    title: "BaseComponents/Button",
    component: ButtonComponent,
    parameters: {
        componentSubtitle: "Button UI component",
    },
    args: {},
    argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return <ButtonComponent />;
};

export const Button = Template.bind({});
