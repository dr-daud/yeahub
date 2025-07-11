import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import BaseLayout from "./layouts/BaseLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  </StrictMode>
);
