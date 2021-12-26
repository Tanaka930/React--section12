import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user_management" element={<UserManagement />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
