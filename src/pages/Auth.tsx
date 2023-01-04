import React from "react";
import { Link } from "react-router-dom";
import LoginBox from "../components/auth/loginBox";
import "../styles/auth.scss";

export default function AuthPage() {
  return (
    <div className="page">
      <LoginBox />
      <Link to="/" className="signup">
        signup
      </Link>
    </div>
  );
}
