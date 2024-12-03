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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./public/sw.js')
      .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
      })
      .catch((error) => {
          console.error('Service Worker registration failed:', error);
      });
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
