import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

export const RentBookDialog = ({ book }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="border-0 font-medium p-2 gap-2 rounded-md justify-center items-center"
          variant={"proposal1"}
        >
          Rent Book
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-[#8F8F8F] max-w-[931px] w-full p-8 overflow-auto max-h-full">
        <h2 className="text-4xl text-center md:text-left font-bold text-white">
          {book?.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          <img
            src={book?.coverArt}
            className="max-h-[410px] w-[250px] object-contain object-center"
          />
          <div className="text-white font-spaceGrotesk leading-5 max-w-[590px]">
            <div className="border border-solid border-[#BCBCBC] p-5 rounded-md bg-[rgba(0,0,0,0.10)] shadow-[0px_-4px_0px_0px_rgba(21,_21,_21,_0.25)_inset]">
              {book?.bio}
            </div>
            <div className="border border-solid border-[#BCBCBC] px-5 p-3 text-center rounded-md bg-[rgba(0,0,0,0.10)] shadow-[0px_-4px_0px_0px_rgba(21,_21,_21,_0.25)_inset]">
              Authors: {book?.author}
            </div>
            <div className="border border-solid border-[#BCBCBC] px-5 p-3 text-center rounded-md bg-[rgba(0,0,0,0.10)] shadow-[0px_-4px_0px_0px_rgba(21,_21,_21,_0.25)_inset]">
              Added: {book?.date}
            </div>
            <div className="border border-solid border-[#BCBCBC] px-5 p-3 text-center rounded-md bg-[rgba(0,0,0,0.10)] shadow-[0px_-4px_0px_0px_rgba(21,_21,_21,_0.25)_inset]">
              Number in stock: {book?.numberInStock}
            </div>
            <div className="border border-solid border-[#BCBCBC] px-5 p-3 text-center rounded-md bg-[rgba(0,0,0,0.10)] shadow-[0px_-4px_0px_0px_rgba(21,_21,_21,_0.25)_inset]">
              File size: {book?.fileSize}
            </div>
            <div className="border border-solid border-[#BCBCBC] px-5 p-3 text-center rounded-md bg-[rgba(0,0,0,0.10)] shadow-[0px_-4px_0px_0px_rgba(21,_21,_21,_0.25)_inset]">
              ISBM: {book?.ISBM}
            </div>
            <div className="border border-solid border-black px-5 p-3 text-center rounded-md bg-[white] text-black ">
              CID: {book?.CID}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button className="w-full font-medium p-2 gap-2 rounded-md justify-center items-center">
            Rent Book{" "}
            <img
              src="/icons/lock-closed.svg"
              style={{ filter: "brightness(0) saturate(100%)" }}
            />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
