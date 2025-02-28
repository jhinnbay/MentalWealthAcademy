import PropTypes from "prop-types";
import { PublicHeader } from "./headers/PublicHeader";
import { LayoutWrapper } from "./LayoutWrapper";

export const PublicLayout = ({ children }) => {
  return (
    <>
      <PublicHeader />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};
// Define prop types for the component
PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
