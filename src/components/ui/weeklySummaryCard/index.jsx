import TitleForm, { TitleCard } from "../../forms/titleForm";

const WeeklySummaryCard = () => {
  const todayIndex = new Date().getDay();
  // Exemplo de dados
  const days = [
    { label: "DOM", value: 0 },
    { label: "SEG", value: 30 },
    { label: "TER", value: 28 },
    { label: "QUA", value: 35 },
    { label: "QUI", value: 40 },
    { label: "SEX", value: 32 },
    { label: "SAB", value: 130 },
  ];

  const sum = days.reduce((acc, day) => acc + day.value, 0);
  const media = Math.round(sum / days.length);

  const today = days[todayIndex].label;

  return (
    <div className="w-72 md:w-58 lg:w-74.5 2xl:w-1/3 bg-(--background-card) rounded-lg flex flex-col">
      <article className="p-6 flex flex-col flex-1">
        {/* Header */}
        <header>
          <TitleCard
            title="Resumo Semanal"
            description="Frequência de agendamento por dia"
          />
        </header>

        {/* Main com gráfico */}
        <main className="flex-1 flex items-end justify-between gap-2 mt-6 overflow-hidden">
          {days.map((day) => {
            // limitar altura máxima
            const maxHeight = 130; // px
            const height = Math.min(day.value, maxHeight);

            return (
              <div
                key={day.label}
                className="flex flex-col items-center flex-1 min-w-0">
                <div
                  className={`w-full rounded-t-md transition-all duration-300 flex items-center justify-center text-xs text-white
            ${day.label === today ? "bg-(--bg-span-confirmado)" : "bg-gray-400"}`}
                  style={{ height: `${height}px` }}>
                  <span className="opacity-80 font-bold">{day.value}</span>
                </div>
                <span
                  className={`mt-2 text-xs md:text-sm font-semibold 
            ${day.label === today ? "text-(--card)" : "text-gray-300"}`}>
                  {day.label}
                </span>
              </div>
            );
          })}
        </main>

        {/* Footer */}
        <footer className="mt-6 text-center">
          <p className="text-sm text-(--foreground-subtle)">Média semanal</p>
          <p className="text-lg font-bold text-(--foreground)">
            {media} reservas/dia
          </p>
        </footer>
      </article>
    </div>
  );
};

export default WeeklySummaryCard;
