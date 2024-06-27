import { Suspense } from "react";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => {
  const LoadableComponent = (props) => (
    <Suspense fallback={<div>Loading{/* Add preloader */}</div>}>
      <Component {...props} />
    </Suspense>
  );

  // Set the display name for easier debugging
  const componentName = Component.displayName || Component.name || "Component";
  LoadableComponent.displayName = `Loadable(${componentName})`;

  return LoadableComponent;
};

export default Loadable;
