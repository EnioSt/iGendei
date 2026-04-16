import { useState } from "react";

const CalendarMonthCell = ({ date, dayEvents, isCurrentMonth }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`border border-(--border) p-2 min-h-32 overflow-hidden ${
        isCurrentMonth ? "bg-(--background-card)" : "bg-(--background-tertiary)"
      }`}
    >
      {/* Número do dia */}
      <p className="text-xs text-(--foreground-subtle)">
        {isCurrentMonth ? date.getDate() : ""}
      </p>

      {/* Eventos visíveis */}
      <div className="flex flex-col gap-1 mt-1">
        {dayEvents.slice(0, 3).map((ev, idx) => (
          <span
            key={idx}
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

        {/* Badge de mais */}
        {dayEvents.length > 3 && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // evita conflito com célula
              setShowModal(true);
            }}
            className="text-xs text-(--foreground-subtle) hover:text-(--foreground) mt-1 cursor-pointer"
          >
            +{dayEvents.length - 3}
          </button>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)} // fecha ao clicar fora
        >
          <div
            className="bg-(--background-card) rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro
          >
            <h3 className="text-(--foreground) font-bold mb-4">
              Agendamentos de {date.toLocaleDateString("pt-BR")}
            </h3>
            <div className="flex flex-col gap-2">
              {dayEvents.map((ev, idx) => (
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

export default CalendarMonthCell;
