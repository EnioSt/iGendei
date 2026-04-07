const Input = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon, // novo prop para o ícone
  children, // para extras como "Forgot Password?" ou botão de visibilidade
}) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      {/* Label semântico */}
      <label
        htmlFor={id}
        className="font-(--weight-semibold) text-(--foreground-muted) text-sm leading-4"
      >
        {label}
      </label>

      {/* Wrapper para input + ícone + extras */}
      <div className="relative flex items-center">
        {/* Ícone à esquerda */}
        {icon && (
          <span className="absolute left-3 text-(--foreground-subtle)">
            {icon}
          </span>
        )}

        {/* Input */}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full rounded-(--radius-sm) bg-(--background-input) 
                     text-(--foreground) placeholder:text-(--foreground-subtle) 
                     border border-(--border-input) pl-10 pr-12 py-3 
                     focus:outline-none focus:border-(--border-focus) 
                     focus:shadow-(--shadow-sm) transition-(--transition-normal)"
        />

        {/* Extras à direita (link, botão, etc.) */}
        {children && (
          <div className="absolute right-3 flex items-center gap-2 text-sm">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
