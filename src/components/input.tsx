import { ComponentProps } from "react";

interface IInputProps extends ComponentProps<"input"> {}

const Input = ({ type, placeholder, value, onChange }: IInputProps) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full px-4 text-black" />;
};

export default Input;
