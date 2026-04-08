import { FaArrowRight } from "react-icons/fa";
import "./button.css";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
      <FaArrowRight />
    </button>
  );
};

export default Button;
