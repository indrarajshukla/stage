import { render, screen } from "@testing-library/react";
import Pipelines from "./Pipelines";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { http, HttpResponse } from "msw";
import { server } from "../../mocks/server";

test("LoadingStage: Render pipeline page", () => {
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Pipelines />
      </QueryClientProvider>
    </MemoryRouter>
  );

  const pipelinePage = screen.getByText("Loading...");
  expect(pipelinePage).toBeInTheDocument();
});

// test("APIErrorStage: Render pipeline page", async () => {
//     server.use(
//         http.get('/api/pipelines', () => {
//           return new HttpResponse(null, {status: 500})
//         }),
//       )
//     const queryClient = new QueryClient();
//     render(
//       <MemoryRouter>
//         <QueryClientProvider client={queryClient}>
//           <Pipelines />
//         </QueryClientProvider>
//       </MemoryRouter>
//     );
//     await screen.getByText("Error:");
//     const pipelinePage = screen.getByText("Error:");

//     expect(pipelinePage).toBeInTheDocument();
//   });

test("EmptyStage: Render pipeline page", async () => {
  server.use(
    http.get("/api/pipelines", () => {
      return HttpResponse.json([]);
    })
  );
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Pipelines />
      </QueryClientProvider>
    </MemoryRouter>
  );

  await screen.findByRole("button", { name: "New pipeline" });

  const pipelinePage = screen.getByText("No pipeline available");
  expect(pipelinePage).toBeInTheDocument();
});

test("WithData: Render pipeline page", async () => {
  const queryClient = new QueryClient();
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Pipelines />
      </QueryClientProvider>
    </MemoryRouter>
  );

  await screen.findByRole("button", { name: "New pipeline" });

  const pipelinePage = screen.getByText("List of configured active pipelines.");
  expect(pipelinePage).toBeInTheDocument();
});
