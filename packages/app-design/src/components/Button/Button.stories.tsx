import React from "react";
import {Story, Meta} from "@storybook/react";

import {Button, ButtonProps} from "./index";


export default {
    title: "",
    component: Button,
    parameters: {
        componentSubtitle: "",
    },
    args: {},
    argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return <Button />;
};

export const ButtonTemplate = Template.bind({});
