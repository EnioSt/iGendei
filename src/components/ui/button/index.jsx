import { FaArrowRight } from "react-icons/fa";
import "./button.css";

const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
      <FaArrowRight />
    </button>
  );
};

export default Button;
