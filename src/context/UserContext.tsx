import { createContext, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../utils/api";
import { useNavigate } from "react-router";

interface UserContextType {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => void;
  data: any;
  error: any;
  loading: boolean;
  login: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserStorage({ children }: any) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState<null | Boolean>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, []);

  async function getUser(token: any) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: any, password: any) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Token: Usuário inválido`);
      const { token } = await response.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (error: any) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
}
