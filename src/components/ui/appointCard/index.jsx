import TitleForm from "../../forms/titleForm";

const AppointCard = () => {
  return (
    <div className="w-72  md:w-120 h-109 bg-(--background-card) rounded-lg lg:w-153 lg:h-109 2xl:w-2/3 2xl:h-146">
      <article className="p-8">
        <TitleForm title="Próximos Agendamentos" />
      </article>
    </div>
  );
};

export default AppointCard;
