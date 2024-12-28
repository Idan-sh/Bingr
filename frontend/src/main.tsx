import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import { ScreenSizeProvider } from "./context/ScreenSizeProvider.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScreenSizeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ScreenSizeProvider>
  </StrictMode>
);
