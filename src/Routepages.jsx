import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./constant/routes";

export default function Routepages() {
  return (
    <Routes>
    {PublicRoutes.map((route, index) => (
      <Route key={index} path={route.path} element={<route.element />} />
    ))}
  </Routes>
  )
}
