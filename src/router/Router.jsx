import React, { useContext } from "react";
import { AuthContext } from "../context";
import { publicRoute } from "./Route";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AdminPanelNav from "../Components/AdminPanelNav";

function Router() {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {publicRoute.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={item.element}
            exact
          />
        ))}
        <Route path="*" element={<Navigate to="/modellar" replace />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <AdminPanelNav />
    </BrowserRouter>
  );
}

export default Router;
