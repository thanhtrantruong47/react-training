import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(
  <>
    <StrictMode></StrictMode>
  </>
);
