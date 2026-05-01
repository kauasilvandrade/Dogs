import { Navigate, Route, Routes } from "react-router";
import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import img from "./../../assets/login.jpg";

export function Login() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section
      style={{ "--bg-img": `url(${img})` } as React.CSSProperties}
      className={`grid grid-cols-2 min-h-vh gap-8 before:content-[''] before:block before:bg-[image:var(--bg-img)] before:bg-no-repeat before:bg-center before:bg-cover max-sm:grid-cols-1 max-sm:before:none`}
    >
      <div className="max-w-[30rem] p-4 max-sm:max-w-full">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
}
