import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import Header from "./components/header/Header.tsx";
import { AppThemeProvider } from "./context/ThemeProvider.tsx";
import "./assets/styles/setup/main.scss";
import SwipePage from "./pages/SwipePage.tsx";
import Footer from "./components/footer/Footer.tsx";
import AboutUsPage from "./pages/AboutUsPage.tsx";
import BrowsePage from "./pages/BrowsePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/swipe" element={<SwipePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
);
