import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import { PublicLayout } from "../components/layouts/publicLayout";

// render - login
const Home = Loadable(lazy(() => import("../pages/Home")));

const withLayout = (component) => <PublicLayout>{component}</PublicLayout>;

const PublicRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: withLayout(<Home />),
    },
  ],
};

export { PublicRoutes };
