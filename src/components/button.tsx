import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  type: "submit" | "button";
}

const Button = ({ type, value, onClick }: IButtonProps) => {
  return (
    <button type={type === "submit" ? "submit" : "button"} value={value} onClick={onClick} className="border px-3 py-1">
      {value}
    </button>
  );
};

export default Button;
