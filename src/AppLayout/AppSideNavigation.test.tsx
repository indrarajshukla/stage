import { render, screen } from "@testing-library/react";
import AppSideNavigation from "./AppSideNavigation";
import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

test("renders the side navigation", () => {
  render(
    <MemoryRouter>
      <AppSideNavigation />
    </MemoryRouter>
  );
  const sideNavItems = screen.getAllByRole("link");
  expect(sideNavItems).toHaveLength(5);

  const expectedTexts = ["Home", "Source", "Destination", "Vaults", "Pipeline"];

  const sideNavTexts = sideNavItems.map((item) => item.textContent);

  expectedTexts.forEach((text) => {
    expect(sideNavTexts).toContain(text);
  });
});
