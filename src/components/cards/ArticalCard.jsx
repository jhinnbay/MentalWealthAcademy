import PropTypes from "prop-types";
import { Button } from "../ui/button";

export const ArticalCard = ({ data }) => {
  return (
    <div className="p-5 flex flex-shrink-0 flex-col gap-3 justify-between w-[288px] max-w-full rounded-lg hover:bg-white/50 duration-300">
      <div>
        {" "}
        <h5 className="text-xs font-medium">Publisher Information</h5>
        <h4
          className="text-2xl font-bold "
          style={{ letterSpacing: "-1.68px" }}
        >
          {data?.title}
        </h4>
      </div>
      <img
        src={data?.coverArt || "/images/artical_placeholder.png"}
        className="w-full h-[208px] object-cover rounded-lg shadow-default"
        style={{
          filter: "drop-shadow(0px 6px 21.6px rgba(0, 0, 0, 0.25))",
        }}
      />
      <h5 className="font-bold " style={{ letterSpacing: "-0.48px" }}>
        Author: {data?.author}
      </h5>
      <div className="flex flex-col gap-3">
        <Button className="bg-black_grad text-base text-white p-3">
          <img src="/icons/sparkles.svg" /> Download Article
        </Button>
        <Button className="text-base p-3">
          <img src="/icons/polygon-matic-icon.png" />
          Mint on Base
        </Button>
      </div>
    </div>
  );
};
ArticalCard.propTypes = {
  data: {
    title: PropTypes.string,
    coverArt: PropTypes.string,
    author: PropTypes.string,
  },
};
