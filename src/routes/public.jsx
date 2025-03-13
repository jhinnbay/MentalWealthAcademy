// project import
import { Dashboard } from "@/pages/Dashboard";
import { Landing } from "@/pages/Landing";
import Library from "@/pages/Library";
import MarketPlace from "@/pages/MarketPlace";
import { PublicLayout } from "../components/layouts/publicLayout";
// render - login
// const Library = Loadable(lazy(() => import("../pages/Library")));
// const MarketPlace = Loadable(lazy(() => import("../pages/MarketPlace")));

const withLayout = (component) => <PublicLayout>{component}</PublicLayout>;

const PublicRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Landing />,
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
