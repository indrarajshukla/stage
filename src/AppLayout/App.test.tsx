import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders the App", () => {
  render(<App />);

  const headingElement = screen.getByRole("heading", { name: /Home/i });
  const dbzLogo = screen.getByAltText("Debezium logo");

  expect(headingElement).toBeInTheDocument();
  expect(dbzLogo).toBeInTheDocument();
  expect(headingElement).toHaveTextContent("Home");
});
