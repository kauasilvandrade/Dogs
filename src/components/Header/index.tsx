import { Link } from "react-router";

export function Header() {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login / Criar</Link>
    </nav>
  );
}
