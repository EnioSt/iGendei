import { FaRegCalendarCheck } from "react-icons/fa";

const Card = ({ icon, label, description, indicator, cor, bg }) => {
  return (
    <div className="w-72 md:w-58 h-42 bg-(--background-card) rounded-lg lg:w-74.5 lg:h-42 2xl:w-1/3 ">
      <article className="p-6">
        <div className="flex flex-col gap-3">
          <div
            className="flex justify-between"
            style={{ color: `var(${cor})` }}
          >
            <span
              className="p-3 rounded-sm"
              style={{ backgroundColor: `var(${bg})` }}
            >
              {/* <FaRegCalendarCheck /> */}
              {icon}
            </span>
            <div>
              <p className="font-(--weight-medium)">{label}</p>
            </div>
          </div>
          <p className="font-(--weight-regular) text-(--foreground-subtle)">
            {description}
          </p>
          <h3 className="header-title font-(--weight-bold) text-(--foreground)">
            {indicator}
          </h3>
        </div>
      </article>
    </div>
  );
};

export default Card;
