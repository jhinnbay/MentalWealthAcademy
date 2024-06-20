import { Button } from "../ui/button";

export const BooksCard = () => {
  return (
    <div className="p-5 h-full flex flex-shrink-0 flex-col gap-3 justify-between w-[288px] max-w-full  hover:bg-white/50 duration-300 rounded-lg">
      <div>
        {" "}
        <h5 className="text-xs font-medium">Publisher Information</h5>
        <h4 className="text-2xl font-bold">The Laws of Detachment</h4>
      </div>
      <img
        src="/images/books_placeholder.png"
        className="max-h-[281px] shadow-default "
      />
      <h5>Author: Jhinn bay</h5>
      <Button variant="cheez">
        <img src="/icons/live-photo.svg" /> Link To IPFS Container
      </Button>
      <Button>CID: 0x0r32DJX873</Button>
    </div>
  );
};
