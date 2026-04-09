import AppointList from "../../forms/appointList";
import TitleForm, { TitleCard } from "../../forms/titleForm";

const AppointCard = () => {
  const appointments = [
    {
      name: "John Doe",
      hour: "09:00",
      appoint: "Quadra de Vôlei",
      status: "Confirmado",
    },
    {
      name: "Jane Smith",
      hour: "10:30",
      appoint: "Quadra de Tênis",
      status: "Pendente",
    },
    {
      name: "Lula da Silva",
      hour: "11:00",
      appoint: "Quadra de Futebol",
      status: "Cancelado",
    },
    {
      name: "Maria Oliveira",
      hour: "12:00",
      appoint: "Piscina",
      status: "Confirmado",
    },
    {
      name: "Carlos Pereira",
      hour: "13:30",
      appoint: "Quadra de Basquete",
      status: "Pendente",
    },
    {
      name: "Ana Souza",
      hour: "14:00",
      appoint: "Quadra de Vôlei",
      status: "Confirmado",
    },
    {
      name: "Pedro Santos",
      hour: "15:00",
      appoint: "Quadra de Tênis",
      status: "Cancelado",
    },
    {
      name: "Fernanda Lima",
      hour: "16:00",
      appoint: "Quadra de Futebol",
      status: "Confirmado",
    },
  ];
  return (
    <div className="w-72  md:w-120 h-109 bg-(--background-card) rounded-lg lg:w-153 lg:h-109 2xl:w-2/3 2xl:h-146">
      <article className="p-8">
        <TitleCard title="Próximos Agendamentos" />
        <div className="flex flex-col gap-4 mt-4 max-h-70 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {appointments.map((item, index) => (
            <AppointList key={index} {...item} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default AppointCard;
