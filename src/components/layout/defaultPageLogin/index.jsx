import { Outlet } from "react-router-dom";
import Header from "../../header";

const DefaultPage = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default DefaultPage;
