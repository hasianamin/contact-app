import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactListPage from "./pages/ContactListPage";
import ContactFormPage from "./pages/ContactFormPage"; // Create this component for the form page

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<ContactFormPage />} />
        <Route path="/" element={<ContactListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
