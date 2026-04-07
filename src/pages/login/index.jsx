import { useState } from "react";
import FormLogin from "../../components/forms/formLogin";
import Input from "../../components/forms/input";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormLogin>
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
        label="PASSWORD"
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
    </FormLogin>
  );
};

export default Login;
