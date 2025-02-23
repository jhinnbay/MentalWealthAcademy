import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="container mt-[62px] text-[#E5E5E5]">
      <div className="p-[20px_40px_0px_40px] lg:p-[48px_112px_0px_112px] bg-black_grad">
        <div className="py-[64px] flex flex-col gap-[64px]">
          <div className="flex flex-wrap justify-between gap-8">
            <div>
              <img src="/icons/Company Footer Placeholder.png" alt="Company Logo" />
              <div className="flex flex-wrap gap-6 items-center mt-7">
                {["About", "Blog", "Careers", "Whitepaper"].map((data) => (
                  <Link to="#" key={"footer_menu" + data}>
                    {data}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-[430px] max-w-full">
              <p>
                Get the latest updates about Mental Wealth Academy’s new
                features, proposals, and product updates.
              </p>
              <div className="mt-6 gap-2 flex items-center">
                <Input placeholder="Ethereum Address" />
                <Button
                  className="bg-[#262626] text-white font-semibold border-0 p-4 py-2"
                  style={{
                    filter: "drop-shadow(0px 0px 8.8px rgba(99, 102, 241, 1))",
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-8">
            <div className="flex justify-center items-center gap-4">
              {[
                "/icons/facebook.svg",
                "/icons/instagram.svg",
                "/icons/twitter.svg",
                "/icons/linkedIn.svg",
              ].map((data) => (
                <img src={data} key={data + "social icon"} alt="Social Icon" />
              ))}
            </div>
            <div className="flex justify-center items-center gap-8">
              <Link to="#">Terms of Service</Link>
              <Link to="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};