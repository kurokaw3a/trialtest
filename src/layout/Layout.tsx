import style from "./Layout.module.css";
import { Header } from "../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { ClearStateByLocation } from "../hooks/router";

export const Layout = () => {
  ClearStateByLocation();
  const location = useLocation();

  return (
    <div className={style.layout}>
      {location.pathname === "/" && <Header />}
      <Outlet />
    </div>
  );
};
