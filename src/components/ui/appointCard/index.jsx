import AppointList from '../../forms/appointList';
import TitleForm, { TitleCard } from '../../forms/titleForm';

const AppointCard = () => {
  const appointments = [
    {
      name: 'John Doe',
      hour: '09:00',
      appoint: 'Quadra de Vôlei',
      status: 'Confirmado',
    },
    {
      name: 'Jane Smith',
      hour: '10:30',
      appoint: 'Quadra de Tênis',
      status: 'Pendente',
    },
    {
      name: 'Lula da Silva',
      hour: '11:00',
      appoint: 'Quadra de Futebol',
      status: 'Cancelado',
    },
    {
      name: 'Maria Oliveira',
      hour: '12:00',
      appoint: 'Piscina',
      status: 'Confirmado',
    },
    {
      name: 'Carlos Pereira',
      hour: '13:30',
      appoint: 'Quadra de Basquete',
      status: 'Pendente',
    },
    {
      name: 'Ana Souza',
      hour: '14:00',
      appoint: 'Quadra de Vôlei',
      status: 'Confirmado',
    },
    {
      name: 'Pedro Santos',
      hour: '15:00',
      appoint: 'Quadra de Tênis',
      status: 'Cancelado',
    },
    {
      name: 'Fernanda Lima',
      hour: '16:00',
      appoint: 'Quadra de Futebol',
      status: 'Confirmado',
    },
  ];
  return (
    <div className="w-full md:w-120 lg:w-153 2xl:w-2/3 bg-(--background-card) rounded-lg flex flex-col max-h-109 lg:max-h-[480px] 2xl:max-h-146">
      <article className="p-8 flex flex-col flex-1 min-h-0">
        <TitleCard title="Próximos Agendamentos" />
        <div className="flex flex-col gap-4 mt-4 flex-1 min-h-0 overflow-y-auto">
          {appointments.map((item, index) => (
            <AppointList key={index} {...item} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default AppointCard;
