const SectionCard = ({ icon, title, description, children }) => (
  <div className="bg-(--background-card) border border-(--border) rounded-(--radius-md) p-6 flex flex-col gap-6">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 flex-shrink-0 rounded-(--radius-sm) bg-(--background-tertiary) border border-(--border-strong) flex items-center justify-center text-(--brand-primary) text-lg">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="font-semibold text-(--foreground) text-base">
          {title}
        </span>
        <span className="text-(--foreground-subtle) text-xs">
          {description}
        </span>
      </div>
    </div>
    {children}
  </div>
);

export default SectionCard;