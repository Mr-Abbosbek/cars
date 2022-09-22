import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Icons/Home";
import AnnounceIcon from "./Icons/AnnounceIcon";
import QuestionsIcon from "./Icons/QuestionsIcon";
import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { privateRoute } from "../router/Route";

function AdminPanel() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const profile = ["Profile", "Dashboard", "Logout"];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <div className="bg-white py-3 px-5 d-flex justify-content-between align-items-center">
            <Navbar title="Asosiyga qaytish" toPath={"/modellar"} />
            <div className="d-flex">
              <Link to={"/adminpanel/announces"}>
                <img
                  src="./../../../images/Notification.png"
                  alt=""
                  className="px-4"
                />
              </Link>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , width: 75, height: 75}}>
                <Avatar
                  alt={localStorage.getItem("user") && localStorage.getItem("user").toUpperCase()}
                  src="/static/images/avatar/2.jpg"
                  sx={{ width: 56, height: 56 }}
                />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {profile.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"><Link to={`/adminpanel/${setting.toLowerCase()}`} className="w-100 h-100">{setting}</Link></Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2 py-5 px-4">
          <Link to={"/adminpanel"} className="d-flex align-items-center">
            <div className="bar_icon px-3">
              <Home className="icons" />
            </div>
            <h4 className="m-0">Asosiy</h4>
          </Link>

          <Link
            to={"/adminpanel/announces"}
            className="d-flex align-items-center my-5"
          >
            <div className="bar_icon px-3">
              <AnnounceIcon className="icons" />
            </div>
            <h4 className="m-0">Announces</h4>
          </Link>
          <Link
            to={"/adminpanel/questions"}
            className="d-flex align-items-center"
          >
            <div className="bar_icon px-3">
              <QuestionsIcon className="icons" />
            </div>
            <h4 className="m-0">Questions</h4>
          </Link>
        </div>
        <div
          className="col-10 py-3 px-5"
          style={{ background: "#E3E3E3", height: "100vh" }}
        >
          <Routes>
            {privateRoute.map((item) => (
              <Route
                key={item.path}
                path={item.path}
                element={item.element}
                exact
              />
            ))}
            <Route path="*" element={<Navigate to="/adminpanel" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
