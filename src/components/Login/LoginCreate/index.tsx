import { Button } from "../../Forms/Buttons";
import { Input } from "../../Forms/Inputs";

export function LoginCreate() {
  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
}
