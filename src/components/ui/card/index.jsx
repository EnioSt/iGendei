import { FaRegCalendarCheck } from "react-icons/fa";

const Card = () => {
  return (
    <div className="w-74.5 h-42 bg-(--background-card) rounded-lg">
      <article className="p-6">
        <div className="flex flex-col gap-3">
          <div className="text-(--card) flex justify-between">
            <span className="bg-(--background-input) p-3 rounded-sm">
              <FaRegCalendarCheck />
            </span>
            <div>
              <p className="font-(--weight-medium)">+12% hoje</p>
            </div>
          </div>
          <p className="font-(--weight-regular) text-(--foreground-subtle)">
            Reservas de hoje:
          </p>
          <h3 className="header-title font-(--weight-bold) text-(--foreground)">
            42
          </h3>
        </div>
      </article>
    </div>
  );
};

export default Card;
