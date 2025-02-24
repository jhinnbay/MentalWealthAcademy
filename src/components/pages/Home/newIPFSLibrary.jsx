import { Link } from "react-router-dom";
import Logo from "./images/Logo.png";

export const NewIPFSLibrary = () => {
  return (
    <div className="ipfs">
      <h6 className="flex justify-center items-center text-black">IPFS://LIBRARY</h6>
      <div className="ipfs-inner px-3 py-4 bg-[#0d0d19] text-white rounded-md flex gap-[10px]">
        <div className="w-full h-full rounded-md ipfs-bg-progress object-cover px-3 py-4 bg-center ">
          <div className="flex justify-between">
              <h6 className="text-sm uppercase">message</h6>
              <h6 className="text-sm">INCOMING</h6>
          </div>
          <div className="flex border-white mt-2 border-solid border rounded-sm">
            <div className="animate-progress h-4 bg-white "></div>
          </div>
        </div>
        <div className="mt-2">
          <h5 className="text-sm uppercase">LET’S CHECK OUT SOME BOOKS...</h5>
          <div className="libBento-button">
            <Link
              to={"/library"}
              className="IPFS-library-button uppercase flex justify-center items-center rounded-sm w-full p-2 mt-2 text-black"
            >
              ENTER THE ACADEMY
            <img className="img" alt="Logo" src={Logo} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
