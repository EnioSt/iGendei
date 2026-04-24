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

export const InputSecondary = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  children,
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="label-text font-medium text-(--foreground-label) uppercase tracking-wide">
          {label}
        </label>
      )}
      <div className="flex items-center gap-3 px-4 py-3 rounded-(--radius-sm) border border-(--border-input) bg-(--background-input) transition-all duration-(--transition-fast) focus-within:border-(--border-focus) focus-within:bg-(--background-input-hover)">
        {icon && (
          <span className="text-(--foreground-subtle) text-base flex-shrink-0">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="flex-1 bg-transparent outline-none text-(--foreground) placeholder:text-(--foreground-disabled) text-sm"
        />
        {children}
      </div>
    </div>
  );
};

export default Input;
