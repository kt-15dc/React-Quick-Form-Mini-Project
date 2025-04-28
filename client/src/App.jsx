import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SurveyFormPage from "./pages/SurveyFormPage";
import SummaryPage from "./pages/SummaryPage";


function App() {
  return (
    <Router>
      <div className="max-w-2xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<SurveyFormPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
