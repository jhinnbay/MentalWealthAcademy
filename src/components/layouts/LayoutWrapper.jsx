import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export const LayoutWrapper = ({ children }) => {
  const route = useLocation();

  return (
    <section className="pt-5">
      <div className="container">
        <div className="md:!bg-home_banner bg-transparent rounded-t-2xl sm:!pt-5 sm:!px-5  pt-3 px-3">
          <div className="h-auto w-full gap-4 flex-wrap md:!flex hidden items-center pb-3">
            <Link
              to="/home"
              data-state={route.pathname === "/home" ? "active" : ""}
              className={cn(
                "flex-1 flex items-center justify-center bg-dashboard_tab text-black md:!py-5 py-2.5 rounded-full border border-black data-[state=active]:bg-dashboard_tab_active data-[state=active]:text-white data-[state=active]:!border-[#CDFFE6] group gap-3 min-w-32"
              )}
            >
              <img
                src="/icons/whitepaper.svg"
                alt="library"
                className="group-data-[state=active]:invert"
              />{" "}
              Home
            </Link>
            <Link
              to="/library"
              data-state={route.pathname === "/library" ? "active" : ""}
              className={cn(
                "flex-1 flex items-center justify-center bg-dashboard_tab text-black md:!py-5 py-2.5 rounded-full border border-black data-[state=active]:bg-dashboard_tab_active data-[state=active]:text-white data-[state=active]:!border-[#CDFFE6] group gap-3 min-w-32"
              )}
            >
              <img
                src="/icons/library.svg"
                alt="library"
                className="group-data-[state=active]:invert"
              />{" "}
              Library
            </Link>
            <Link
              to="/classes"
              data-state={route.pathname === "/classes" ? "active" : ""}
              className={cn(
                "flex-1 flex items-center justify-center bg-dashboard_tab text-black md:!py-5 py-2.5 rounded-full border border-black data-[state=active]:bg-dashboard_tab_active data-[state=active]:text-white data-[state=active]:!border-[#CDFFE6] group gap-3 min-w-32"
              )}
            >
              <img
                src="/icons/classes.svg"
                alt="library"
                className="group-data-[state=active]:invert"
              />{" "}
              Classes
            </Link>
            <Link
              to="/dashboard"
              data-state={route.pathname === "/dashboard" ? "active" : ""}
              className={cn(
                "flex-1 flex items-center justify-center bg-dashboard_tab text-black md:!py-5 py-2.5 rounded-full border border-black data-[state=active]:bg-dashboard_tab_active data-[state=active]:text-white data-[state=active]:!border-[#CDFFE6] group gap-3 min-w-32"
              )}
            >
              <img
                src="/icons/voting.svg"
                alt="library"
                className="group-data-[state=active]:invert-0 invert"
              />{" "}
              Voting
            </Link>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
