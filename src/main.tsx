import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, Link } from "./router";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import App from "./App";

const qc = new QueryClient();

const routes = {
  "/": App,
  "/products": ProductsPage,
  "/categories": CategoriesPage,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={qc}>
      <nav
        style={{
          padding: 12,
          borderBottom: "1px solid #ddd",
          marginBottom: 12,
        }}
      >
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
        <Link to="/categories">Categories</Link>
      </nav>
      <RouterProvider routes={routes} />
    </QueryClientProvider>
  </StrictMode>,
);
