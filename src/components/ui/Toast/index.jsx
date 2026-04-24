import { TbCheck } from "react-icons/tb";

const Toast = ({ message, visible }) => (
  <div
    className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-(--radius-sm) bg-(--background-card) border border-(--border-strong) shadow-(--shadow-md) transition-all duration-(--transition-normal) ${
      visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }`}>
    <span className="w-5 h-5 rounded-full bg-(--success)/20 flex items-center justify-center text-(--success) text-xs">
      <TbCheck />
    </span>
    <span className="text-(--foreground-muted) text-sm">{message}</span>
  </div>
);

export default Toast;