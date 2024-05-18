import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  type: "submit" | "button";
}

const Button = ({ type, children, onClick }: IButtonProps) => {
  return (
    <button type={type === "submit" ? "submit" : "button"} onClick={onClick} className="border px-3 py-1">
      {children}
    </button>
  );
};

export default Button;
