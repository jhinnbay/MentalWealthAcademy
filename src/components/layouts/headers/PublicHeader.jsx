// import React from "react";

import { Input } from "@/components/ui/input";
import { menuItems } from "@/data/menuItems";
import { shortenAddress } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";

export const PublicHeader = () => {
  const { connectOrCreateWallet, login } = usePrivy()
  const { address } = useAccount()
  const handleLogin = () => {
    connectOrCreateWallet()
  }

  return (
    <header className="bg-primary-background sticky top-0 w-full z-20  border-b border-primary-foreground shadow-default">
      <div className="container">
        <div className="flex gap-[18px] items-center">
          <Link to="/">
            <img src="/icons/Logo.svg" className="w-[75px] md:w-auto" />
          </Link>
          <h4 className="text-2xl  hidden md:flex">Mental Wealth Academy</h4>
          <div className="py-3 border-t border-b border-solid relative  items-center flex-grow hidden xl:flex">
            <Input
              placeholder="Search"
              className="bg-secondary-background max-h-[36px] pl-7 placeholder:text-secondary-foreground"
            />
            <img
              src="/icons/input-search.svg"
              width={16}
              height={16}
              className="absolute left-2"
            />
          </div>
          <div className="flex gap-4 ms-auto">
            <Link
              to={"/library"}
              className=" gap-1 flex-col items-center justify-center text-sm p-2   hidden xl:flex  hover:bg-white/25 rounded-lg"
            >
              <img src="/icons/md-library.svg" width={20} height={20} />
              <span>Library</span>
            </Link>
            <Link
              to={"/marketplace"}
              className=" hidden xl:flex gap-1 flex-col items-center justify-center text-sm p-2 hover:bg-white/25 rounded-lg"
            >
              <img
                src="/icons/building-storefront.svg"
                width={20}
                height={20}
              />
              <span>Marketplace</span>
            </Link>
            {!address ? <>
              <button onClick={handleLogin} className="flex items-center px-2">
                Log in
              </button>
              <Link className="border rounded-lg px-5 py-3 border-primary-foreground flex justify-center items-center gap-2">
                Sync Account
                <img src="/icons/sync_globe.svg" className=" hidden md:block" />
              </Link>
            </> : <>
              <Link className="border rounded-lg px-5 py-3 border-primary-foreground flex justify-center items-center gap-2">
                {shortenAddress(address)}
              </Link>
            </>}
            <img src="/icons/menu.svg" className=" hidden xl:block" />
          </div>
        </div>
        <div className="max-w-full overflow-x-auto flex gap-6 py-1">
          {menuItems?.map((data, i) => (
            <Link
              to={"/"}
              className="flex gap-1 border-b-2 flex-shrink-0  hover:border-b-[#594DE5] border-b-transparent text-xs"
              key={data?.label + i}
            >
              <img src={data?.icon} className="w-4 h-4" /> {data?.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
