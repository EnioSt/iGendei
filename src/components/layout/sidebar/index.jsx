import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import TitleForm from "../../forms/titleForm";
import NavLinkCustom from "../../ui/link";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Appointments", path: "/appointments" },
    { name: "Customers", path: "/customers" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <>
      {/* Botão Hamburger - Mobile */}
      {!open && (
        <div className="md:hidden p-4">
          <button onClick={() => setOpen(true)}>
            <RxHamburgerMenu className="h-6 w-6 text-(--foreground)" />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        {/* Header com botão de fechar no mobile */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            {/* <h1 className="text-xl font-bold">SchedulePro</h1>
            <p className="text-sm text-gray-400">Management Suite</p> */}
            <TitleForm title="Corporação XYZ" description="José da Silva" />
          </div>

          {/* Botão de fechar só aparece em telas menores */}
          <button onClick={() => setOpen(false)} className="md:hidden">
            <IoMdClose className="h-6 w-6 text-(--foreground)" />
          </button>
        </div>

        {/* Links */}
        <nav className="mt-6 flex flex-col space-y-2">
          {navItems.map((item) => (
            <NavLinkCustom key={item.name} name={item.name} path={item.path} />
          ))}
        </nav>

        {/* Rodapé */}
        <div className="absolute bottom-0 w-full p-6 border-t border-gray-700">
          <p className="text-sm text-gray-400">iGendei</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
