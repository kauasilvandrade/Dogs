import { useEffect, useState } from "react";
import { UserHeaderNav } from "../UserHeaderNav";
import styles from "./styles.module.css";
import { useLocation } from "react-router";

export function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
