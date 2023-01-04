import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/auth");
    }
  }, []);
  return <div>Main Page</div>;
}
