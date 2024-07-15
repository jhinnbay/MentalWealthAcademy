import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import { PublicLayout } from "../components/layouts/publicLayout";
import MarketPlace from "@/pages/MarketPlace";
import Library from "@/pages/Library";
// render - login
const Home = Loadable(lazy(() => import("../pages/Home")));
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
  ],
};

export { PublicRoutes };
