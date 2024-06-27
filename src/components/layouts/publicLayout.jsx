import { PublicHeader } from "./headers/PublicHeader";
import PropTypes from "prop-types";

export const PublicLayout = ({ children }) => {
  return (
    <>
      <PublicHeader />
      {children}
    </>
  );
};
// Define prop types for the component
PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
