import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between px-8 min-h-[68px] bg-(--background-navbar)">
      <h1 className="header-title text-(--foreground) font-(--weight-bold)">
        iGendei
      </h1>

      <nav
        aria-label="User actions"
        className="flex items-center gap-6 header-text-base"
      >
        <p className="text-(--foreground-subtle)">Novo por aqui?</p>
        <a
          onClick={() => navigate("/register")}
          className="text-(--info) font-(--weight-medium) cursor-pointer hover:text-(--info-hover)"
        >
          Sign up
        </a>
      </nav>
    </header>
  );
};

export default Header;
