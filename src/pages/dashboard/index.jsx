import TitleForm from "../../components/forms/titleForm";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";

const Dashboard = () => {
  return (
    <>
      <header className="mb-4 md:mb-6">
        <TitleForm
          title="Dashboard"
          description="Olá, aqui está seu resumo operacional."
        />
      </header>

      <div className="flex flex-col gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Dashboard;
