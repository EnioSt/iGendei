import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const DefaultPageAdmin = () => {
  return (
    <div className="min-h-screen flex bg-(--background)">
      {/* Sidebar */}
      <div className="hidden xl:block w-64">
        <Sidebar />
      </div>

      {/* Área principal */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="block xl:hidden">
          <Sidebar />
        </header>

        {/* Conteúdo principal */}
        <main
          role="main"
          className="flex-1 px-4 py-6 bg-(--background-secondary)"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultPageAdmin;
