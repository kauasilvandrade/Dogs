import { useState } from "react";
import { Link } from "react-router";
import { Input } from "../../Forms/Inputs";
import { Button } from "../../Forms/Buttons";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch(
      "https:dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      },
    );
    const json = await response.json();
    console.log(response);
    console.log(json);
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" />
        <Input type="password" label="Senha" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to={"/login/criar"}>Cadastro</Link>
    </section>
  );
}
