import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const Layout = () => {
  return (
    <div className={style.layout}>
      <Header />
      <Outlet />
    </div>
  );
};
