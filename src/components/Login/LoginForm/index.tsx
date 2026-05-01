import { Link } from "react-router";
import { Input } from "../../Forms/Inputs";
import { Button } from "../../Forms/Buttons";
import { useForm } from "../../../hooks/useform";

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      const response = await fetch(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        },
      );
      const json = await response.json();
      console.log(response);
      console.log(json);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to={"/login/criar"}>Cadastro</Link>
    </section>
  );
}
