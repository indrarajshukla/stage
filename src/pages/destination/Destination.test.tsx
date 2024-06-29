import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";
import Destinations from "./Destinations";
import { http, HttpResponse } from "msw";
import { server } from "../../mocks/server";

test("Loading: Render destinations page", () => {
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Destinations />
      </QueryClientProvider>
    </MemoryRouter>
  );

  const pipelinePage = screen.getByText("Loading...");
  expect(pipelinePage).toBeInTheDocument();
});

test("EmptyStage: Render destinations page", async () => {
  server.use(
    http.get("/api/destinations", () => {
      return HttpResponse.json([]);
    })
  );
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Destinations />
      </QueryClientProvider>
    </MemoryRouter>
  );

  await screen.findByRole("button", { name: "New destination" });

  const pipelinePage = screen.getByText("No destination available");
  expect(pipelinePage).toBeInTheDocument();
});

test("WithData: Render destinations page", async () => {
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Destinations />
      </QueryClientProvider>
    </MemoryRouter>
  );

  await screen.findByRole("button", { name: "New destination" });

  const pipelinePage = screen.getByText("List of configured active destination.");
  expect(pipelinePage).toBeInTheDocument();
});
