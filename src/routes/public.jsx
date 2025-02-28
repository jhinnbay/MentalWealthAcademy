import { lazy } from "react";

// project import
import { Dashboard } from "@/pages/Dashboard";
import Library from "@/pages/Library";
import MarketPlace from "@/pages/MarketPlace";
import Loadable from "../components/Loadable";
import { PublicLayout } from "../components/layouts/publicLayout";
// render - login
const Home = Loadable(lazy(() => import("../pages/Home_new"))); //new updated page
// const Library = Loadable(lazy(() => import("../pages/Library")));
// const MarketPlace = Loadable(lazy(() => import("../pages/MarketPlace")));

const withLayout = (component) => <PublicLayout>{component}</PublicLayout>;

const PublicRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/library",
      element: withLayout(<Library />),
    },
    {
      path: "/marketplace",
      element: withLayout(<MarketPlace />),
    },
    {
      path: "/dashboard",
      element: withLayout(<Dashboard />),
    },
  ],
};

export { PublicRoutes };
