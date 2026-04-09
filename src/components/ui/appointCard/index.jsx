import AppointList from "../../forms/appointList";
import TitleForm from "../../forms/titleForm";

const AppointCard = () => {
  return (
    <div className="w-72  md:w-120 h-109 bg-(--background-card) rounded-lg lg:w-153 lg:h-109 2xl:w-2/3 2xl:h-146">
      <article className="p-8">
        <TitleForm title="Próximos Agendamentos" />
        <div className="flex flex-col gap-4">
          <AppointList
            name="John Doe"
            hour="09:00"
            appoint="Consulta"
            status="Confirmado"
          />
          <AppointList
            name="Jane Smith"
            hour="10:30"
            appoint="Retorno"
            status="Pendente"
          />
          <AppointList
            name="John Doe"
            hour="09:00"
            appoint="Consulta"
            status="Confirmado"
          />
          <AppointList
            name="John Doe"
            hour="09:00"
            appoint="Consulta"
            status="Confirmado"
          />
        </div>
      </article>
    </div>
  );
};

export default AppointCard;
