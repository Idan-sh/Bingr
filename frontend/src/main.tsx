import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import Header from "./components/header/Header.tsx";
import { AppThemeProvider } from "./context/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
);
