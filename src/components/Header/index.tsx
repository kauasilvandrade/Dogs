import { Link } from "react-router";
import Dogs from "../../assets/dogs.svg";
import User from "../../assets/usuario.svg";

export function Header() {
  return (
    <header className="shadow fixed w-full z-10 bg-white top-0">
      <nav className="container h-16 flex justify-between items-center">
        <Link to={"/"} className="px-0 py-2">
          <img src={Dogs} aria-label="Dogs - Home" alt="Ícone Dogs" />
        </Link>
        <Link to={"/login"} className="text-[#333] flex items-center gap-2">
          Login / Criar
          <img src={User} className="w-[14px] h-[17px]" />
        </Link>
      </nav>
    </header>
  );
}
