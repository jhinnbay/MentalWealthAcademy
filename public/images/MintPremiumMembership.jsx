import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import sparkles from "./icons/sparkles.svg";
import Rectangle1 from "./images/Rectangle1.png";
import Rectangle2 from "./images/Rectangle2.png";

import "./style.css";

export const MintPremiumMembership = () => {
  return (
    <div className="MintPremiumMembership-container small_tablet:bg-black bg-[#E8E8E8] rounded-2xl p-3">
      <p className="text-center small_tablet:text-lg sm:text-sm text-xs mb-1 text-black w-fit mx-auto small_tablet:bg-black">
        ://Academy Pass
      </p>
      <div className="bg-premium bg-cover bg-no-repeat bg-center p-2 rounded-2xl">
        <p className="text-white text-xs font-medium font-spaceGrotesk leading-[20px] w-1/2 ml-auto py-8">
          Gain Access to a growing ecosystem, Earn tokens to control how the
          platform evolves.
        </p>
        <div className="MintPremiumMembership ">
          <img className="sparkles" alt="sparkles" src={sparkles} />
          <div className="mint-premium lg:text-base sm:text-sm text-xs">
            MINT PREMIUM MEMBERSHIP
          </div>
        </div>
      </div>

      <Carousel opts={{ loop: true, align: "start" }}>
        <CarouselContent className="items-center">
          <CarouselItem className="lg:basis-5/12 sm:basis-1/3 basis-5/12 md:h-24 h-full pr-2">
            <img className="size-full" alt="rectangle-1" src={Rectangle1} />
          </CarouselItem>
          <CarouselItem className="lg:basis-5/12 sm:basis-1/3 basis-5/12 md:h-24 h-full pr-2">
            <img className="size-full" alt="rectangle-2" src={Rectangle2} />
          </CarouselItem>
          <CarouselItem className="lg:basis-5/12 sm:basis-1/3 basis-5/12 md:h-24 h-full pr-2 flex items-center justify-center">
            <img
              className="w-full"
              alt="rectangle-3"
              src={"/images/Rectangle3.png"}
            />
          </CarouselItem>
          <CarouselItem className="lg:basis-5/12 sm:basis-1/3 basis-5/12 md:h-24 h-full pr-2">
            <img className="size-full" alt="rectangle-3" src={Rectangle2} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
