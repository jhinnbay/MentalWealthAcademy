import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  CopyCheck,
  Laptop,
  LibraryBig,
  Plus,
  ScrollText,
  Users,
  Vote,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <main>
      <section className="py-5">
        <div className="container">
          <div className="bg-home_banner min-h-screen rounded-2xl p-5">
            <Tabs defaultValue="library" className="w-full ">
              <TabsList className="h-auto w-full gap-4">
                <TabsTrigger
                  value="library"
                  className={cn(
                    "flex-1 bg-dashboard_tab text-black py-5 rounded-full border border-black data-[state=active]:bg-dashboard_tab_active data-[state=active]:text-white data-[state=active]:!border-[#CDFFE6]"
                  )}
                >
                  <LibraryBig /> Library
                </TabsTrigger>
                <TabsTrigger
                  value="classes"
                  className={cn(
                    "flex-1 bg-dashboard_tab text-black py-5 rounded-full border border-black data-[state=active]:bg-dashboard_tab_active data-[state=active]:text-white data-[state=active]:!border-[#CDFFE6]"
                  )}
                >
                  <Laptop /> Classes
                </TabsTrigger>
                <TabsTrigger
                  value="voting"
                  className={cn(
                    "flex-1 bg-dashboard_tab text-black py-5 rounded-full border border-black data-[state=active]:bg-dashboard_tab_active data-[state=active]:text-white data-[state=active]:!border-[#CDFFE6]"
                  )}
                >
                  <Vote /> Voting
                </TabsTrigger>
                <TabsTrigger
                  value="whitepaper"
                  className={cn(
                    "flex-1 bg-dashboard_tab text-black py-5 rounded-full border border-black data-[state=active]:bg-dashboard_tab_active data-[state=active]:text-white data-[state=active]:!border-[#CDFFE6]"
                  )}
                >
                  <ScrollText /> Whitepapper
                </TabsTrigger>
              </TabsList>
              <TabsContent value="library">
                <div className="border border-white rounded-2xl p-3 bg-white/25">
                  <div className="bg-footer rounded-2xl flex items-center justify-center">
                    <img
                      src="/icons/dashboard_logo.svg"
                      alt="logo"
                      className="h-44 w-44"
                    />
                  </div>
                </div>{" "}
                <div className="mt-3 p-5 bg-[#E7E7FF80] rounded-2xl">
                  <div className="flex items-center justify-between bg-[#ECFFE4] border border-[#00D563] rounded-xl p-4">
                    <div className="space-y-3 flex-1">
                      <h2 className="text-[41px] font-bold ">
                        Treasury: 24.34 ETH
                      </h2>
                      <p className="text-3xl font-bold">
                        Mental Wealth Academy{" "}
                      </p>
                      <p className="text-sm">
                        This is the academy dashboard. You can create a proposal
                        about anything, ask for money, funding for your project,
                        don’t like a book on the library, want to upload a book
                        on the library, want something taken down. The power is
                        in your hand as a user and member of the Academia.
                      </p>
                      <div className="flex items-center gap-x-2">
                        <p className="text-gray-400">
                          <span className="text-[#1652F0]">&copy;</span> Base
                          Network
                        </p>
                        <p className="text-gray-400">
                          <Users className="text-[#1652F0] inline w-4 h-4" />{" "}
                          Base Network
                        </p>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="text-[#1652F0] text-xs">
                            <CopyCheck className="text-[#1652F0] inline w-4 h-4" />{" "}
                            0x4a0...244F{" "}
                            <ChevronDown className="text-[#1652F0] inline w-4 h-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="flex-1 ">
                      <div className="space-y-3 w-1/2 ml-auto">
                        <img src="/icons/logo_treasury.svg" alt="" />
                        <div className="flex items-center gap-x-2 justify-around mt-4">
                          <Link to={"#"} className="text-xs text-[#5F6FF9]">
                            Discord
                          </Link>
                          <Link to={"#"} className="text-xs text-[#5F6FF9]">
                            Tiktok
                          </Link>
                          <Link to={"#"} className="text-xs text-[#5F6FF9]">
                            Instagram
                          </Link>
                          <Link to={"#"} className="text-xs text-[#5F6FF9]">
                            X
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mt-2">
                    <div className="col-span-3">
                      <div className="bg-active_proposal p-4 rounded-xl flex items-center justify-between">
                        <h3 className="text-[#001F3E] font-bold text-2xl">
                          2 Active Proposals
                        </h3>
                        <Button className="text-white bg-[#57D39F] border-none h-auto py-4 font-medium text-base">
                          <Plus /> New Proposal
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="classes">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};
