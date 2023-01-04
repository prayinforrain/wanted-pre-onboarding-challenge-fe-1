import React from "react";
import { Link } from "react-router-dom";
import SignupBox from "../components/auth/signupBox";
import "../styles/auth.scss";

export default function SignupPage() {
  return (
    <div className="page">
      <SignupBox />
      <Link to="/auth" className="goBack">
        back
      </Link>
    </div>
  );
}
