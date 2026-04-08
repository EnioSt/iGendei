import { useState } from "react";
import FormLogin from "../../components/forms/formLogin";
import Input from "../../components/forms/input";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEyeSlash } from "react-icons/fa";
import TitleForm from "../../components/forms/titleForm";
import Logo from "../../assets/igendei_icon.PNG";
import Button from "../../components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormLogin>
      <div className="flex flex-col gap-4 items-center mb-6">
        <img className="w-16 h-16" src={Logo} alt="logo da empresa" />
        <TitleForm
          title="Bem-vindo"
          description="Insira suas credenciais para acessar sua conta."
        />
      </div>
      <Input
        label="Email"
        type="email"
        placeholder="email@igendei.com.br"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={
          <span>
            <MdOutlineEmail />
          </span>
        }
      />
      <Input
        id="password"
        label="Senha"
        type="password"
        placeholder="••••••••••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={
          <span>
            <TbLockPassword />
          </span>
        }
      >
        <button
          className="cursor-pointer text-(--foreground-subtle)"
          type="button"
          aria-label="Toggle password visibility"
        >
          <FaRegEyeSlash />
        </button>
      </Input>

      <Button>Entrar</Button>
    </FormLogin>
  );
};

export default Login;
