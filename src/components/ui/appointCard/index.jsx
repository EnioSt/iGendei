import AppointList from "../../forms/appointList";
import TitleForm, { TitleCard } from "../../forms/titleForm";

const AppointCard = () => {
  return (
    <div className="w-72  md:w-120 h-109 bg-(--background-card) rounded-lg lg:w-153 lg:h-109 2xl:w-2/3 2xl:h-146">
      <article className="p-8">
        <TitleCard title="Próximos Agendamentos" />
        <div className="flex flex-col gap-4 mt-4">
          <AppointList
            name="John Doe"
            hour="09:00"
            appoint="Quadra de Volei"
            status="Confirmado"
          />
          <AppointList
            name="Jane Smith"
            hour="10:30"
            appoint="Quadra de Tenis"
            status="Pendente"
          />
          <AppointList
            name="Lula da Silva"
            hour="09:00"
            appoint="Quadra de Volei"
            status="Cancelado"
          />
          <AppointList
            name="Jair Messias Boloro"
            hour="09:00"
            appoint="Quadra de Volei"
            status="Merda"
          />
          <AppointList
            name="John Doe"
            hour="09:00"
            appoint="Quadra de Volei"
            status="Confirmado"
          />
          <AppointList
            name="Jane Smith"
            hour="10:30"
            appoint="Quadra de Tenis"
            status="Pendente"
          />
          <AppointList
            name="Lula da Silva"
            hour="09:00"
            appoint="Quadra de Volei"
            status="Cancelado"
          />
          <AppointList
            name="Jair Messias Boloro"
            hour="09:00"
            appoint="Quadra de Futebol"
            status="Merda"
          />
        </div>
      </article>
    </div>
  );
};

export default AppointCard;
