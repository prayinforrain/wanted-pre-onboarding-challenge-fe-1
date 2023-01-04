import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/common.scss";
import "./styles/reset.scss";
import { RecoilRoot } from "recoil";
import AuthPage from "./pages/Auth";
import SignupPage from "./pages/Signup";
import ToastController from "./components/common/ToastController";
import MainPage from "./pages/Main";

export function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <ToastController />
        <Router>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
