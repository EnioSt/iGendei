import TitleForm, { TitleCard } from "../../components/forms/titleForm";
import AppointCard from "../../components/ui/appointCard";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import WeeklySummaryCard from "../../components/ui/weeklySummaryCard";

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
        <Card />
        <Card />
        <Card />
      </div>

      <div className="mt-4 flex flex-col gap-4 justify-center items-center md:flex-row lg:justify-start ">
        <AppointCard />
        <WeeklySummaryCard />
      </div>
    </>
  );
};

export default Dashboard;
