import { Route, Routes } from "react-router";
import { UserHeader } from "./components/UserHeader";
import { Feed } from "../Feed";
import { UserPhotoPost } from "./components/UserPhotoPost";
import { UserStats } from "./components/UserStats";

export function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
}
