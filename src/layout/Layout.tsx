import style from "./Layout.module.css";
import { Header } from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { ClearStateByLocation } from "../hooks/router";

export const Layout = () => {
  ClearStateByLocation();
  return (
    <div className={style.layout}>
      <Header />
      <Outlet />
    </div>
  );
};
