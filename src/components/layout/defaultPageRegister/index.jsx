import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";

const DefaultPageRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-(--background)">
      <Header
        link="Login"
        paragraph="Ja tem uma conta?"
        onClick={() => navigate("/")}
      />

      <main
        role="main"
        className="flex flex-1 items-center justify-center px-6 py-12 bg-(--background-secondary)"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DefaultPageRegister;
