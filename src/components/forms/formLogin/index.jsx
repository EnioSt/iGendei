const FormLogin = ({ children }) => {
  return (
    <>
      <section
        aria-labelledby="page-content"
        className="w-full max-w-(--container-width)"
      >
        <div
          id="page-content"
          className="mx-auto w-full max-w-(--login-card-width) rounded-(--radius-md) shadow-(--shadow-md) bg-(--background-card) p-8"
        >
          {children}
        </div>
      </section>
    </>
  );
};

export default FormLogin;
