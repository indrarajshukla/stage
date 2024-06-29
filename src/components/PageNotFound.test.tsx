import { render, screen } from "@testing-library/react";
import PageNotFound from "./PageNotFound";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import Home from "../pages/home/Home";

test("InvalidURL: renders PageNotFound", () => {
  const testPath = "/random_path";
  render(
    <MemoryRouter initialEntries={[testPath]}>
      <PageNotFound />
    </MemoryRouter>
  );

  const pageNotFound = screen.getByText("404 Page not found");
  expect(pageNotFound).toBeInTheDocument();
});

test("ValidURL: renders PageNotFound", () => {
  const testPath = "/";
  render(
    <MemoryRouter initialEntries={[testPath]}>
      <Home />
    </MemoryRouter>
  );

  const pageNotFound = screen.queryByText("404 Page not found");
  expect(pageNotFound).toBeNull();
});
