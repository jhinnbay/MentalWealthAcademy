import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  ChevronDown,
  CopyCheck,
  Gift,
  Globe,
  Minus,
  Plus,
  Users,
} from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Home/Footer";

export const Voting = () => {
  return (
    <Fragment>
      <div className="border border-white rounded-2xl p-3 bg-white/25">
        <div className="bg-footer rounded-2xl flex items-center justify-center">
          <img
            src="/icons/dashboard_logo.svg"
            alt="logo"
            className="h-44 w-44"
          />
        </div>
      </div>{" "}
      <div className="mt-3 md:!p-5 p-2 bg-[#E7E7FF80] rounded-2xl">
        <div className="flex items-center lg:!flex-row flex-col gap-5 justify-between bg-[#ECFFE4] border border-[#00D563] rounded-xl p-4">
          <div className="space-y-3 flex-1">
            <h2 className="lg:!text-[41px] sm:!text-3xl text-2xl font-bold ">
              Treasury: 24.34 ETH
            </h2>
            <p className="lg:!text-3xl text-xl font-bold">
              Mental Wealth Academy{" "}
            </p>
            <p className="text-sm">
              This is the academy dashboard. You can create a proposal about
              anything, ask for money, funding for your project, don’t like a
              book on the library, want to upload a book on the library, want
              something taken down. The power is in your hand as a user and
              member of the Academia.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-gray-400">
                <span className="text-[#1652F0]">&copy;</span> Base Network
              </p>
              <p className="text-gray-400">
                <Users className="text-[#1652F0] inline w-4 h-4" /> Base Network
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
            <div className="space-y-3 xl:!w-1/2 ml-auto">
              <img
                src="/icons/logo_treasury.svg"
                alt="treasury logo"
                className="mx-auto"
              />
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
        <div className="grid xl:!grid-cols-4 lg:!grid-cols-3 col-span-2 gap-2 mt-2">
          <div className="xl:!col-span-3 lg:!col-span-2 space-y-2">
            <div className="bg-active_proposal md:!p-4 p-2 rounded-xl flex sm:!flex-row flex-col sm:!items-center gap-3 justify-between">
              <h3 className="text-[#001F3E] font-bold md:!text-2xl text-lg">
                2 Active Proposals
              </h3>
              <Button className="text-white bg-[#57D39F] border-none h-auto md:py-4 py-3 font-medium md:text-base text-sm">
                <Plus /> New Proposal
              </Button>
            </div>
            <div className="flex items-center gap-2 md:!flex-row flex-col">
              <div className="flex-1 bg-votes border border-black rounded-xl md:!p-5 p-3.5">
                <div className="xl:!w-3/4 w-full space-y-4">
                  <div className="space-y-1">
                    <span className="font-medium text-[#001F3E] text-xs bg-[#F6F8ED] py-1 px-3 rounded-sm">
                      In Progress
                    </span>
                    <h2 className="font-bold text-[#001F3E]">
                      Upload the book Piranesi by Georgia Foster, it’s copyright
                      free and beneficial to the theme of Academy.
                    </h2>
                    <p className="text-xs text-[#001F3E]">
                      Book Upload From Library Page
                    </p>
                    <p className="text-[10px] text-[#001F3E] ">
                      Published by{" "}
                      <span className="text-[#71A9FD]">0x252...eg0d</span>{" "}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-2xl font-bold text-[#001F3E] ">
                      Votes
                    </h4>
                    <div className="flex items-center justify-between gap-2">
                      <div className=" space-y-1 sm:w-1/3 w-1/2">
                        <div className="flex items-center justify-between">
                          <p className="text-[#001F3E] text-[8px]">10</p>
                          <p className="text-[#001F3E] text-[8px]">74%</p>
                        </div>
                        <Progress
                          value={33}
                          className="bg-[#001F3E] h-1"
                          fillClassName="bg-[#001F3E]"
                        />
                        <p className="text-[#001F3E] text-[8px] font-bold">
                          1633 votes
                        </p>
                      </div>
                      <div className=" space-y-1 sm:w-1/3 w-1/2">
                        <div className="flex items-center justify-between">
                          <p className="text-[#001F3E] text-[8px]">10</p>
                          <p className="text-[#001F3E] text-[8px]">74%</p>
                        </div>
                        <Progress
                          value={33}
                          className="bg-[#001F3E] h-1"
                          fillClassName="bg-[#001F3E]"
                        />
                        <p className="text-[#001F3E] text-[8px] font-bold">
                          1633 votes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:gap-x-10 gap-5">
                      <Button className="bg-[#5168FF] shadow-inner border border-transparent h-auto md:!py-4 py-2 justify-center text-white flex-1">
                        Yes
                      </Button>
                      <Button className="bg-[#494A79] shadow-inner border border-transparent h-auto md:!py-4 py-2 justify-center text-white flex-1">
                        No
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-votes border border-black rounded-xl md:!p-5 p-3.5">
                <div className="xl:!w-3/4 w-full space-y-4">
                  <div className="space-y-1">
                    <span className="font-medium text-[#001F3E] text-xs bg-[#F6F8ED] py-1 px-3 rounded-sm">
                      In Progress
                    </span>
                    <h2 className="font-bold text-[#001F3E]">
                      Upload the book Piranesi by Georgia Foster, it’s copyright
                      free and beneficial to the theme of Academy.
                    </h2>
                    <p className="text-xs text-[#001F3E]">
                      Book Upload From Library Page
                    </p>
                    <p className="text-[10px] text-[#001F3E] ">
                      Published by{" "}
                      <span className="text-[#71A9FD]">0x252...eg0d</span>{" "}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-2xl font-bold text-[#001F3E] ">
                      Votes
                    </h4>
                    <div className="flex items-center justify-between gap-2">
                      <div className=" space-y-1 sm:w-1/3 w-1/2">
                        <div className="flex items-center justify-between">
                          <p className="text-[#001F3E] text-[8px]">10</p>
                          <p className="text-[#001F3E] text-[8px]">74%</p>
                        </div>
                        <Progress
                          value={33}
                          className="bg-[#001F3E] h-1"
                          fillClassName="bg-[#001F3E]"
                        />
                        <p className="text-[#001F3E] text-[8px] font-bold">
                          1633 votes
                        </p>
                      </div>
                      <div className=" space-y-1 sm:w-1/3 w-1/2">
                        <div className="flex items-center justify-between">
                          <p className="text-[#001F3E] text-[8px]">10</p>
                          <p className="text-[#001F3E] text-[8px]">74%</p>
                        </div>
                        <Progress
                          value={33}
                          className="bg-[#001F3E] h-1"
                          fillClassName="bg-[#001F3E]"
                        />
                        <p className="text-[#001F3E] text-[8px] font-bold">
                          1633 votes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:gap-x-10 gap-5">
                      <Button className="bg-[#5168FF] shadow-inner border border-transparent h-auto md:!py-4 py-2 justify-center text-white flex-1">
                        Yes
                      </Button>
                      <Button className="bg-[#494A79] shadow-inner border border-transparent h-auto md:!py-4 py-2 justify-center text-white flex-1">
                        No
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-1 border border-black bg-[#1E4890]  py-5 px-2 rounded-xl">
              <span className="font-medium text-[#CDFFE6] text-xs bg-[#61DA4DCC] py-1 px-3 rounded-sm">
                Executed
              </span>
              <h2 className="font-bold text-white sm:text-xl text-base">
                Book Upload: piranesi.epub
              </h2>
              <p className="text-xs text-white">
                Book Upload From Library Page{" "}
              </p>
              <p className="text-[10px] text-white ">
                Published by{" "}
                <span className="text-[#71A9FD]">0x252...eg0d</span>{" "}
              </p>
            </div>
            <div className="space-y-1 border border-black bg-[#1E4890]  py-5 px-2 rounded-xl">
              <span className="font-medium text-[#791812] text-xs bg-[#E57474CC] py-1 px-3 rounded-sm">
                Defeated
              </span>
              <h2 className="font-bold text-white sm:text-xl text-base">
                Book Upload: piranesi.epub
              </h2>
              <p className="text-xs text-white">
                Book Upload From Library Page{" "}
              </p>
              <p className="text-[10px] text-white ">
                Published by{" "}
                <span className="text-[#71A9FD]">0x252...eg0d</span>{" "}
              </p>
            </div>
            <div className="space-y-1 border border-black bg-[#1E4890]  py-5 px-2 rounded-xl">
              <span className="font-medium text-[#CDFFE6] text-xs bg-[#61DA4DCC] py-1 px-3 rounded-sm">
                Succeeded
              </span>
              <h2 className="font-bold text-white sm:text-xl text-base">
                Book Upload: piranesi.epub
              </h2>
              <p className="text-xs text-white">
                Book Upload From Library Page{" "}
              </p>
              <p className="text-[10px] text-white ">
                Published by{" "}
                <span className="text-[#71A9FD]">0x252...eg0d</span>{" "}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="md:!p-5 p-3 rounded-xl border border-[#001F3E] bg-sync_account space-y-2">
              <div className="bg-[#F4F5FE] rounded-xl px-4 py-2.5 flex items-center gap-2">
                <img
                  src="/icons/gods_fav.svg"
                  alt="gods favourite"
                  className="h-7 w-8 rounded-full"
                />
                <div className="space-y-0.5">
                  <h5 className="font-bold">@GodsFavoriteQ</h5>
                  <p className="text-xs font-bold">3123G...23Fg</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:!flex-row flex-col">
                <div className="space-y-0.5 bg-[#F4F5FE] rounded-xl px-4 py-2.5 flex-1 sm:w-auto w-full">
                  <h5 className="font-medium text-[8px]">VOTES CAST</h5>
                  <p className="text-sm font-bold">153 </p>
                </div>
                <div className="space-y-0.5 bg-[#F4F5FE] rounded-xl px-4 py-2.5 flex-1 sm:w-auto w-full">
                  <h5 className="font-medium text-[8px]">TOKEN COUNT </h5>
                  <p className="text-sm font-bold">153,321 </p>
                </div>
              </div>
              <div className="bg-average_bg bg-cover py-5 px-2 space-y-0 bg-no-repeat rounded-xl">
                <h3 className="text-xl text-[#DBE64C]">Average</h3>
                <p className="text-3xl text-[#F4F5FE]">153</p>
                <span className="bg-[#F4F5FE] text-black text-[8px] rounded-full p-1 font-bold">
                  CREDIT SCORE
                </span>
              </div>
              <Button className="justify-center bg-dashboard_tab w-full font-medium h-auto py-3">
                Sync Account{" "}
                <img
                  src="/icons/globe_sync.svg"
                  alt="globe sync"
                  className="w-5 h-5"
                />
              </Button>
            </div>
            <div className="rounded-full bg-membership_card_outerp-1 border border-black p-1">
              <Button className="shadow-membership_card bg-membership_card  w-full justify-center rounded-full h-auto py-2 text-[#F6F8ED] sm:!text-xl text-base font-bold">
                <Gift /> Get a membership card
              </Button>
            </div>
            <div className="bg-white rounded-lg border border-[#D9D9D9]">
              <div className="p-5 space-y-3 border-b border-[#D9D9D9]">
                <div className="flex md:!flex-row flex-col md:!items-center sm:!gap-0 gap-3 justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold">Top sponsors</h3>
                    <p className="font-medium text-[#585858] text-xs">
                      +0.0008 ETH mint fee (50% to creator)
                    </p>
                  </div>
                  <div className="border border-[#959595] rounded-lg max-w-24 mx-auto">
                    <p className=" text-center py-2">1</p>
                    <div className="flex items-center py-1 bg-[#7676801F]">
                      <Button className="bg-transparent border-none hover:shadow-none">
                        <Minus className="h-3 w-3" />
                      </Button>
                      |{" "}
                      <Button className="bg-transparent border-none hover:shadow-none">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
                <Button className="border border-[#6366F1] w-full justify-center h-auto py-3 bg-black_grad rounded-lg text-white">
                  <Globe className="fill-white stroke-black" /> Sync Account
                </Button>
                <p className="font-medium text-[#585858] text-xs">
                  33 mints allowed per wallet{" "}
                </p>
              </div>
              <div className="p-5 pt-2 flex items-center justify-between">
                <p className="font-medium text-[#585858] text-xs">
                  242 minted{" "}
                </p>
                <p className="font-medium text-[#585858] text-xs">
                  3,242 copies{" "}
                </p>
              </div>
            </div>
            <div className="p-5 pt-14 rounded-xl bg-black_grad space-y-2 !rounded-bl-none">
              <img src="/icons/cart.svg" alt="cart" />
              <p className="text-[#F4F5FE] text-xl font-medium">Academy Shop</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
