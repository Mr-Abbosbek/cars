import React, { useContext } from "react";
import { AuthContext } from "../context";
import { privateRoute, publicRoute } from "./Route";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Navbar from "../Components/Primary/Navbar";

function Router() {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {privateRoute.map((item) => (
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
      <Routes>
        {publicRoute.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={item.element}
            exact
          />
        ))}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
