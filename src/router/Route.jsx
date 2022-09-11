import Login from "../Components/Login/Login";
import AdminPanel from "../Components/Primary/AdminPanel";
import Description from "../Components/Primary/Description";
import Modellar from "../Components/Primary/Modellar";
import Turlari from "../Components/Primary/Turlari";

export const privateRoute = [
  { path: '/modellar', element: <Modellar />, exact: true },
  { path: '/modellar/:tur', element: <Turlari />, exact: true },
  { path: '/modellar/:tur/:desc', element: <Description />, exact: true },
  { path: '/adminpanel', element: <AdminPanel />, exact: true },
];

export const publicRoute = [
  { path: '/login', element: <Login />, exact: true },
]