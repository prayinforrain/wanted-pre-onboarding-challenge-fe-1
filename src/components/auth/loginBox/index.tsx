import React, { ChangeEvent, useState } from "react";

export default function LoginBox() {
  const [loginInput, setLoginInput] = useState({
    ID: "",
    Password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setLoginInput({
      ...loginInput,
      [target.name]: target.value,
    });
  };

  const doLogin = () => {
    console.log(loginInput);
  };

  // const validateForm = () => true;

  return (
    <div>
      <input type="text" name="ID" placeholder="ID" onChange={onChange} />
      <input
        type="password"
        name="Password"
        placeholder="Password"
        onChange={onChange}
      />
      <button type="button" onClick={doLogin}>
        submit
      </button>
    </div>
  );
}
