import { Outlet } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";

const DefaultPageLogin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-(--background)">
      <Header />

      <main
        role="main"
        className="flex flex-1 items-center justify-center px-6 py-12 bg-(--background-secondary)"
      >
        <section
          aria-labelledby="page-content"
          className="w-full max-w-(--container-width)"
        >
          <div
            id="page-content"
            className="mx-auto w-full max-w-(--login-card-width) rounded-(--radius-md) shadow-(--shadow-md) bg-(--background-card) p-8"
          >
            <Outlet />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DefaultPageLogin;
