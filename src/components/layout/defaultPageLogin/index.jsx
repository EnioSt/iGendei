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
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DefaultPageLogin;
