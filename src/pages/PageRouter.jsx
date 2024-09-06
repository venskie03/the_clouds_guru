import { Routes, Route } from "react-router-dom";
import { HomeRoutes } from "../constant/routes";


export default function Pagerouter() {
  return (
    <Routes>
    {HomeRoutes.map((route, index) => (
      <Route key={index} path={route.path} element={<route.element />} />
    ))}
  </Routes>
  )
}
