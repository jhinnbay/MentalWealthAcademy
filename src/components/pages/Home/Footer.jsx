import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-5 lg:mt-[62px] pt-5 text-[#E5E5E5]">
      <div className=" bg-footer bg-no-repeat bg-left bg-contain rounded-t-xl">
        <div className="container xl:max-w-6xl">
          <div className="py-[64px] flex flex-col gap-[64px]">
            <div className="flex flex-wrap justify-between gap-8">
              <div>
                <img src="/icons/footer_logo.svg" alt="Company Logo" />
                <div className="flex flex-wrap gap-6 items-center mt-7">
                  {["About", "Blog", "Careers", "Whitepaper"].map((data) => (
                    <Link to="#" key={"footer_menu" + data} className="text-sm">
                      {data}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-[430px] max-w-full">
                <p className="text-sm">
                  Get the latest updates about Mental Wealth Academy’s new
                  features, proposals, and product updates.
                </p>
                <div className="mt-6 gap-2 flex items-center">
                  <Input
                    placeholder="Ethereum Address"
                    className="text-black"
                  />
                  <Button className="bg-[#262626] text-white font-semibold border-0 p-4 py-3 shadow-button-shadow">
                    Send{" "}
                    <img src="/icons/mail.svg" alt="mail" className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-8 border-t border-[#E5E5E5] pt-8">
              <div className="flex justify-center items-center gap-4">
                {[
                  "/icons/facebook.svg",
                  "/icons/instagram.svg",
                  "/icons/twitter.svg",
                  "/icons/linkedIn.svg",
                ].map((data) => (
                  <img
                    src={data}
                    key={data + "social icon"}
                    alt="Social Icon"
                  />
                ))}
              </div>
              <div className="flex justify-center items-center gap-8">
                <Link to="#">Terms of Service</Link>
                <Link to="#">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
