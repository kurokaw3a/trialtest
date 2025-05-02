import styles from "./Main.module.css";
import { Button } from "../../components/Buttons/Button";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const testing = useAppSelector((state) => state.testing.list);
  const navigate = useNavigate();
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
          <Button
            variant="default"
            disabled={!item.status}
            onClick={() => {
              navigate(`/test/${item.id}`);
            }}
          >
            Начать тест
          </Button>
        </div>
      ))}
    </div>
  );
};
