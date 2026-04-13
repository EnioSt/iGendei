const CalendarWeek = ({ currentDate, events }) => {
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day, idx) => {
        const dayEvents = events.filter(
          (ev) => ev.date.toDateString() === day.toDateString(),
        );
        return (
          <div key={idx} className="border border-(--border) p-2 h-64">
            <p className="text-sm text-(--foreground-subtle)">
              {day.toLocaleDateString("pt-BR", {
                weekday: "short",
                day: "numeric",
              })}
            </p>
            <div className="flex flex-col gap-1 mt-2">
              {dayEvents.map((ev, i) => (
                <span
                  key={i}
                  className={`text-xs rounded px-1 ${
                    ev.status === "Confirmado"
                      ? "bg-(--bg-span-confirmado) text-(--foreground)"
                      : ev.status === "Pendente"
                        ? "bg-(--bg-span-pendente) text-(--foreground)"
                        : "bg-(--bg-span-cancelado) text-(--foreground)"
                  }`}
                >
                  {ev.hour} - {ev.title}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarWeek;
