import { ReactNode } from "react";
import Button from "../components/Button";

interface alertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: alertProps) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      {children}
      <Button
        btnType="button"
        color=""
        context="btn-close"
        attributes={{
          "data-bs-dismiss": "alert",
          "aria-label": "close",
        }}
        aria-label="close"
        onClick={onClose}
      ></Button>
    </div>
  );
};

export default Alert;
