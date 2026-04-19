import { useState } from "react";

const CalendarWeek = ({ currentDate, events }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

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
          <div
            key={idx}
            className={`border border-(--border) p-2 min-h-[402px] ${
              dayEvents.length > 0 ? "cursor-pointer" : ""
            } ${dayEvents.length > 0 && "bg-(--calendar) md:bg-(--background-card)"}`}
            onClick={() =>
              dayEvents.length > 0 && (setSelectedDay(day), setShowModal(true))
            }
          >
            {/* Mobile (<768px): só primeira letra */}
            <p className="block md:hidden text-sm text-(--foreground-subtle)">
              {day.toLocaleDateString("pt-BR", { weekday: "short" }).charAt(0)},{" "}
              {day.getDate()}
              {dayEvents.length > 0 && (
                <span className="ml-1 w-2 h-2 rounded-full bg-(--calendar-strong) inline-block"></span>
              )}
            </p>

            {/* Desktop (≥768px): abreviação normal */}
            <p className="hidden md:block text-sm text-(--foreground-subtle)">
              {day.toLocaleDateString("pt-BR", {
                weekday: "short",
                day: "numeric",
              })}
              {dayEvents.length > 0 && (
                <span className="ml-1 w-2 h-2 rounded-full bg-(--calendar-strong) inline-block"></span>
              )}
            </p>

            {/* Desktop (≥768px): lista de eventos */}
            <div className="hidden md:flex flex-col gap-1 mt-2 max-h-[354px] overflow-y-auto">
              {dayEvents.slice(0, 6).map((ev, i) => (
                <span
                  key={i}
                  className={`text-xs rounded px-1 truncate ${
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

              {dayEvents.length > 12 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDay(day);
                    setShowModal(true);
                  }}
                  className="text-xs text-(--foreground-subtle) hover:text-(--foreground) mt-1"
                >
                  +{dayEvents.length - 12}
                </button>
              )}
            </div>
          </div>
        );
      })}

      {/* Modal */}
      {showModal && selectedDay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-(--background-card) rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-(--foreground) font-bold mb-4">
              Agendamentos de {selectedDay.toLocaleDateString("pt-BR")}
            </h3>
            <div className="flex flex-col gap-2">
              {events
                .filter(
                  (ev) => ev.date.toDateString() === selectedDay.toDateString(),
                )
                .map((ev, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded ${
                      ev.status === "Confirmado"
                        ? "bg-(--bg-span-confirmado) text-(--foreground)"
                        : ev.status === "Pendente"
                          ? "bg-(--bg-span-pendente) text-(--foreground)"
                          : "bg-(--bg-span-cancelado) text-(--foreground)"
                    }`}
                  >
                    <p className="text-sm font-bold">
                      {ev.hour} - {ev.title}
                    </p>
                    <p className="text-xs">{ev.description}</p>
                  </div>
                ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="cursor-pointer mt-4 px-4 py-2 rounded bg-(--background-input) hover:bg-(--background-input-hover) text-(--foreground)"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWeek;

// const CalendarWeek = ({ currentDate, events }) => {
//   const startOfWeek = new Date(currentDate);
//   startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

//   const days = Array.from({ length: 7 }, (_, i) => {
//     const d = new Date(startOfWeek);
//     d.setDate(startOfWeek.getDate() + i);
//     return d;
//   });

//   return (
//     <div className="grid grid-cols-7 gap-2">
//       {days.map((day, idx) => {
//         const dayEvents = events.filter(
//           (ev) => ev.date.toDateString() === day.toDateString(),
//         );
//         return (
//           <div key={idx} className="border border-(--border) p-2 h-100.5">
//             <p className="text-sm text-(--foreground-subtle)">
//               {day.toLocaleDateString("pt-BR", {
//                 weekday: "short",
//                 day: "numeric",
//               })}
//             </p>
//             <div className="flex flex-col gap-1 mt-2">
//               {dayEvents.map((ev, i) => (
//                 <span
//                   key={i}
//                   className={`text-xs rounded px-1 ${
//                     ev.status === "Confirmado"
//                       ? "bg-(--bg-span-confirmado) text-(--foreground)"
//                       : ev.status === "Pendente"
//                         ? "bg-(--bg-span-pendente) text-(--foreground)"
//                         : "bg-(--bg-span-cancelado) text-(--foreground)"
//                   }`}
//                 >
//                   {ev.hour} - {ev.title}
//                 </span>
//               ))}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CalendarWeek;
