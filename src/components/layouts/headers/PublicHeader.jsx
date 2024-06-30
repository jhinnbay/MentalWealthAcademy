// import React from "react";

import { Input } from "@/components/ui/input";
import { menuItems } from "@/data/menuItems";
import { shortenAddress } from "@/lib/utils";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { OnchainKitProvider, } from '@coinbase/onchainkit'
import { base } from "viem/chains";
import { Avatar, Identity, Name, Badge, Address } from '@coinbase/onchainkit/identity';
const EAS_SCHEMA_ID = '0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9';

export const PublicHeader = () => {
  const { connectOrCreateWallet, login, authenticated, isModalOpen, connectWallet, logout } = usePrivy()
  const { address } = useAccount()
  const { ready, wallets } = useWallets()
  const handleLogin = async () => {
    connectOrCreateWallet()
  }
  // console.log(ready, wallets, address, wallets?.length && wallets?.length > 0 && wallets[0].getEthersProvider())

  const connectedWallet = wallets && wallets?.length && wallets?.length > 0 ? wallets[0] : null

  return (
    <header className="bg-primary-background sticky top-0 w-full z-20  border-b border-primary-foreground shadow-default">
      <div>
        <div>
          <div>

          </div>
        </div>
      </div>
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
            {!connectedWallet ? <>
              <button onClick={handleLogin} className="flex items-center px-2">
                Log in
              </button>
              <Link className="border rounded-lg px-5 py-3 border-primary-foreground flex justify-center items-center gap-2">
                Sync Account
                <img src="/icons/sync_globe.svg" className=" hidden md:block" />
              </Link>
            </> : <>
              <OnchainKitProvider chain={base} schemaId={EAS_SCHEMA_ID}>
                <Identity
                  address={connectedWallet.address}
                  schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
                  className="border rounded-lg px-5 py-3 border-primary-foreground flex justify-center items-center gap-2"
                >
                  <Badge backgroundColor="#7DA1F8" borderColor="white" />
                  <Avatar
                    address={connectedWallet.address}
                  />
                  <Name

                    address={connectedWallet.address}
                  />
                  <Address
                    address={connectedWallet.address}

                  />
                </Identity>
              </OnchainKitProvider>
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
