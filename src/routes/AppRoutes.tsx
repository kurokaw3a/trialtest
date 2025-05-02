import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { MainPage } from "../pages/Main/Main";
import { Testing } from "../pages/Testing/Testing";

export const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="/test/:id" element={<Testing key={location.pathname} />} />
    </Routes>
  );
};
