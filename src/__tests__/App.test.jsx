import React from "react";
import {render, screen } from '@testing-library/react';
import App from "../App";

it("renders without crashing", () => {
  render(<App />);
});

it("displays homepage link", () => {
    render(<App />);
    const link = screen.getByRole('link')
    expect(link).toHaveTextContent(/genesisvlzqz/i)
})