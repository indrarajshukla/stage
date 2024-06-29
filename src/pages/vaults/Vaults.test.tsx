import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Vaults from "./Vaults";
import { MemoryRouter } from "react-router-dom";

test("renders the valuts page", () => {
  render(
    <MemoryRouter>
      <Vaults />
    </MemoryRouter>
  );

  const comingSoon = screen.getByText("Coming soon!");
  expect(comingSoon).toBeInTheDocument();
});
