import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/common.scss";
import "./styles/reset.scss";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthPage from "./pages/Auth";
import SignupPage from "./pages/Signup";
import ToastController from "./components/common/ToastController";
import MainPage from "./pages/Main";

const queryClient = new QueryClient();

export function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
