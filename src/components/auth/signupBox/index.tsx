import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../../../hooks/useToast";
import { HttpPost } from "../../../utils/http";
import InputText from "../../common/InputText";

export default function SignupBox() {
  const navigate = useNavigate();
  const [signupInput, setSignupInput] = useState({
    email: "",
    password: "",
  });
  const SignupBtnRef = useRef<HTMLButtonElement>(null);
  const { addToast } = useToast();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setSignupInput({
      ...signupInput,
      [target.name]: target.value,
    });
  };

  const doSignup = async () => {
    const response = await HttpPost(
      "http://localhost:8080/users/create",
      signupInput
    );

    if (response.statusCode !== 200) {
      addToast(response.details);
      return;
    }
    localStorage.setItem("auth", response.token);
    navigate("/");
  };

  useEffect(() => {
    if (!SignupBtnRef.current) return;
    SignupBtnRef.current.disabled = !validateForm();
  }, [signupInput]);

  const validateForm = () => {
    if (!signupInput.email.match(/.*@.*\..*/)) {
      return false;
    }
    if (signupInput.password.length < 8) {
      return false;
    }
    return true;
  };

  return (
    <div className="authContainer">
      <div className="authForm">
        <InputText change={onChange} name="email" placeholder="Email" />
        <hr />
        <InputText
          change={onChange}
          name="password"
          placeholder="Password"
          isPassword
        />
      </div>
      <div className="authBtnContainer">
        <button
          type="button"
          className="signup"
          onClick={doSignup}
          ref={SignupBtnRef}
        >
          signup
        </button>
      </div>
    </div>
  );
}
