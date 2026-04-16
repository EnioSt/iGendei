import CalendarMonthCell from "../../forms/calendarMonthCell";

const CalendarMonth = ({ currentDate, events }) => {
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );

  // calcular dias visíveis (inclui dias da semana anterior e posterior para completar a grade)
  const startDay = startOfMonth.getDay(); // 0 = domingo
  const daysInMonth = endOfMonth.getDate();
  const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;

  const cells = [];
  for (let i = 0; i < totalCells; i++) {
    const dayNum = i - startDay + 1;
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      dayNum,
    );
    const isCurrentMonth = dayNum > 0 && dayNum <= daysInMonth;

    const dayEvents = events.filter(
      (ev) => ev.date.toDateString() === date.toDateString(),
    );

    cells.push(
      <CalendarMonthCell
        key={i}
        date={date}
        dayEvents={dayEvents}
        isCurrentMonth={isCurrentMonth}
      />,
    );
  }

  return (
    <div className="grid grid-cols-7 gap-1">
      {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((d) => (
        <div
          key={d}
          className="text-center text-(--foreground-label) font-bold"
        >
          {d}
        </div>
      ))}
      {cells}
    </div>
  );
};

export default CalendarMonth;
