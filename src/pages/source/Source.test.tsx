import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";
import Sources from "./Sources";
import { http, HttpResponse } from "msw";
import { server } from "../../mocks/server";

test("Loading: Render Source page", () => {
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Sources />
      </QueryClientProvider>
    </MemoryRouter>
  );

  const pipelinePage = screen.getByText("Loading...");
  expect(pipelinePage).toBeInTheDocument();
});

test("EmptyStage: Render source page", async () => {
  server.use(
    http.get("/api/sources", () => {
      return HttpResponse.json([]);
    })
  );
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Sources />
      </QueryClientProvider>
    </MemoryRouter>
  );

  await screen.findByRole("button", { name: "New source" });

  const pipelinePage = screen.getByText("No source available");
  expect(pipelinePage).toBeInTheDocument();
});

test("WithData: Render source page", async () => {
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Sources />
      </QueryClientProvider>
    </MemoryRouter>
  );

  await screen.findByRole("button", { name: "New source" });

  const pipelinePage = screen.getByText("List of configured active source.");
  expect(pipelinePage).toBeInTheDocument();
});
