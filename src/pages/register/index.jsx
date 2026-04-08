import FormRegister from "../../components/forms/formRegister";
import LogoText from "../../assets/logo_text2.PNG";
import TitleForm from "../../components/forms/titleForm";
import Input from "../../components/forms/input";
import { useState } from "react";
import { TiBusinessCard } from "react-icons/ti";
import { MdOutlineBusinessCenter, MdOutlineEmail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import Button from "../../components/ui/button";
import { TbLockPassword } from "react-icons/tb";

const Register = () => {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      <img
        className="
    w-70 h-32.5        
    md:w-100 md:h-45 
    xl:w-125 xl:h-75  
    2xl:w-150 2xl:h-75  
  "
        src={LogoText}
        alt=""
      />
      <FormRegister className="w-full max-w-125">
        <TitleForm
          title="Crie sua conta!"
          description="Cadastre corretamente seus dados."
        />
        <div className="flex flex-col md:flex-col lg:flex-row gap-8 mt-8">
          <Input
            label="Nome completo"
            type="text"
            placeholder="José da Silva"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            icon={
              <span>
                <TiBusinessCard />
              </span>
            }
          />
          <Input
            label="Nome da empresa"
            type="text"
            placeholder="Corporação XYZ"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            icon={
              <span>
                <MdOutlineBusinessCenter />
              </span>
            }
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

        <Button>Criar conta</Button>
      </FormRegister>
      ;
    </div>
  );
};

export default Register;
