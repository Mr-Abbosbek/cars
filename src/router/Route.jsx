import Login from "../Components/Login/Login";
import AdminPanel from "../Components/AdminPanel/Home";
import Description from "../Components/Primary/Description";
import Modellar from "../Components/Primary/Modellar";
import Turlari from "../Components/Primary/Turlari";
import Announce from "../Components/AdminPanel/Announce";
import Questions from "../Components/AdminPanel/Questions";
import Profile from "../Components/AdminPanel/Profile";

export const publicRoute = [
  { path: '/modellar', element: <Modellar />, exact: true },
  { path: '/modellar/:category/:id', element: <Turlari />, exact: true },
  { path: '/modellar/:category/:id/:desc', element: <Description />, exact: true },
  { path: '/login', element: <Login />, exact: true },
];

export const privateRoute = [
  { path: '/adminpanel', element: <AdminPanel />, exact: true },
  { path: '/adminpanel/announces', element: <Announce />, exact: true },
  { path: '/adminpanel/questions', element: <Questions />, exact: true },
  { path: '/adminpanel/profile', element: <Profile />, exact: true },
]