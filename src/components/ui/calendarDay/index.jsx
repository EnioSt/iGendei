const CalendarDay = ({ currentDate, events }) => {
  const dayEvents = events.filter(
    (ev) => ev.date.toDateString() === currentDate.toDateString(),
  );

  return (
    <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(60vh-6rem)] lg:max-h-[calc(70vh-6rem)] pr-1">
      {dayEvents.length === 0 ? (
        <p className="text-(--foreground-subtle)">Nenhum agendamento hoje.</p>
      ) : (
        dayEvents.map((ev, i) => (
          <div
            key={i}
            className={`p-3 rounded shadow-sm ${
              ev.status === "Confirmado"
                ? "bg-(--bg-span-confirmado) text-(--foreground)"
                : ev.status === "Pendente"
                  ? "bg-(--bg-span-pendente) text-(--foreground)"
                  : "bg-(--bg-span-cancelado) text-(--foreground)"
            }`}
          >
            <p className="font-bold">
              {ev.hour} - {ev.title}
            </p>
            <p className="text-sm">{ev.description}</p>
          </div>
        ))
      )}
    </div>
  ); 
};

export default CalendarDay;
