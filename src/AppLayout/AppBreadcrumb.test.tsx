import { render, screen } from "@testing-library/react";
import AppBreadcrumb from "./AppBreadcrumb";
import { expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";

test("render the Breadcrumb component", () => {
  const testPath = "/source/create_source";
  render(
    <MemoryRouter initialEntries={[testPath]}>
      <AppBreadcrumb />
    </MemoryRouter>
  );

  const breadcrumb = screen.getByText("Create source");
  expect(breadcrumb).toHaveTextContent("Create source");

  const catalogLink = screen.getByText("Catalog");
  expect(catalogLink).toHaveAttribute("href", "/source/catalog");
});
