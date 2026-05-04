import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { UserContext } from "../../../../context/UserContext";

import MinhasFotos from "./../../../../assets/feed.svg?react";
import Estatisticas from "./../../../../assets/estatisticas.svg?react";
import Adicionar from "./../../../../assets/adicionar.svg?react";
import Sair from "./../../../../assets/sair.svg?react";

import styles from "./styles.module.css";
import { useMedia } from "../../../../hooks/useMedia";

export function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia({ media: "(max-width: 40rem)" });
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}
      >
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
          onClick={handleLogout}
          className={`bg-[#eee] rounded-[0.2rem] h-10 w-10 flex items-center justify-center border border-transparent transition cursor-pointer`}
        >
          <Sair aria-label="Icone de Sair" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}
