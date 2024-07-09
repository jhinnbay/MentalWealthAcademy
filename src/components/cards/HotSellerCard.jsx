import PropTypes from "prop-types";

export const HotSellerCard = ({
  description,
  title,
  price,
  poster,
  // credit,
  onClick,
}) => {
  return (
    <div
      className="max-w-[271px] hover:bg-[rgba(0,213,99,0.25)] p-5 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={poster}
        alt={title + " by " + description}
        className="border border-[#1F2937] rounded-lg overflow-hidden"
      />
      <div className="flex gap-1 pt-1 align-top ">
        <h3 className="text-2xl  truncate">{title}</h3>{" "}
        <img src="/icons/Info.svg" className="flex-shrink-0 h-[15px]" />
      </div>
      <p className="text-sm">{description}</p>
      <div className="grid gap-2 grid-cols-2 justify-between mt-2">
        <span className=" py-5 flex  justify-center items-center text-nowrap  gap-1 text-white flex-shrink-0 text-sm bg-[#292929]">
          <img src="/icons/currency-ethereum.svg" /> {price}{" "}
        </span>
        <span className=" py-5 justify-center items-center text-nowrap flex gap-1 text-white  flex-shrink-0  text-sm bg-[#171717]">
          Purchase Now
        </span>
      </div>
    </div>
  );
};

// Define prop types for the component
HotSellerCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  poster: PropTypes.string,
  // credit: PropTypes.string,
  onClick: PropTypes.func,
};
