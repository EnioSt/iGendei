const TitleForm = ({ title, description }) => {
  return (
    <>
      <h2 className="form-title font-(--weight-extrabold) text-(--foreground)">
        {title}
      </h2>
      <p className="header-text-base text-(--foreground-label) font-(--weight-regular) ">
        {description}
      </p>
    </>
  );
};

export default TitleForm;
