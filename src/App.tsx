import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/common.scss";
import "./styles/reset.scss";
import AuthPage from "./pages/Auth";

export function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
