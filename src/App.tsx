import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/common.scss";
import "./styles/reset.scss";
import { RecoilRoot } from "recoil";
import AuthPage from "./pages/Auth";
import ToastController from "./components/common/ToastController";

export function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <ToastController />
        <Router>
          <Routes>
            <Route path="/" element={<AuthPage />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
