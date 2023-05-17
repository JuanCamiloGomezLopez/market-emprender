import { Route, Routes } from "react-router-dom";
import { Itemuser } from "../components/perfil/perfil-item";
import { PageUser } from "../components/perfil/page-user";

export function UserProfile() {

  return (
    <Routes>
      <Route index element={<PageUser />} />
      <Route path=":currentuser" element={<Itemuser />} />
    </Routes>
  );
}