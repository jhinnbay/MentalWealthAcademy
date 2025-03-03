import { Footer } from "@/components/pages/Home/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="space-y-5">
      <div className="bg-[#FFFFFF40] border border-white rounded-2xl p-5">
        <div className="bg-white rounded-xl p-3 flex justify-center h-44">
          <img
            className="h-full object-cover"
            alt="Header"
            src={"/images/mwa-header.png"}
          />
        </div>
      </div>

      <div className="bg-[#E7E7FF80] border border-white rounded-[16px_16px_0px_0px]">
        <div className="flex flex-col small_tablet:!flex-row  gap-8 small_tablet:!p-[20px_20px_0px]">
          <div className="space-y-5 flex-1 md:flex-0 ">
            <div className="rounded-xl border-2 border-black bg-mimbership p-2.5">
              <div className="rounded-2xl bg-[#141C2C] py-5 px-2.5 space-y-2">
                <div className="bg-cover bg-no-repeat bg-mimbership_banner  p-5 md:px-7 md:pt-12 rounded-2xl">
                  <div className="flex items-center gap-x-2">
                    <img
                      className="h-full w-1/3"
                      alt="rectangle-1"
                      src={"/images/Rectangle1.png"}
                    />
                    <img
                      className="h-full w-1/3"
                      alt="rectangle-1"
                      src={"/images/Rectangle2.png"}
                    />
                    <img
                      className=" h-full w-1/3"
                      alt="rectangle-1"
                      src={"/images/Rectangle3.png"}
                    />
                  </div>
                </div>
                <Button className="bg-mimbership_btn w-full text-xs text-black justify-center h-auto p-2.5">
                  <img src="/icons/crown.svg" alt="crown" className="h-5 w-5" />
                  VIP Membership Lifetime $10
                </Button>
              </div>
            </div>
            <div className="rounded-xl border-2 border-black bg-mimbership p-2.5">
              <div className="rounded-2xl bg-[#141C2C] py-5 px-2.5 space-y-4">
                <div className="w-full rounded-[24px_8px] bg-academy bg-cover px-3 py-4 h-52 flex flex-col justify-end">
                  <div className="flex justify-between text-white">
                    <h6 className="text-sm uppercase">message</h6>
                    <h6 className="text-sm">INCOMING</h6>
                  </div>
                  <div className="flex border-white mt-2 border-solid border rounded-sm">
                    <div className="animate-progress h-2 bg-white "></div>
                  </div>
                </div>
                <h5 className="text-sm uppercase text-white">
                  LET’S CHECK OUT SOME BOOKS...
                </h5>
                <Link
                  to={"/library"}
                  className="border border-[#EBEBEB] uppercase flex justify-center gap-2 items-center rounded-sm w-full p-2 mt-2 text-black bg-[#EBEBEB] text-xs"
                >
                  <img
                    className="w-5 h-5"
                    alt="Logo"
                    src={"/icons/library.svg"}
                  />
                  ENTER THE ACADEMY
                </Link>
              </div>
            </div>
            <Button className="w-full h-auto p-2.5 rounded-[0px_8px_8px_8px] bg-[#1E1E1E] drop-shadow-sync_account text-xs text-white justify-center border-none">
              <img
                className="h-5 w-5"
                alt="crypto-icon"
                src={"/icons/CryptoIcon.svg"}
              />
              Sync Account
            </Button>
          </div>
          <div className="flex-1 space-y-5">
            <div className="rounded-xl border-4 border-black bg-classroom bg-cover md:!h-[550px] sm:!h-96 h-72  flex items-end p-2.5 ">
              <div className="bg-[#000000CC] p-3 w-full rounded-xl space-y-3">
                <div className="p-2.5 bg-class_scheduler rounded-[24px_8px]">
                  <div className="relative">
                    <Input
                      className="bg-[#222225] border boorder-[#FFFFFF99] !pl-8 placeholder-[#FFFFFF80] text-white"
                      placeholder="Search your desired subject"
                    />
                    <img
                      src="/icons/input_search.svg"
                      alt="input search"
                      className="h-4 w-5 absolute top-1/2 -translate-y-1/2 left-2"
                    />
                  </div>
                </div>
                <Button className="bg-classroom_btn w-full text-xs h-auto py-2.5 text-white justify-center border border-[#EEEEEE] uppercase gap-2">
                  Find classrooms with rubi ai{" "}
                  <img
                    src="/icons/sparkles-white.svg"
                    alt="sparkles"
                    className="w-4 h-4"
                  />
                </Button>
              </div>
            </div>
            <div className="rounded-xl border-4 border-black bg-header p-2.5 ">
              <div className="bg-discord bg-cover h-60 flex items-end p-2 rounded-xl">
                <Button className="bg-[#494A79] text-white border border-[#EEEEEE] w-full h-auto py-2.5 text-xs uppercase justify-center gap-2">
                  JOIN THE discord{" "}
                  <img
                    src="/icons/discord.svg"
                    alt="discord"
                    className="h-6 w-6"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
