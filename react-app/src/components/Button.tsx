import { ReactNode } from "react";

interface CustomAttributes {
  "data-bs-dismiss": string;
  "aria-label": string;
}

interface buttonProps {
  attributes?: CustomAttributes;
  children?: string;
  color?: string;
  context?: string;
  btnType?: "button" | "submit" | "reset";
  onClick: () => void;
}

const Button = ({
  attributes,
  btnType,
  children,
  color,
  context,
  onClick,
}: buttonProps) => {
  return (
    <button
      type={btnType}
      {...attributes}
      className={"btn " + color + context}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
