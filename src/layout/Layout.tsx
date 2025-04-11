import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { ClearStateByLocation } from "../hooks/router";
import { Header } from "../components/Header/Header";

export const Layout = () => {
  ClearStateByLocation();

  return (
    <div className={style.layout}>
      <Header />
      <Outlet />
    </div>
  );
};
