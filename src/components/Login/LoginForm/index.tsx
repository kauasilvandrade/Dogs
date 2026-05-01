import { Link } from "react-router";
import { Input } from "../../Forms/Inputs";
import { Button } from "../../Forms/Buttons";
import { useForm } from "../../../hooks/useform";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Error } from "../../Helper";

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className="mb-8" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link
        className="inline-block text-[#666#] py-2 px-0 after:content-[''] after:h-[2px] after:w-full after:bg-current after:block"
        to={"/login/perdeu"}
      >
        Perdeu a senha?
      </Link>
      <div className="mt-16">
        <h2
          className="leading-none text-[2rem] after:content-[''] after:h-2 after:w-12 after:block after:rounded-[0.2rem] after:bg-[#ddd]"
          style={{ fontFamily: "var(--font-sans-second)" }}
        >
          Cadastre-se
        </h2>
        <p className="my-8">Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link
        className="text-base cursor-pointer border-none rounded-[0.4rem] bg-[#fb1] text-[#764701] p-3 outline-none hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] focus-within:hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] transition min-w-32 disabled:opacity-[0.5] disabled:cursor-wait"
        style={{ fontFamily: "var(--font-sans)" }}
        to={"/login/criar"}
      >
        Cadastro
      </Link>
    </section>
  );
}
