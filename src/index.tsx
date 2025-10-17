import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementDefault } from "./screens/ElementDefault";
import App from "./App";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
