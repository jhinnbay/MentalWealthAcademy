import { Footer } from "@/components/pages/Home/Footer";
import { Header } from "@/components/pages/Home/Header";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Inspiration } from "@/data/classes";
import { cn } from "@/lib/utils";
import React from "react";

export const Classes = () => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  console.log({ current });

  return (
    <main>
      <section className="pb-2.5">
        <Header />
      </section>
      <section className="bg-[#E7E7FF80] py-7 small_tablet:!py-14 px-3 sm:!px-6 border border-[#5168FF] rounded-2xl">
        <div className="rounded-2xl bg-angular py-7 small_tablet:!py-14 px-3 sm:!px-16 md:!px-20 2xl:!px-28">
          <h1 className="text-white font-spaceGrotesk text-[clamp(24px,4vw,42px)] font-bold">
            Inspiration Starts Here [Coming Soon]
          </h1>
          <p className="text-base sm:!text-xl md:!text-2xl font-bold text-white mt-3 font-sf">
            Here are 3 recommended classes we think you’ll love. We will
            continue to surface more recommendations as your creative journey
            continues.
          </p>
          <Carousel opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="py-10">
              {Inspiration?.map((data) => (
                <CarouselItem
                  key={data?.card_title}
                  className="basis-full small_tablet:!basis-7/12 xl:!basis-1/3"
                >
                  <div className="rounded-xl overflow-hidden bg-dashboard_tab h-full">
                    <img
                      src={data?.card_image}
                      alt="space"
                      className="w-full h-full object-cover max-h-[215px]"
                    />
                    <div className="p-3 sm:!p-6 space-y-4 md:!space-y-6">
                      <h3 className="font-bold text-black font-spaceGrotesk text-base sm:!text-lg md:!text-xl">
                        {data?.card_title}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        {data?.card_badges?.map((badge) => (
                          <div
                            className={cn(
                              "py-1 px-3 rounded-full flex items-center gap-2 text-sm  font-spaceGrotesk",
                              badge?.style
                            )}
                            key={badge?.title}
                          >
                            <img
                              src={badge?.icon}
                              alt="lab"
                              className="h-3 w-3"
                            />
                            {badge?.title}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <img
                          src={data?.card_content?.icon}
                          alt="mic lorem"
                          className="w-10 h-10"
                        />
                        <div className="space-y-0">
                          <h4 className="font-normal font-spaceGrotesk text-xs sm:!text-sm leading-normal">
                            {data?.card_content?.title}{" "}
                          </h4>
                          <p className="font-normal text-xs sm:!text-sm leading-normal text-[#6B7280] ">
                            {data?.card_content?.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2">
              {Array?.from({ length: 3 }, (_, i) => (
                <button
                  key={_}
                  className={cn(
                    "rounded-full h-1.5 ",
                    current === i + 1 ? "w-16 bg-[#79EABA]" : "bg-[#D9D9D9] w-7"
                  )}
                ></button>
              ))}
            </div>
          </Carousel>
        </div>
        <div className="flex items-start md:!items-center justify-between md:!flex-row flex-col gap-5 rounded-xl  bg-[#001F3E] py-8 px-6 mt-10">
          <div className="space-y-2">
            <h4 className="font-spaceGrotesk font-bold text-2xl small_tablet:!text-3xl text-[#F3F3F3]">
              Recommended Learning Paths
            </h4>
            <p className="text-[#F3F3F3] font-medium font-spaceGrotesk text-base small_tablet:!text-xl">
              Lorem episum doler mage pa distinctus evate maiade
            </p>
          </div>
          <Button className="text-[#F3F3F3] font-medium font-spaceGrotesk text-base small_tablet:!text-xl border-[#f3f3f3] bg-transparent py-4 px-4 sm:!px-8">
            View All Learning Paths
          </Button>
        </div>
        <div className="mt-3 rounded-xl bg-creator bg-cover bg-no-repeat bg-center relative overflow-hidden before:bg-layer_classes before:absolute before:inset-0 before:w-full before:h-full before:z-10 py-7 md:!py-14 px-5 sm:!px-10 lg:!px-24">
          <div className="relative z-20 space-y-6 w-full xl:!w-1/3">
            <div className="flex sm:!items-center gap-3 flex-wrap">
              <h5 className="font-bold font-spaceGrotesk text-lg sm:!text-2xl text-white">
                Staff Picked!
              </h5>
              <p className="rounded-full py-1 px-3 text-sm bg-[#FCD34D] text-black">
                View Vote Results!
              </p>
            </div>
            <h3 className="font-bold text-white font-spaceGrotesk text-xl sm:!text-2xl md:!text-3xl leading-normal">
              Learn to use ChatGPT for Your Creative Business
            </h3>
            <p className="leading-normal text-base sm:!text-lg md:!text-2xl text-white font-bold font-spaceGrotesk">
              Explore the world of AI for creatives with artist and creative
              entrepreneur, Juju Beanhead.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
