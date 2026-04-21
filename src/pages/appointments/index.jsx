import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CalendarMonth from "../../components/ui/calendarMonth";
import CalendarWeek from "../../components/ui/calendarWeek";
import CalendarDay from "../../components/ui/calendarDay";
const Appointments = () => {
  const [view, setView] = useState("month"); // "month" | "week" | "day"
  const [date, setDate] = useState(new Date());

  // Função para formatar mês/ano
  const capitalizeFirst = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatMonthYear = (date) => {
    const formatted = date.toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric",
    });
    return capitalizeFirst(formatted);
  };

  // Navegação entre períodos
  const handlePrev = () => {
    const newDate = new Date(date);
    if (view === "month") newDate.setMonth(date.getMonth() - 1);
    if (view === "week") newDate.setDate(date.getDate() - 7);
    if (view === "day") newDate.setDate(date.getDate() - 1);
    setDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(date);
    if (view === "month") newDate.setMonth(date.getMonth() + 1);
    if (view === "week") newDate.setDate(date.getDate() + 7);
    if (view === "day") newDate.setDate(date.getDate() + 1);
    setDate(newDate);
  };

  const events = [
    {
      date: new Date(2026, 3, 13, 9, 0), // 13 Abril 2026, 09:00
      hour: "09:00",
      title: "Consulta Médica",
      description: "Clínica Saúde",
      status: "Confirmado",
    },
    {
      date: new Date(2026, 3, 13, 14, 30), // 13 Abril 2026, 14:30
      hour: "14:30",
      title: "Reunião de Projeto",
      description: "Equipe Alpha",
      status: "Pendente",
    },
    {
      date: new Date(2026, 3, 14, 10, 0), // 14 Abril 2026
      hour: "10:00",
      title: "Treino de Vôlei",
      description: "Quadra Central",
      status: "Confirmado",
    },
    {
      date: new Date(2026, 3, 14, 9, 0),
      hour: "09:00",
      title: "Consulta Médica",
      description: "Clínica Saúde",
      status: "Confirmado",
    },
    {
      date: new Date(2026, 3, 14, 11, 0),
      hour: "11:00",
      title: "Reunião de Projeto",
      description: "Equipe Alpha",
      status: "Pendente",
    },
    {
      date: new Date(2026, 3, 14, 14, 0),
      hour: "14:00",
      title: "Treino de Vôlei",
      description: "Quadra Central",
      status: "Confirmado",
    },
    {
      date: new Date(2026, 3, 14, 14, 0),
      hour: "14:00",
      title: "Treino de Vôlei",
      description: "Quadra Central",
      status: "Confirmado",
    },
    {
      date: new Date(2026, 3, 14, 16, 0),
      hour: "16:00",
      title: "Revisão de Código",
      description: "Dev Team",
      status: "Cancelado",
    },
    {
      date: new Date(2026, 3, 14, 18, 0),
      hour: "18:00",
      title: "Apresentação Comercial",
      description: "Cliente Beta",
      status: "Confirmado",
    },
    {
      date: new Date(2026, 3, 15, 16, 45), // 15 Abril 2026
      hour: "16:45",
      title: "Revisão de Código",
      description: "Dev Team",
      status: "Cancelado",
    },
    {
      date: new Date(2026, 3, 16, 11, 30), // 16 Abril 2026
      hour: "11:30",
      title: "Apresentação Comercial",
      description: "Cliente Beta",
      status: "Confirmado",
    },
    {
      date: new Date(2026, 3, 17, 9, 0), // 17 Abril 2026
      hour: "09:00",
      title: "Exame Laboratorial",
      description: "Laboratório Vida",
      status: "Pendente",
    },
    {
      date: new Date(2026, 3, 18, 15, 0), // 18 Abril 2026
      hour: "15:00",
      title: "Partida de Futebol",
      description: "Campo Municipal",
      status: "Confirmado",
    },
    {
      date: new Date(2026, 3, 19, 13, 0), // 19 Abril 2026
      hour: "13:00",
      title: "Reunião Estratégica",
      description: "Diretoria",
      status: "Cancelado",
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        {/* Título dinâmico */}
        <h2 className="text-center form-title text-(--foreground)">
          {view === "day"
            ? date.toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : view === "week"
              ? `Semana de ${date.toLocaleDateString("pt-BR", { day: "numeric", month: "long" })}`
              : formatMonthYear(date)}
        </h2>

        {/* Controles + Legenda */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
          {/* Navegação */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded bg-(--background-input) hover:bg-(--background-input-hover)"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded bg-(--background-input) hover:bg-(--background-input-hover)"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Filtros */}
          <div className="flex gap-2">
            <button
              onClick={() => setView("month")}
              className={`px-3 py-1 rounded ${
                view === "month"
                  ? "bg-(--brand-primary) text-(--foreground)"
                  : "bg-(--background-input) text-(--foreground-subtle)"
              }`}
            >
              Mês
            </button>
            <button
              onClick={() => setView("week")}
              className={`px-3 py-1 rounded ${
                view === "week"
                  ? "bg-(--brand-primary) text-(--foreground)"
                  : "bg-(--background-input) text-(--foreground-subtle)"
              }`}
            >
              Semana
            </button>
            <button
              onClick={() => setView("day")}
              className={`px-3 py-1 rounded ${
                view === "day"
                  ? "bg-(--brand-primary) text-(--foreground)"
                  : "bg-(--background-input) text-(--foreground-subtle)"
              }`}
            >
              Dia
            </button>
          </div>

          {/* Legenda */}
          <div className="flex gap-3 ml-0 md:ml-6">
            <span className="flex items-center gap-1 text-xs text-(--foreground-subtle)">
              <span className="w-3 h-3 rounded bg-(--bg-span-confirmado)"></span>{" "}
              Confirmado
            </span>
            <span className="flex items-center gap-1 text-xs text-(--foreground-subtle)">
              <span className="w-3 h-3 rounded bg-(--bg-span-pendente)"></span>{" "}
              Pendente
            </span>
            <span className="flex items-center gap-1 text-xs text-(--foreground-subtle)">
              <span className="w-3 h-3 rounded bg-(--bg-span-cancelado)"></span>{" "}
              Cancelado
            </span>
          </div>
        </div>
      </header>

      {/* Main (aqui você renderiza o calendário conforme o filtro) */}
      <main className="bg-(--background-card) rounded-lg p-6 min-h-112.5">
        {view === "month" && (
          <CalendarMonth currentDate={date} events={events} />
        )}
        {view === "week" && <CalendarWeek currentDate={date} events={events} />}
        {view === "day" && <CalendarDay currentDate={date} events={events} />}
      </main>
    </div>
  );
};

export default Appointments;
