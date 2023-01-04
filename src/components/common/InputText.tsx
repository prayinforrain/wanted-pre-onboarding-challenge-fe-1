import React from "react";

interface InputProps {
  isPassword?: boolean;
  name: string;
  placeholder: string;
  change: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({ ...Props }: InputProps) {
  return (
    <div className="textInput">
      <label htmlFor={Props.name}>{Props.placeholder}</label>
      <input
        type={Props.isPassword ? "password" : "text"}
        name={Props.name}
        id={Props.name}
        onChange={Props.change}
        placeholder=" "
      />
    </div>
  );
}

InputText.defaultProps = {
  isPassword: false,
};
