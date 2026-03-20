import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FleetPage from "./pages/FleetPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
