import { Footer } from "@/components/pages/Home/Footer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Faq, Testimonials } from "@/data/landing";
import { cn } from "@/lib/utils";
import { Squircle } from "corner-smoothing";
import { Globe, Mail, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  const [active, setActive] = useState("");
  return (
    <main className=" bg-landing_bg bg-[#0000009d] bg-blend-overlay sm:pt-6">
      <section className="sticky top-3 z-50">
        <div className="container  space-y-5">
          <div className="max-w-[85%] mx-auto border border-[#74C465] rounded-xl shadow-landing_header overflow-hidden">
            <div className="sm:!flex hidden items-center justify-between border-b border-[#74C465] bg-landing_header_top rounded-[12px_12px_0px_0px] p-3">
              <p className="text-2xs text-[#74C465] font-normal font-sora tracking-wider">
                <span className="text-2xs border border-[#74C465] p-1.5 text-white rounded-lg mr-2 ">
                  Academy
                </span>
                {"//  "} New Library Books
                <span className="text-[#222F5B] bg-[#74C465] p-1.5 rounded-lg ml-2 text-2xs uppercase">
                  Explore Now!
                </span>
              </p>
              <div className="flex items-center gap-2">
                <span className="text-2xs text-[#74C465]">{"// "}</span>
                <Link to={"/"}>
                  <img src="/icons/x.svg" alt="x" className="w-4 h-4" />
                </Link>
                <Link to={"/"}>
                  <img src="/icons/telegram.svg" alt="x" className="w-4 h-4" />
                </Link>
                <Link to={"/"}>
                  <img src="/icons/insta.svg" alt="x" className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="flex items-center  bg-[#17173A]">
              <Link to={"/"} className="border-r border-[#74C465] py-6 px-3">
                <img
                  src="/icons/landinglogo.svg"
                  alt="landing logo"
                  className="h-10 w-10"
                />
              </Link>
              <div className="flex items-center justify-center  h-full py-6 flex-1 px-3">
                <img
                  src="/icons/mental.svg"
                  alt="mental"
                  className=" ml-auto"
                />

                <DropdownMenu>
                  <DropdownMenuTrigger className="p-1 ml-auto bg-transparent text-[#74C465] border-none hover:shadow-none">
                    <Menu />{" "}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black sm:!w-40 w-32 mr-4">
                    {/* <DropdownMenuItem className="hover:!bg-[#121212]">
                      {" "}
                      <Link
                        to={"/"}
                        className="md:!p-1.5 p-1 font-bold text-[clamp(16px,2vw,20px)] text-[#DBE64C]"
                      >
                        Articles
                      </Link>
                    </DropdownMenuItem> */}
                    <DropdownMenuItem className="hover:!bg-[#121212]">
                      {" "}
                      <Link
                        to={"/marketplace"}
                        className="md:!p-1.5 p-1 font-bold text-[clamp(16px,2vw,20px)] text-[#DBE64C]"
                      >
                        Store
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:!bg-[#121212]">
                      {" "}
                      <Link
                        to={"/library"}
                        className="md:!p-1.5 p-1 font-bold text-[clamp(16px,2vw,20px)] text-[#DBE64C]"
                      >
                        Library
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:!bg-[#121212]">
                      {" "}
                      <Link
                        to={"/classes"}
                        className="md:!p-1.5 p-1 font-bold text-[clamp(16px,2vw,20px)] text-[#DBE64C]"
                      >
                        Classes
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          {/* <div className="sm:!flex hidden items-center justify-end gap-3">
            <Link to={"/"} className="p-3 font-bold text-2xl text-[#DBE64C]">
              Articles
            </Link>
            <Link to={"/"} className="p-3 font-bold text-2xl text-[#DBE64C]">
              Store
            </Link>
            <Link to={"/"} className="p-3 font-bold text-2xl text-[#DBE64C]">
              Library
            </Link>
            <Link to={"/"} className="p-3 font-bold text-2xl text-[#DBE64C]">
              Classes
            </Link>
          </div> */}
        </div>
      </section>

      <section className="xl:!pt-14 xs:!pt-10 pt-0 pb-10">
        <div className="3xl:!container max-w-[95%] mx-auto">
          <div className="relative pt-20">
            <img
              src="/images/next_gen.png"
              alt="next genration"
              className="lg:!max-w-xl sm:!max-w-full max-w-xs aspect-square absolute top-5 left-1/2 -translate-x-1/2 object-cover"
            />
            <Squircle cornerRadius={64} className="bg-start p-px">
              <Squircle
                cornerRadius={64}
                className="sm:!py-14 p-5 sm:!px-10 relative overflow-hidden bg-cover bg-rect bg-no-repeat"
              >
                <div>
                  <h3 className="text-center text-transparent bg-wrap bg-clip-text font-bold text-3xl font-spaceGrotesk">
                    Next Gen Blockchain-Based Education{" "}
                  </h3>
                  <p className="text-center text-xl text-white font-spaceGrotesk font-light mt-2">
                    Academy is here to help you warp drive into a better you{" "}
                  </p>
                  <div className="hidden sm:!grid xl:!grid-cols-3 small_tablet:!grid-cols-2 grid-cols-1 gap-5 py-10 xl:!py-20">
                    <div className="relative  h-full mx-auto w-full ">
                      <img
                        src="/images/vector.png"
                        alt="certificate"
                        className="w-full h-full object-fill absolute inset-0 "
                      />
                      <div className=" rounded-[64px] pt-14 pb-6 sm:!py-16 3xl:!py-20 px-8 sm:!px-12 3xl:!px-14 relative z-20 h-full">
                        <div className="flex flex-col justify-between h-full space-y-8">
                          <div className="flex items-center gap-4">
                            <h3 className="text-[#F6F8ED] font-sora xs:!text-sm text-xs font-semibold">
                              News/Announcements
                            </h3>
                            <span className="px-4 sm:!h-6 h-4 flex items-center justify-center bg-[#F6F8ED] text-[#397BED] sm:!text-base text-xs font-bold rounded-full ">
                              34
                            </span>
                          </div>
                          <img
                            src="/icons/certi.svg"
                            alt="certificate"
                            className="w-full h-full object-contain"
                          />
                          <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto ">
                            <Button
                              onClick={() =>
                                window.open(
                                  "https://mentalwealthacademy.net",
                                  "_blank"
                                )
                              }
                              className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto lg:!py-2.5 py-1.5 text-[#F6F8ED] sm:!text-xl text-sm font-bold"
                            >
                              Browse
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative rounded-[0px_0px_64px_64px] overflow-hidden">
                      <img
                        src="/images/vector.png"
                        alt="certificate"
                        className="w-full h-full object-fill absolute inset-0"
                      />
                      <div className="flex flex-col gap-y-8 h-full relative z-20 py-12 sm:py-16 3xl:!py-20 px-8 sm:!px-12 3xl:!px-14">
                        <div className="flex items-center gap-4">
                          <h3 className="text-[#F6F8ED] font-sora xs:!text-sm text-xs font-semibold">
                            Membership/Access
                          </h3>
                          <span className="px-4 sm:!h-6 h-4 flex items-center justify-center bg-[#F6F8ED] text-[#397BED] sm:!text-base text-xs font-bold rounded-full">
                            13
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 sm:!gap-4">
                          <img
                            src="/icons/vip1.svg"
                            alt="certificate"
                            className="w-full aspect-square"
                          />
                          <img
                            src="/icons/vip2.svg"
                            alt="certificate"
                            className="w-full aspect-square"
                          />
                          <img
                            src="/icons/vip3.svg"
                            alt="certificate"
                            className="w-full aspect-square"
                          />
                          <img
                            src="/icons/vip4.svg"
                            alt="certificate"
                            className="w-full aspect-square"
                          />
                        </div>
                      </div>
                      <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto absolute bottom-14 left-1/2 -translate-x-1/2 z-30">
                        <Button className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto lg:!py-2.5 py-1.5 text-[#F6F8ED] sm:!text-xl text-base font-bold ">
                          Mint
                        </Button>
                      </div>
                      <div className="h-1/3 bg-layer backdrop-blur-sm w-full left-1/2 -translate-x-1/2 absolute z-20 bottom-0"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="/images/vector.png"
                        alt="certificate"
                        className="w-full h-full object-fill absolute inset-0"
                      />
                      <div className="relative z-20 w-full inset-0 rounded-3xl py-12 sm:py-16 3xl:!py-20 px-8 sm:!px-12 3xl:!px-14 flex flex-col justify-between h-full gap-4">
                        <div className="flex items-center gap-5 3xl:gap-10">
                          <h3 className="text-[#F6F8ED] font-sora xs:!text-sm text-xs font-semibold">
                            Collaboration{" "}
                          </h3>
                          <span className="px-4 sm:!h-6 h-4 flex items-center justify-center bg-[#F6F8ED] text-[#397BED] sm:!text-base text-xs font-bold rounded-full">
                            34
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                          <img
                            src="/icons/news.svg"
                            alt="certificate"
                            className="w-2/3 h-full"
                          />

                          <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto ">
                            <Button className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto lg:!py-2.5 py-1.5 text-[#F6F8ED] sm:!text-xl text-sm font-bold">
                              Vote
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Carousel
                    className="sm:!hidden pb-10 pt-16"
                    opts={{ loop: true }}
                  >
                    <CarouselPrevious className="top-10 left-auto right-20 bg-transparent border-white text-white" />
                    <CarouselNext className="top-10 right-5 bg-transparent border-white text-white" />
                    <CarouselContent>
                      <CarouselItem className="basis-full">
                        {" "}
                        <div className="relative  h-full mx-auto w-full ">
                          <img
                            src="/images/vector.png"
                            alt="certificate"
                            className="w-full h-full object-fill absolute inset-0 "
                          />
                          <div className=" rounded-[64px] pt-14 pb-6 sm:!py-16 3xl:!py-20 px-8 sm:!px-12 3xl:!px-14 relative z-20 h-full">
                            <div className="flex flex-col justify-between h-full space-y-8">
                              <div className="flex items-center gap-4">
                                <h3 className="text-[#F6F8ED] font-sora xs:!text-sm text-xs font-semibold">
                                  News/Announcements
                                </h3>
                                <span className="px-4 sm:!h-6 h-4 flex items-center justify-center bg-[#F6F8ED] text-[#397BED] sm:!text-base text-xs font-bold rounded-full ">
                                  34
                                </span>
                              </div>
                              <img
                                src="/icons/certi.svg"
                                alt="certificate"
                                className="w-full h-full object-contain"
                              />
                              <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto ">
                                <Button
                                  onClick={() =>
                                    window.open(
                                      "https://mentalwealthacademy.net",
                                      "_blank"
                                    )
                                  }
                                  className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto lg:!py-2.5 py-1.5 text-[#F6F8ED] sm:!text-xl text-sm font-bold"
                                >
                                  Browse
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="basis-full">
                        <div className="relative rounded-[0px_0px_64px_64px] overflow-hidden h-full">
                          <img
                            src="/images/vector.png"
                            alt="certificate"
                            className="w-full h-full object-fill absolute inset-0"
                          />
                          <div className="flex flex-col gap-y-8 h-full relative z-20 py-12 sm:py-16 3xl:!py-20 px-8 sm:!px-12 3xl:!px-14">
                            <div className="flex items-center gap-4">
                              <h3 className="text-[#F6F8ED] font-sora xs:!text-sm text-xs font-semibold">
                                Membership/Access
                              </h3>
                              <span className="px-4 sm:!h-6 h-4 flex items-center justify-center bg-[#F6F8ED] text-[#397BED] sm:!text-base text-xs font-bold rounded-full">
                                13
                              </span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 sm:!gap-4">
                              <img
                                src="/icons/vip1.svg"
                                alt="certificate"
                                className="w-full aspect-square"
                              />
                              <img
                                src="/icons/vip2.svg"
                                alt="certificate"
                                className="w-full aspect-square"
                              />
                              <img
                                src="/icons/vip3.svg"
                                alt="certificate"
                                className="w-full aspect-square"
                              />
                              <img
                                src="/icons/vip4.svg"
                                alt="certificate"
                                className="w-full aspect-square"
                              />
                            </div>
                          </div>
                          <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto absolute bottom-14 left-1/2 -translate-x-1/2 z-30">
                            <Button className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto lg:!py-2.5 py-1.5 text-[#F6F8ED] sm:!text-xl text-base font-bold ">
                              Mint
                            </Button>
                          </div>
                          <div className="h-1/3 bg-layer backdrop-blur-sm w-full left-1/2 -translate-x-1/2 absolute z-20 bottom-0"></div>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="basis-full">
                        <div className="relative h-full">
                          <img
                            src="/images/vector.png"
                            alt="certificate"
                            className="w-full h-full object-fill absolute inset-0"
                          />
                          <div className="relative z-20 w-full inset-0 rounded-3xl py-12 sm:py-16 3xl:!py-20 px-8 sm:!px-12 3xl:!px-14 flex flex-col justify-between h-full gap-4">
                            <div className="flex items-center gap-5 3xl:gap-10">
                              <h3 className="text-[#F6F8ED] font-sora xs:!text-sm text-xs font-semibold">
                                Collaboration{" "}
                              </h3>
                              <span className="px-4 sm:!h-6 h-4 flex items-center justify-center bg-[#F6F8ED] text-[#397BED] sm:!text-base text-xs font-bold rounded-full">
                                34
                              </span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                              <img
                                src="/icons/news.svg"
                                alt="certificate"
                                className="w-2/3 h-full"
                              />

                              <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto ">
                                <Button className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto lg:!py-2.5 py-1.5 text-[#F6F8ED] sm:!text-xl text-sm font-bold">
                                  Vote
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                  <div className="flex items-center sm:!flex-row flex-col gap-3 sm:!justify-between justify-center sm:!mt-10 mt-5 flex-wrap">
                    <p className="font-bold text-white">
                      2025 Mental Wealth Academy™
                    </p>
                    <div className="flex items-center gap-2">
                      <Link to={"/"}>
                        <img
                          src="/icons/twitter_next.svg"
                          alt="twitter"
                          className="w-6 h-6"
                        />
                      </Link>
                      <Link to={"/"}>
                        <img
                          src="/icons/insta_next.svg"
                          alt="twitter"
                          className="w-6 h-6"
                        />
                      </Link>
                      <Link to={"/"}>
                        <img
                          src="/icons/youtube_next.svg"
                          alt="twitter"
                          className="w-6 h-6"
                        />
                      </Link>
                    </div>
                    <p className="text-white">
                      <Globe className="inline h-6 w-6" /> Metawavestudio.com ↗
                    </p>
                  </div>
                </div>
              </Squircle>
            </Squircle>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="text-center font-bold text-[#5168FF] text-[clamp(24px,3vw,68px)] font-spaceGrotesk">
            Warp Drive Into Next-Gen Digital Education{" "}
          </h1>
          <p className="text-center text-[clamp(18px,2vw,42px)] text-[#F6F8ED] font-spaceGrotesk font-light mt-2 sm:!mt-0">
            Digital Classrooms. Real-Life People, Resources, & Tools.{" "}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[95%] mt-10 sm:mt-14 lg:mt-20 mx-auto">
            {Testimonials?.map((data, i) => (
              <div
                className="bg-wrap_card bg-blend-hard-light shadow-wrap_card p-6 rounded-md space-y-5 bg-center"
                key={data?.name + i}
              >
                <p className="text-black text-sm small_tablet:text-base lg:text-lg">
                  {data?.testimonial}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={data?.icon}
                    alt="avatar"
                    className="w-12 h-12 aspect-square rounded-full"
                  />
                  <div className="space-y-0">
                    <h5 className="text-sm font-medium font-sf text-black">
                      {data?.name}{" "}
                    </h5>
                    <p className="text-sm font-sf text-[#6B7280] font-normal tracking-wide">
                      {data?.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <Carousel
            className=" sm:!hidden mt-10"
            opts={{ loop: true, center: true }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
          >
            <CarouselContent>
              {Testimonials?.map((data, i) => (
                <CarouselItem
                  key={data?.name + i}
                  className="basis-[95%] xs:!basis-9/12"
                >
                  <div className="bg-wrap_card bg-blend-hard-light shadow-wrap_card p-6 rounded-md space-y-5 bg-center">
                    <p className="text-black text-sm small_tablet:text-base lg:text-lg">
                      {data?.testimonial}
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={data?.icon}
                        alt="avatar"
                        className="w-12 h-12 aspect-square rounded-full"
                      />
                      <div className="space-y-0">
                        <h5 className="text-sm font-medium font-sf text-black">
                          {data?.name}{" "}
                        </h5>
                        <p className="text-sm font-sf text-[#6B7280] font-normal tracking-wide">
                          {data?.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel> */}
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="container">
          <h1 className="text-center font-bold text-[#5168FF] text-[clamp(24px,3vw,68px)] font-spaceGrotesk">
            Pathway To The Dream You{" "}
          </h1>
          <div className="hidden sm:!grid grid-cols-1  lg:!grid-cols-2 2xl:!grid-cols-3 gap-6  mt-8 md:mt-16 max-w-[90%] mx-auto">
            <Squircle
              cornerRadius={26}
              className="bg-pathway_border p-1 h-full max-w-xl  mx-auto"
            >
              <Squircle cornerRadius={26} className=" bg-[#F4F5FE] h-full">
                <div className="bg-card h-64 sm:h-80 relative">
                  <img
                    src="/icons/mwa.svg"
                    alt=""
                    className="w-auto h-auto max-h-72 object-cover absolute bottom-0 left-1/2 -translate-x-1/2"
                  />
                </div>
                <div className="p-1 bg-horizontal_layer w-full"></div>
                <div className="px-3 py-5 sm:!p-5 md:!px-9 md:!py-12 bg-[#F4F5FE] space-y-4 md:!space-y-7">
                  <h6 className="font-bold text-lg md:text-3xl font-spaceGrotesk text-center">
                    Rubi Helps w/ Accountability{" "}
                  </h6>
                  <div className="flex items-center mx-auto gap-2 shadow-badge justify-center bg-badge rounded-full py-3 px-3 sm:!px-9 w-fit border border-[#F6F8ED]">
                    <span className="font-mono text-sm sm:text-base md:text-xl">
                      AI Powered Scheduling{" "}
                    </span>
                    <img
                      src="/icons/student.svg"
                      alt="earth"
                      className="w-5 h-5"
                    />
                  </div>
                  <p className="text-[#494A79] font-sf text-base sm:text-lg lg:text-2xl">
                    Stay connected to what you truly desire. Rubi AI helps you
                    build accountability schedules, organize classrooms &
                    events, and guides your toward optimal path of success.
                  </p>
                </div>
              </Squircle>
            </Squircle>
            <Squircle
              cornerRadius={26}
              className="bg-pathway_border p-1 h-full max-w-xl mx-auto"
            >
              <Squircle cornerRadius={26} className="  bg-[#F4F5FE]  h-full">
                <div className="bg-card h-64 sm:h-80 grid place-items-center">
                  <img
                    src="/images/next_gen.png"
                    alt=""
                    className="w-40 sm:w-60 h-40 sm:h-60  aspect-square"
                  />
                </div>
                <div className="p-1 bg-horizontal_layer w-full"></div>

                <div className="px-3 py-5 sm:!p-5 md:!px-9 md:!py-12 bg-[#F4F5FE] space-y-4 md:!space-y-7">
                  <h6 className="font-bold text-lg md:text-3xl font-spaceGrotesk text-center">
                    Own Your Knowledge
                  </h6>
                  <div className="flex items-center gap-2 mx-auto shadow-badge justify-center bg-badge rounded-full py-3 px-3 sm:!px-9 w-fit border border-[#F6F8ED]">
                    <span className="font-mono text-sm sm:text-base md:text-xl">
                      Voting Rights
                    </span>
                    <img
                      src="/icons/glob.svg"
                      alt="earth"
                      className="w-5 h-5"
                    />
                  </div>
                  <p className="text-[#494A79] font-sf text-base sm:text-lg lg:text-2xl">
                    Voting tokens allow you to own crypto that contains voting
                    power for the Academy. This empowers you to own your
                    knowledge, and make decisions that reshape the platform.
                  </p>
                </div>
              </Squircle>
            </Squircle>
            <Squircle
              cornerRadius={26}
              className="bg-pathway_border p-1 h-full  max-w-xl mx-auto"
            >
              <Squircle cornerRadius={26} className=" bg-[#F4F5FE] h-full">
                <div className="bg-card py-5 h-60 sm:h-80 relative">
                  <img
                    src="/icons/proof.svg"
                    alt=""
                    className="w-full h-full absolute inset-0"
                  />
                </div>
                <div className="p-1 bg-horizontal_layer w-full"></div>

                <div className="px-3 py-5 sm:!p-5 md:!px-9 md:!py-12 bg-[#F4F5FE] space-y-4 md:!space-y-7">
                  <h6 className="font-bold text-lg md:text-3xl font-spaceGrotesk text-center">
                    Live Courses, Real Proof{" "}
                  </h6>
                  <div className="flex items-center gap-2 mx-auto shadow-badge justify-center bg-badge rounded-full py-3 px-3 sm:!px-9 w-fit border border-[#F6F8ED]">
                    <span className="font-mono text-sm sm:text-base md:text-xl">
                      Digital Certifications{" "}
                    </span>
                    <img
                      src="/icons/student.svg"
                      alt="earth"
                      className="w-5 h-5"
                    />
                  </div>
                  <p className="text-[#494A79] font-sf text-base sm:text-lg lg:text-2xl">
                    Secure your education with on-chain degrees. Verified on the
                    blockchain, your credentials are permanent, accessible, and
                    always authentic—no more lost diplomas.
                  </p>
                </div>
              </Squircle>
            </Squircle>
          </div>
          <Carousel className="mt-8 sm:!hidden pb-10" opts={{ loop: true }}>
            <CarouselContent>
              <CarouselItem className="basis-full">
                <Squircle
                  cornerRadius={26}
                  className="bg-pathway_border p-1 h-full"
                >
                  <Squircle
                    cornerRadius={26}
                    className=" max-w-xl mx-auto bg-[#F4F5FE] h-full"
                  >
                    <div className="bg-card h-64 sm:h-80 relative">
                      <img
                        src="/icons/mwa.svg"
                        alt=""
                        className="w-auto h-auto max-h-72 object-cover absolute bottom-0 left-1/2 -translate-x-1/2"
                      />
                    </div>
                    <div className="p-1 bg-horizontal_layer w-full"></div>

                    <div className="py-8 px-6 2xl:px-9 2xl:py-12 bg-[#F4F5FE] space-y-4 md:!space-y-7">
                      <h6 className="font-bold text-xl xs:!text-2xl md:text-3xl font-spaceGrotesk text-center">
                        Rubi Helps w/ Accountability{" "}
                      </h6>
                      <div className="flex items-center mx-auto gap-2 shadow-badge justify-center bg-badge rounded-full py-3 px-3 sm:!px-9 w-fit border border-[#F6F8ED]">
                        <span className="font-mono text-sm sm:text-base md:text-xl">
                          AI Powered Scheduling{" "}
                        </span>
                        <img
                          src="/icons/student.svg"
                          alt="earth"
                          className="w-5 h-5"
                        />
                      </div>
                      <p className="text-[#494A79] font-sf text-base sm:text-lg lg:text-2xl">
                        Stay connected to what you truly desire. Rubi AI helps
                        you build accountability schedules, organize classrooms
                        & events, and guides your toward optimal path of
                        success.
                      </p>
                    </div>
                  </Squircle>
                </Squircle>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <Squircle
                  cornerRadius={26}
                  className="bg-pathway_border p-1 h-full"
                >
                  <Squircle
                    cornerRadius={26}
                    className=" max-w-xl bg-[#F4F5FE] mx-auto h-full"
                  >
                    <div className="bg-card h-64 sm:h-80 grid place-items-center">
                      <img
                        src="/images/next_gen.png"
                        alt=""
                        className="w-40 sm:w-60 h-40 sm:h-60  aspect-square"
                      />
                    </div>
                    <div className="p-1 bg-horizontal_layer w-full"></div>

                    <div className="py-8 px-6 2xl:px-9 2xl:py-12 bg-[#F4F5FE] space-y-4 md:!space-y-7">
                      <h6 className="font-bold text-xl xs:!text-2xl md:text-3xl font-spaceGrotesk text-center">
                        Own Your Knowledge
                      </h6>
                      <div className="flex items-center gap-2 mx-auto shadow-badge justify-center bg-badge rounded-full py-3 px-3 sm:!px-9 w-fit border border-[#F6F8ED]">
                        <span className="font-mono text-sm sm:text-base md:text-xl">
                          Voting Rights
                        </span>
                        <img
                          src="/icons/glob.svg"
                          alt="earth"
                          className="w-5 h-5"
                        />
                      </div>
                      <p className="text-[#494A79] font-sf text-base sm:text-lg lg:text-2xl">
                        Voting tokens allow you to own crypto that contains
                        voting power for the Academy. This empowers you to own
                        your knowledge, and make decisions that reshape the
                        platform.
                      </p>
                    </div>
                  </Squircle>
                </Squircle>
              </CarouselItem>
              <CarouselItem className="basis-full">
                <Squircle
                  cornerRadius={26}
                  className="bg-pathway_border p-1 h-full"
                >
                  <Squircle
                    cornerRadius={26}
                    className=" max-w-xl mx-auto bg-[#F4F5FE] h-full"
                  >
                    <div className="bg-card py-5 h-64 sm:h-80 relative">
                      <img
                        src="/icons/proof.svg"
                        alt=""
                        className="w-full h-full absolute inset-0"
                      />
                    </div>
                    <div className="p-1 bg-horizontal_layer w-full"></div>

                    <div className="py-8 px-6 2xl:px-9 2xl:py-12 bg-[#F4F5FE] space-y-4 md:!space-y-7">
                      <h6 className="font-bold text-xl xs:!text-2xl md:text-3xl font-spaceGrotesk text-center">
                        Live Courses, Real Proof{" "}
                      </h6>
                      <div className="flex items-center gap-2 mx-auto shadow-badge justify-center bg-badge rounded-full py-3 px-3 sm:!px-9 w-fit border border-[#F6F8ED]">
                        <span className="font-mono text-sm sm:text-base md:text-xl">
                          Digital Certifications{" "}
                        </span>
                        <img
                          src="/icons/student.svg"
                          alt="earth"
                          className="w-5 h-5"
                        />
                      </div>
                      <p className="text-[#494A79] font-sf text-base sm:text-lg lg:text-2xl">
                        Secure your education with on-chain degrees. Verified on
                        the blockchain, your credentials are permanent,
                        accessible, and always authentic—no more lost diplomas.
                      </p>
                    </div>
                  </Squircle>
                </Squircle>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="-bottom-5 top-auto -translate-y-0 left-auto right-20 bg-[#F4F5FE]" />
            <CarouselNext className="-bottom-5 top-auto -translate-y-0 right-5 bg-[#F4F5FE]" />
          </Carousel>
        </div>
      </section>
      <section className="pb-10 lg:pb-20">
        <div className="container">
          <h2 className="text-center font-bold text-[#5168FF] text-[clamp(32px,3vw,68px)] font-spaceGrotesk">
            F.A.X.{" "}
          </h2>
          <Squircle
            cornerRadius={36}
            className="p-[2px] bg-fax max-w-[95%] mx-auto mt-5"
          >
            <Squircle
              cornerRadius={36}
              border={true}
              className=" bg-landing_header_top py-10 px-5 sm:!px-10 2xl:!px-20 "
            >
              <h2 className="text-center font-bold text-transparent bg-dashboard_tab bg-clip-text text-[clamp(24px,3vw,68px)] font-spaceGrotesk">
                Still Thirsty? Here’s Some More F.A.X!{" "}
              </h2>
              <div className="xl:!w-3/4 w-full mx-auto mt-5 sm:!mt-14">
                {Faq?.map((data) => (
                  <div
                    className={cn(
                      "py-3 sm:!py-6 border-b border-[#F3F3F3] sm:!space-y-4 last:border-0 transition-all"
                    )}
                    key={data?.question}
                    onClick={() =>
                      setActive(() => {
                        if (active === data?.question) return "";
                        return data?.question;
                      })
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={data?.icon}
                          alt="earth"
                          className="w-6 sm:w-9 h-6 sm:h-9"
                        />
                        <h5 className="font-bold text-transparent bg-mimbership_btn bg-clip-text font-spaceGrotesk capitalize text-base sm:!text-xl md:!text-2xl">
                          {data?.question}
                        </h5>
                      </div>
                      <img
                        src="/icons/arrow-up-right.svg"
                        alt="earth"
                        className="w-6 sm:w-9 h-6 sm:h-9"
                      />
                    </div>
                    <p
                      className={cn(
                        "font-sf text-sm sm:!text-base text-white font-thin transition-all duration-300 h-auto",
                        active === data?.question
                          ? "h-full mt-2 sm:!mt-0"
                          : "h-0 sm:!h-full overflow-hidden"
                      )}
                    >
                      {data?.answer}
                    </p>
                  </div>
                ))}
              </div>
            </Squircle>
          </Squircle>
        </div>
      </section>

<div style={{ width: '100%', display: 'flex', justifyContent: 'center', background: 'white', borderTop: '1px solid #EEE', padding: '24px 0' }}>
        <iframe
          src="https://mentalwealthacademy.net/embed"
          width="480"
          height="360"
          style={{ border: '1px solid #EEE', background: 'white' }}
          frameBorder="0"
          scrolling="no"
          title="Mental Wealth Academy Embed"
        ></iframe>
      </div>
      <Footer />
    </main>
  );
};
