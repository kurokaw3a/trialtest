import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { MainPage } from "../pages/Main/Main";
import { Testing } from "../pages/Testing/Testing";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path="/test" element={<Testing />} />
      <Route path="/test/:id" element={<Testing />} />
    </Routes>
  );
};
