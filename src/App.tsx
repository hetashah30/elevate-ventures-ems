// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
