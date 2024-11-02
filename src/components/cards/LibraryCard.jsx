import PropTypes from "prop-types";
import { Button } from "../ui/button";

export const LibraryCard = ({ data }) => {
  return (
    <div className="p-5 h-full flex text-center flex-shrink-0 flex-col gap-2 justify-between w-[288px] max-w-full  hover:bg-white/50 duration-300 rounded-lg">
      <img
        src={data?.coverArt || "/images/books_placeholder.png"}
        className="h-[281px]  object-contain"
        style={{
          filter: "drop-shadow(0px 6px 21.6px rgba(0, 0, 0, 0.25))",
        }}
      />
      <h4 className=" font-bold">{data?.title}</h4>
      <h5 className="text-sm" style={{ letterSpacing: "-0.42px" }}>
        {data?.author}
      </h5>
      <Button className="bg-black_grad text-base text-white p-3">
        Rent
      </Button>
    </div>
  );
};
// Define prop types for the component
LibraryCard.propTypes = {
  data: {
    title: PropTypes.string,
    coverArt: PropTypes.string,
    author: PropTypes.string,
  },
};
