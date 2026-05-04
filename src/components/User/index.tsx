import { Route, Routes } from "react-router";
import { UserHeader } from "./components/UserHeader";
import { Feed } from "../Feed";
import { UserPhotoPost } from "./components/UserPhotoPost";

export function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
      </Routes>
    </section>
  );
}
