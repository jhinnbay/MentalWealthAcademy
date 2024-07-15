import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ChatBox = () => {
  return (
    <div className="rounded-lg border-[3px] p-6 border-solid border-black">
      <h6 className="text-sm">/CHAT/Library</h6>
      <div className="px-3 py-4 bg-[#0d0d19] text-white rounded-md">
        <div className=" rounded-md bg-progress object-cover px-3 py-4 bg-center ">
          <div className="flex justify-between ">
            <h6 className="text-sm uppercase">message</h6>
            <h6 className="text-sm">INCOMING</h6>
          </div>
          <div className="flex border-white mt-2 border-solid border rounded-sm">
            <div className="animate-progress h-4 bg-white "></div>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="text-sm uppercase">Hey buddy! TIME TO CONNECT...</h5>
          <Link
            to={"/marketplace"}
            className="uppercase flex justify-center items-center border-white hover:bg-white duration-300 hover:text-black border border-solid rounded-sm bg-transparent w-full p-2 mt-2 text-white"
          >
            JOIN THE ACADEMY
          </Link>
        </div>
      </div>
    </div>
  );
};
