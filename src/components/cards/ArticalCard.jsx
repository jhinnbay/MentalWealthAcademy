import { Button } from "../ui/button";

export const ArticalCard = () => {
  return (
    <div className="p-5 flex flex-shrink-0 flex-col gap-3 justify-between w-[288px] max-w-full rounded-lg hover:bg-white/50 duration-300">
      <div>
        {" "}
        <h5 className="text-xs font-medium">Publisher Information</h5>
        <h4 className="text-2xl font-bold">Mental Wealth Academy Volume 1</h4>
      </div>
      <img
        src="/images/artical_placeholder.png"
        className="w-full h-[208px] object-cover rounded-lg shadow-default"
      />
      <h5>Author: Jhinn bay</h5>
      <Button variant="cheez">
        <img src="/icons/live-photo.svg" /> Link To IPFS Container
      </Button>
      <Button>
        <img src="/icons/polygon-matric.png" /> Mint on Polygon
      </Button>
    </div>
  );
};
