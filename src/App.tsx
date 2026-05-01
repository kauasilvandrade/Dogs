import { BrowserRouter, Routes, Route } from "react-router";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./components/Home";
import { Login } from "./components/Login";

import { UserStorage } from "./context/UserContext";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/login/*" index element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
