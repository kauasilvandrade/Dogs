import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router";

type Props = {
  children: string;
};

export function ProtectedRoute({ children }: Props) {
  const { login } = useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
}
