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

export const ButtonSecondary = ({ onClick, children, variant = "primary", type = "button", disabled }) => {
  const base =
    "cursor-pointer font-semibold px-6 py-3 rounded-(--radius-sm) transition-all duration-(--transition-normal) flex items-center justify-center gap-2 text-sm";

  const variants = {
    primary:
      "bg-image-(--gradient-button) text-(--foreground) shadow-(--shadow-button) hover:opacity-90 active:scale-[0.98]",
    ghost:
      "bg-transparent border border-(--border-strong) text-(--foreground-muted) hover:bg-(--background-elevated) active:scale-[0.98]",
    danger:
      "bg-transparent border border-(--card-cancelado)/40 text-(--card-cancelado) hover:bg-(--bg-span-cancelado)/30 active:scale-[0.98]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
