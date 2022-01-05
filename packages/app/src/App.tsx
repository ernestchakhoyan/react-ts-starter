import React from "react";
import Logo from "./assets/img/app-logo.png";
import {Button} from "@ernest/design";

export function App() {
    return (
        <>
            <h1>React TS Starter</h1>
            <img src={Logo} alt="logo" />
            <Button />
        </>
    );
}