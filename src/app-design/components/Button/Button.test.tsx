import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./index";

test("renders button text correctly", () => {
    const { getByText } = render(<Button />);
    const linkElement = getByText(/Design Button/i);
    screen.logTestingPlaygroundURL();
    expect(linkElement).toBeInTheDocument();
});
