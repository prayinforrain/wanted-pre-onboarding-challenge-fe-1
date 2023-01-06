import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginBox from "../components/auth/loginBox";
import "../styles/auth.scss";

export default function AuthPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="page">
      <LoginBox />
      <Link to="/auth/signup" className="signup">
        signup
      </Link>
    </div>
  );
}
