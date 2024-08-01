import PropTypes from "prop-types";
import { Button } from "../ui/button";

export const ProposalCard = ({ data }) => {
  return (
    <div className="flex flex-shrink-0  gap-2 bg-[#0052FF] text-white justify-between border-2 border-solid border-primary-foreground w-[381px] h-[210px] max-w-full p-3 rounded-lg">
      {/* card body  */}
      <div className="flex flex-col gap-8">
        <span>{data?.title}</span>
        <h3 className="font-bold text-lg">{data?.value}</h3>
        <span>{data?.note}</span>
      </div>
      {/* card footer  */}
      <div className="flex shrink-0 flex-col items-center gap-2">
        <img
          src={data?.icon || "/icons/book_upload.png"}
          className="max-w-[145px] max-h-[114px]"
        />
        <Button className="rounded-full px-5 py-1 min-w-[92px]  bg-black_grad text-white border-0 text-base">
          View
        </Button>
      </div>
    </div>
  );
};
ProposalCard.propTypes = {
  data: {
    title: PropTypes.string,
    icon: PropTypes.string,
    note: PropTypes.string,
    vote: PropTypes.string,
  },
};
