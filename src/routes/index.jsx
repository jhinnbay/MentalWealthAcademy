import { useRoutes } from "react-router-dom";

// project import
import { PublicRoutes } from "./public";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([PublicRoutes]);
}
