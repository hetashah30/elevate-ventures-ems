// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Apply from "./pages/Apply";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
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
