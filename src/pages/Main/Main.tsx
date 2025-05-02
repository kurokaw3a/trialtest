import styles from "./Main.module.css";
import { Button } from "../../components/Buttons/Button";
import { useAppSelector } from "../../hooks/redux";
import { NavLink } from "react-router-dom";

export const MainPage = () => {
  const testing = useAppSelector((state) => state.testing.list);
  return (
    <div className={styles.main}>
      {testing.map((item) => (
        <div className={styles.test} key={item.id}>
          <img
            className={styles.testLogo}
            src={item.img}
            alt="test has no img"
            rel="preload"
          />
          <h2>{item.title}</h2>
          <NavLink to={`/test/${item.id}`}>
            <Button variant="default" disabled={!item.status} onClick={()=>{}}>
              Начать тест
            </Button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
