import { FaRegCalendarCheck, FaUserTimes } from "react-icons/fa";
import TitleForm, { TitleCard } from "../../components/forms/titleForm";
import AppointCard from "../../components/ui/appointCard";
import Card from "../../components/ui/card";
import WeeklySummaryCard from "../../components/ui/weeklySummaryCard";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <>
      <header className="flex flex-col items-center mb-4 md:mb-6 lg:items-start">
        <TitleCard
          title="Dashboard"
          description="Olá, aqui está seu resumo operacional."
        />
      </header>

      <div className="flex flex-col gap-4 justify-center items-center md:flex-row lg:justify-start ">
        <Card
          icon={<FaRegCalendarCheck />}
          cor="--card"
          bg="--background-input"
          label="+12% hoje"
          description="Reservas de hoje:"
          indicator="42"
        />
        <Card
          icon={<FaMoneyBillTrendUp />}
          cor="--card-money"
          bg="--bg-money"
          label="+R$ 1.200,00"
          description="Receitas acumuladas (mês):"
          indicator="R$ 18.450,00"
        />
        <Card
          icon={<FaUserTimes />}
          cor="--card-cancelado"
          bg="--bg-span-cancelado"
          label="-2.1% vs anterior"
          description="Taxa de ausência (mês):"
          indicator="4.8%"
        />
      </div>

      <div className="mt-4 flex flex-col gap-4 justify-center items-center md:flex-row lg:justify-start ">
        <AppointCard />
        <WeeklySummaryCard />
      </div>
    </>
  );
};

export default Dashboard;
