import { useEffect } from "react";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  
  return <AppRoutes />;
}

export default App;
