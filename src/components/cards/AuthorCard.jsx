import PropTypes from "prop-types";
import { Button } from "../ui/button";

export const AuthorCard = ({ title, image, description }) => {
  return (
    <div className="border rounded-3xl p-6 bg-white flex gap-10 w-[586px] h-[269px] flex-shrink-0">
      <img src={image} />
      <div>
        <h3 className="text-3xl">{title}</h3>
        <p className="text-xs mt-3">{description}</p>
        <Button variant="gradient" className="rounded-full shadow-default mt-6">
          {" "}
          Recents{" "}
        </Button>
      </div>
    </div>
  );
};

// Define prop types for the component
AuthorCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};
