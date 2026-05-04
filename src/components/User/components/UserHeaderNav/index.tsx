import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { UserContext } from "../../../../context/UserContext";

import MinhasFotos from "./../../../../assets/feed.svg?react";
import Estatisticas from "./../../../../assets/estatisticas.svg?react";
import Adicionar from "./../../../../assets/adicionar.svg?react";
import Sair from "./../../../../assets/sair.svg?react";

import styles from "./styles.module.css";

export function UserHeaderNav() {
  const [mobile, setMobile] = useState();
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <nav className="grid grid-cols-4 gap-4 ">
      <NavLink
        end
        to="/conta"
        className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border border-transparent transition cursor-pointer ${styles.a}`}
      >
        <MinhasFotos aria-label="Icone de Feed" />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink
        to="/conta/estatisticas"
        className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border border-transparent transition cursor-pointer ${styles.a}`}
      >
        <Estatisticas aria-label="Icone de Estatisticas" />
        {mobile && "Estatisticas"}
      </NavLink>
      <NavLink
        to="/conta/postar"
        className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border border-transparent transition cursor-pointer ${styles.a}`}
      >
        <Adicionar aria-label="Icone de Adicionar" />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button
        onClick={userLogout}
        className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border border-transparent transition cursor-pointer`}
      >
        <Sair aria-label="Icone de Sair" />
        {mobile && "Sair"}
      </button>
    </nav>
  );
}
