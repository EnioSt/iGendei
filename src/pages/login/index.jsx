import { useState } from "react";
import FormLogin from "../../components/forms/formLogin";
import Input from "../../components/forms/input";

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
        icon={<span>📧</span>}
      />
      <Input
        id="password"
        label="PASSWORD"
        type="password"
        placeholder="••••••••••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<span>🔒</span>}
      >
        <button
          className="cursor-pointer"
          type="button"
          aria-label="Toggle password visibility"
        >
          👁️
        </button>
      </Input>
    </FormLogin>
  );
};

export default Login;
