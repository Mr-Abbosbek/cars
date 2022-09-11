import React, { useEffect, useState } from "react";
import { AuthContext } from "./context";
import Router from "./router/Router";
import { service } from "./service/axios.service";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  // const [role, setRole] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    service.get("/employee/account")
    .then(()=>{
      setIsAuth(true);
    })
  },[])

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
        <Router />
    </AuthContext.Provider>
  );
}

export default App;
