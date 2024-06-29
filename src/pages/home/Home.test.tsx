import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

test("renders the home page", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const comingSoon = screen.getByText("Coming soon!");
  expect(comingSoon).toBeInTheDocument();
});
