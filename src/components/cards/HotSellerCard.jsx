import PropTypes from "prop-types";

export const HotSellerCard = ({ author, title, price, poster, credit }) => {
  return (
    <div className="max-w-[230px]">
      <img src={poster} alt={title + " by " + author} />
      <h3 className="text-2xl">{title}</h3>
      <p className="text-lg">{author}</p>
      <div className="flex gap-2 flex-wrap mt-2">
        <span className="px-2 flex-shrink-0 text-sm rounded-full border border-[#ACE1E8] bg-[#5F6FF9]">
          {price}{" "}
        </span>
        <span className="px-2  flex-shrink-0  text-sm  rounded-full border border-[#ACE1E8] bg-[#5F6FF9]">
          {credit}{" "}
        </span>
      </div>
    </div>
  );
};

// Define prop types for the component
HotSellerCard.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  poster: PropTypes.string,
  credit: PropTypes.string,
};
