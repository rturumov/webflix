import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./i18n.tsx";
import "./index.css";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import {NextUIProvider} from "@nextui-org/react";
import {FavoritesProvider} from "./contexts/movieFavoritesContext.tsx";

// Create a new router instance
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
        <FavoritesProvider>
      <NextUIProvider>
      <RouterProvider router={router} />
        </NextUIProvider>
        </FavoritesProvider>
    </StrictMode>,
  );
}
