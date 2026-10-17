import React from "react";
import { getByAltText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import Hero from "../home/HeroSection";

describe("Hero component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "Media/Images/homeHero.png");
  });

  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", {
      name: "/signup now/i"
    });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn btn-primary");
  });
});
