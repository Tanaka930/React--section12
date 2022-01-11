import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templetes/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home/*"
          element={
            <HeaderLayout>
              <HomeRoutes />
            </HeaderLayout>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
