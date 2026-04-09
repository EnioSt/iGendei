export const TitleForm = ({ title, description }) => {
  return (
    <>
      <h2
        className="form-title font-(--weight-extrabold) text-(--foreground)
             text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        {title}
      </h2>

      <p className="header-text-base text-(--foreground-label) font-(--weight-regular) ">
        {description}
      </p>
    </>
  );
};

export const TitleCard = ({ title, description }) => {
  return (
    <>
      <h2
        className="header-title font-(--weight-bold) text-(--foreground)
             text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
      >
        {title}
      </h2>

      <p className="header-text-base text-(--foreground-label) font-(--weight-regular) ">
        {description}
      </p>
    </>
  );
};

export default TitleForm;
