import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { HttpPost } from "../../../utils/http";
import InputText from "../../common/InputText";

export default function LoginBox() {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const loginBtnRef = useRef<HTMLButtonElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setLoginInput({
      ...loginInput,
      [target.name]: target.value,
    });
  };

  const doLogin = async () => {
    const response = await HttpPost(
      "http://localhost:8080/users/login",
      loginInput
    );

    if (response.statusCode !== 200) {
      console.log(response);
      return;
    }
    localStorage.setItem("auth", response.token);
  };

  useEffect(() => {
    if (!loginBtnRef.current) return;
    loginBtnRef.current.disabled = !validateForm();
  }, [loginInput]);

  const validateForm = () => {
    if (!loginInput.email.match(/.*@.*\..*/)) {
      return false;
    }
    if (loginInput.password.length < 8) {
      return false;
    }
    return true;
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <InputText change={onChange} name="email" placeholder="Email" />
        <hr />
        <InputText
          change={onChange}
          name="password"
          placeholder="Password"
          isPassword
        />
      </div>
      <div className="loginBtnContainer">
        <button
          type="button"
          className="signin"
          onClick={doLogin}
          ref={loginBtnRef}
        >
          signin
        </button>
      </div>
    </div>
  );
}
