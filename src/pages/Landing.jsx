import { Footer } from "@/components/pages/Home/Footer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Squircle } from "corner-smoothing";
import { Clock, Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <main className=" bg-landing_bg bg-[#0000009d] bg-blend-overlay pt-6">
      <section className="sticky top-3 z-50">
        <div className="container  space-y-5">
          <div className="max-w-[90%] mx-auto border border-[#74C465] rounded-xl shadow-landing_header overflow-hidden">
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
                    <DropdownMenuItem className="hover:!bg-[#121212]">
                      {" "}
                      <Link
                        to={"/"}
                        className="md:!p-1.5 p-1 font-bold text-[clamp(16px,2vw,20px)] text-[#DBE64C]"
                      >
                        Articles
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:!bg-[#121212]">
                      {" "}
                      <Link
                        to={"#"}
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
                        to={"#"}
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
      <section className="md:!pt-28 pt-10 pb-10">
        <div className="3xl:!container max-w-[95%] mx-auto">
          <h1 className="text-center font-bold text-[#DBE64C] text-[clamp(32px,4vw,62px)] font-spaceGrotesk">
            Warp Drive Into Next-Gen Digital Education
          </h1>
          <p className="text-center text-[clamp(16px,2vw,24px)] text-[#F6F8ED] font-spaceGrotesk">
            Lifetime Access To Classrooms, No More Subscriptions.
          </p>
          <div className="text-center mt-4">
            <Button className="bg-crpto_card h-auto sm:!py-5 py-3.5 sm:!px-14 px-7 font-medium text-base text-[#1D1818] ">
              Enter The Academy{" "}
              <img
                src="/icons/globe_sync.svg"
                alt="globe"
                className="h-5 w-5 "
              />
            </Button>
          </div>
          <div className="relative pt-20">
            <img
              src="/images/next_gen.png"
              alt="next genration"
              className="lg:!max-w-xl aspect-square absolute top-5 left-1/2 -translate-x-1/2 object-cover"
            />
            <Squircle
              cornerRadius={64}
              className="sm:!py-14 p-5 sm:!px-10 relative overflow-hidden bg-cover bg-rect bg-no-repeat"
            >
              <div>
                <h3 className="text-center text-white font-bold text-[clamp(24px,4vw,62px)] font-spaceGrotesk">
                  Offering Next-Gen Access To...
                </h3>
                <p className="text-center text-[clamp(14px,2vw,24px)] text-white font-spaceGrotesk font-light">
                  Digital Classrooms, Spaces, POAPs, Resources/Tools{" "}
                </p>
                <div className="grid xl:!grid-cols-3 small_tablet:!grid-cols-2 grid-cols-1 gap-5 py-10">
                  <div className="relative  h-full mx-auto w-full">
                    <img
                      src="/images/vector.png"
                      alt="certificate"
                      className="w-full h-full object-fill absolute inset-0"
                    />
                    <div className=" rounded-[64px] py-10 sm:py-16 3xl:!py-20  px-6 sm:px-12 3xl:px-14 relative z-20 h-full">
                      <div className="flex flex-col justify-between h-full space-y-8">
                        <div className="flex items-center gap-12 3xl:gap-16">
                          <h3 className="text-[#F6F8ED] font-sora xs:!text-sm text-xs font-semibold">
                            Classes
                          </h3>
                          <span className="px-4 sm:!h-6 h-4 flex items-center justify-center bg-[#F6F8ED] text-[#397BED] sm:!text-base text-xs font-bold rounded-full ">
                            13
                          </span>
                        </div>
                        <img
                          src="/icons/certificate.svg"
                          alt="certificate"
                          className="w-full h-full object-contain"
                        />
                        <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto ">
                          <Button className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto lg:!py-2.5 py-1.5 text-[#F6F8ED] sm:!text-xl text-sm font-bold">
                            Explore
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-[64px] overflow-hidden">
                    <img
                      src="/images/vector.png"
                      alt="certificate"
                      className="w-full h-full object-fill absolute inset-0"
                    />
                    <div className="flex flex-col justify-between h-full gap-y-4 relative z-20 py-12 sm:py-16 3xl:!py-20  px-6 sm:px-12 3xl:px-14">
                      <div className="flex items-center gap-5 3xl:gap-10">
                        <h3 className="text-[#F6F8ED] font-sora xs:!text-sm text-xs font-semibold">
                          <span className="text-[#397BED]">VIP</span>/NFT
                          Collections
                        </h3>
                        <span className="px-4 sm:!h-6 h-4 flex items-center justify-center bg-[#F6F8ED] text-[#397BED] sm:!text-base text-xs font-bold rounded-full">
                          13
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
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
                    <div className="relative z-20 w-full inset-0 rounded-3xl py-12 sm:py-16 3xl:!py-20  px-6 sm:px-12 3xl:px-14 flex flex-col justify-between h-full gap-4">
                      <div className="flex items-center gap-5 3xl:gap-10">
                        <h3 className="text-[#F6F8ED] font-sora xs:!text-sm text-xs font-semibold">
                          Library/News
                        </h3>
                        <span className="px-4 sm:!h-6 h-4 flex items-center justify-center bg-[#F6F8ED] text-[#397BED] sm:!text-base text-xs font-bold rounded-full">
                          34
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-3">
                        <img
                          src="/icons/news.svg"
                          alt="certificate"
                          className="w-1/2"
                        />
                        <img
                          src="/icons/news.svg"
                          alt="certificate"
                          className="w-1/2"
                        />
                        <img
                          src="/icons/news.svg"
                          alt="certificate"
                          className="w-1/2"
                        />
                        <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto ">
                          <Button className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto lg:!py-2.5 py-1.5 text-[#F6F8ED] sm:!text-xl text-sm font-bold">
                            Search
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </section>
      <section className="pt-10">
        <div className="container">
          <div className="relative space-y-3">
            <div className="flex gap-10 2xl:!w-2/3 w-full small_tablet:!flex-row flex-col 2xl:!pb-0 xs:!pb-40 md:!pl-10 pl-0">
              <img
                src="/images/next_gen.png"
                alt="next genration"
                className="h-full aspect-square sm:!max-w-max max-w-44"
              />
              <div className="bg-ai_agent bg-cover border border-[#74C465] rounded-3xl py-7 px-6 w-full flex-1">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="flex items-center gap-3">
                    <img
                      src="/icons/data.svg"
                      alt="data science"
                      className="w-10 h-10"
                    />
                    <p className="font-bold text-[clamp(24px,4vw,40px)] text-white font-spaceGrotesk">
                      AI Agent Rubi{" "}
                    </p>
                  </div>
                  <div className="space-y-1 ml-auto">
                    <div className="flex gap-2.5 justify-center items-center w-full text-white bg-landing_header_top p-2 rounded-lg">
                      <p className="self-stretch my-auto text-sm">
                        Total Portfolio Breakdown
                      </p>
                      <Clock className="w-4 h-4" />
                    </div>
                    <p className="font-bold font-spaceGrotesk text-white text-sm text-right">
                      <span>Treasury 240E </span>
                      <span className="text-[rgb(149,244,146)]">+758%</span>
                    </p>{" "}
                  </div>
                </div>
                <div className={`mt-8 text-xs leading-6 text-white`}>
                  <p>
                    Introducing Rubi AI, 456ghz of data, translated into our
                    quantum computation educational model. Our newest
                    computational assistants designed to delve into the
                    intricate dynamics of science & educational reformation and
                    deliver advanced level pathways to knowledge and
                    higher-learning. Become a master at what you love and what
                    interests you. Legendary tech-stack harnesses the power of
                    collective intelligence, enabling analyzation and predictive
                    learning with unprecedented accuracy. Our knowledge
                    consensus, equalizing contribution towards a vast pool of
                    knowledge that transcends traditional boundaries. The New
                    Digital World.{" "}
                    <span className="text-[#1115ff]" role="button" tabIndex={0}>
                      See more
                    </span>
                  </p>
                </div>
                <p
                  className="z-10 mt-0 mr-9 text-xs font-bold text-right text-yellow-300 max-md:mr-2.5"
                  role="status"
                  aria-label="Current ETH price in USD"
                >
                  1 ETH = $3,834
                </p>
              </div>
            </div>
            <div className="xs:!absolute right-0 -bottom-20">
              <div className="relative xs:!block flex flex-col-reverse">
                <img
                  src="/images/bunnyBot.png"
                  alt="next genration"
                  className="h-60 ml-auto"
                />
                <div
                  className=" xs:!absolute xs:!top-8  xs:!right-[70%]
                 font-sora sm:!w-72  "
                >
                  <div className="relative rounded-xl bg-white p-4 space-y-3 before:h-3 before:w-3 before:bg-white before:absolute xs:before:!-right-1 xs:before:!left-auto before:left-10 xs:before:!bottom-10 before:-bottom-1 before:rotate-45">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-sm ">
                        Update Your Schedule
                      </h3>
                      <Button className="p-0 border-0 h-auto">
                        <X className="h-4 w-4 " />
                      </Button>
                    </div>
                    <p className="text-xs text-[#374151]">
                      Update your AI classroom schedule by integrating a few new
                      hobby classes, earn POAPs, and continue your journey.
                    </p>
                    <div className="text-right">
                      <Button className="text-[#374151] text-xs">
                        <img
                          src="/images/next_gen.png"
                          alt="next_gen"
                          className="h-4 w-4"
                        />
                        Schedule Your Courses
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 bg-[#0E0E0E]">
        <div className="container">
          <div className="grid xl:!grid-cols-5 lg:!grid-cols-2 grid-cols-1 gap-5">
            <div className="space-y-16 md:!pl-10 pl-0 pb-5 xl:!col-span-2">
              <div className="space-y-3.5">
                <h4 className="text-[clamp(30px,4vw,48px)] font-bold text-white leading-none">
                  Academy
                </h4>
                <p className="text-[clamp(24px,4vw,42px)] font-semibold text-[#B2B2B2] leading-none">
                  Lorem episom marikus bealo expersectie els insoas ta ldaoendo.
                </p>
                <p className="md:!text-xl text-base text-[#B2B2B2] !leading-tight">
                  Knowledge is power. Access the digital library chain in your
                  private, secure library where devs can upload and share
                  resources, repeat books, and lend and vote on changes.
                </p>
              </div>
              <div className="space-y-4">
                <p className="md:!text-xl text-base text-[#8F8F8F] !leading-tight font-sora font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accedere ad bibliothecam digitalem in privata et secure
                  catena, ubi developeri possunt resources communicare, libros
                  iterare, mutare, et mutationes suffragari. In hac bibliotheca
                  decentralizata, scientia manet libera et accessibilis omnibus
                  qui eam quaerunt. Per innovationem et collaborationem, membra
                  communitatis possunt libros recensere, novum contentum addere,
                  et de futuro bibliothecae digitalis deliberare. Scientia est
                  potentia, et haec potestas nunc in manibus tuis est.
                </p>

                <Button className="shadow-membership_card bg-fancy_btn max-w-32 w-full justify-center rounded-full h-auto py-3 text-[#F6F8ED] sm:!text-xl text-base font-bold border border-black">
                  Explore
                </Button>
              </div>
            </div>
            <div className="relative xl:!col-span-3 col-span-1">
              <img
                src="/images/home.png"
                alt="home "
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-20 bg-features bg-cover">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-5 ">
            <h2 className="font-bold font-spaceGrotesk text-[clamp(24px,4vw,48px)] text-white text-center leading-tight">
              <span className="text-[#DBE64C]">Friendly features</span> built
              for easy-collaboration
            </h2>
            <div className="flex items-center justify-center gap-10 flex-wrap">
              <div className="flex gap-2.5 justify-center items-center max-w-56 w-full text-[#DBE64C] bg-landing_header_top p-2 rounded-lg">
                <p className="self-stretch my-auto text-sm">
                  Total Portfolio Breakdown
                </p>
                <Clock className="w-4 h-4" />
              </div>

              <div className="relative border border-[#DBE64C] bg-[#F6F8ED] text-[#001F3E] rounded-sm w-60 text-center p-2.5 flex items-center justify-center gap-2">
                <img
                  src="/icons/built.svg"
                  alt="build"
                  className="h-14 w-14 absolute -left-4 -top-1.5"
                />
                <p className="font-normal">0x1234...5678</p>
                <Button className="p-0 border-none">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="grid md:!grid-cols-2 grid-cols-1 gap-10 items-center mt-10">
            <div className="rounded-3xl p-5 bg-carousel_bg">
              <Carousel className="py-5" opts={{ dots: true }}>
                <CarouselContent>
                  <CarouselItem className="md:!py-10 py-5">
                    <div className="space-y-3 md:!w-3/4 w-full mx-auto">
                      <h5 className="text-center font-bold text-black text-[clamp(24px,4vw,32px)] font-spaceGrotesk">
                        $Academy: Point System
                      </h5>
                      <div className="flex items-center  gap-4 max-w-sm mx-auto">
                        <img
                          src="/icons/gem.svg"
                          alt="gems"
                          className="w-9 h-9"
                        />
                        <p className="text-sm text-[#1E4890]">382 Gems</p>
                      </div>
                      <div className="max-w-sm mx-auto p-2 rounded-full border border-black bg-[#D6A1FF]"></div>
                      <p className="text-sm leading-tight font-ibmPlexMono tracking-wide">
                        Academy Shards are the tipping system for authorship.
                        Each week you start off with a free supply of 100
                        $ACADEMY. Use them to show love to authors and artists
                        you love.
                      </p>
                      <div className="flex items-center  gap-4 max-w-sm mx-auto">
                        <img
                          src="/icons/tomato.svg"
                          alt="gems"
                          className="w-9 h-9"
                        />
                        <p className="text-sm text-[#1E4890]">12 Tomatoes</p>
                      </div>
                      <div className="max-w-sm mx-auto p-2 rounded-full border border-black bg-[#E24C4C]"></div>
                      <p className="text-sm leading-tight font-ibmPlexMono tracking-wide">
                        Tomatoes are the downvoting system token. These can be
                        purchased in packs. Throw them at articles you think
                        aren’t helpful, or just plain stupid! There’s a special
                        math! If an article receives a certain amount of
                        tomatoes to shards, it gets BOO’d off the platform!
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:!py-10 py-5">
                    <div className="space-y-7 md:!w-3/4 w-full mx-auto">
                      <h5 className="text-center font-bold text-black text-[clamp(24px,4vw,32px)] font-spaceGrotesk">
                        Academy Gems Are Rewards!{" "}
                      </h5>
                      <div className="rounded-xl sm:!p-10 p-5 space-y-4 bg-white shadow-carousel_card">
                        <div className="flex items-center  gap-4 max-w-sm mx-auto">
                          <img
                            src="/icons/gem.svg"
                            alt="gems"
                            className="w-9 h-9"
                          />
                          <p className="text-sm text-[#1E4890]">382 Gems</p>
                        </div>
                        <div className="max-w-sm mx-auto p-2 rounded-full border border-black bg-[#D6A1FF]"></div>
                        <p className="text-sm leading-tight tracking-wide font-ibmPlexMono">
                          Academy Shards are the tipping system for authorship.
                          Each week you start off with a free supply of 100
                          $ACADEMY. Use them to show love to authors and artists
                          you love.
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:!py-10 py-5">
                    <div className="space-y-7 md:!w-3/4 w-full mx-auto">
                      <h5 className="text-center font-bold text-black text-[clamp(24px,4vw,32px)] font-spaceGrotesk">
                        Throw Tomatoes To Downvote!{" "}
                      </h5>

                      <div className="sm:!p-10 p-5 rounded-xl space-y-4 bg-white shadow-carousel_card">
                        <div className="flex items-center  gap-4 max-w-sm mx-auto">
                          <img
                            src="/icons/tomato.svg"
                            alt="gems"
                            className="w-9 h-9"
                          />
                          <p className="text-sm text-[#1E4890]">12 Tomatoes</p>
                        </div>
                        <div className="max-w-sm mx-auto p-2 rounded-full border border-black bg-[#E24C4C]"></div>
                        <p className="text-sm leading-tight tracking-wide font-ibmPlexMono">
                          Tomatoes are the downvoting system token. These can be
                          purchased in packs. Throw them at articles you think
                          aren’t helpful, or just plain stupid! There’s a
                          special math! If an article receives a certain amount
                          of tomatoes to shards, it gets BOO’d off the platform!
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:!py-10 py-5">
                    <div className="space-y-5 md:!w-3/4 w-full mx-auto">
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src="/icons/trophy.svg"
                          alt="trophy"
                          className="h-16 w-16"
                        />{" "}
                        <h5 className="text-center font-bold text-black text-[clamp(24px,4vw,32px)] font-spaceGrotesk">
                          Airdrops & Leaderboard{" "}
                        </h5>
                      </div>

                      <div className="sm:!p-10 p-5 rounded-xl space-y-4 bg-white shadow-carousel_card">
                        <div className="flex items-center gap-4">
                          <img
                            src="/icons/trophy.svg"
                            alt="gems"
                            className="w-9 h-9"
                          />
                          <p className="text-sm text-[#1E4890] font-sora">
                            Winners receive various airdrops and claimables!
                          </p>
                        </div>

                        <p className="text-sm leading-tight tracking-wide font-ibmPlexMono">
                          Leaderboard is made of the top shard-earning posts and
                          articles. This could be bi-weekly or monthly.
                        </p>
                        <p className="text-sm leading-tight tracking-wide font-ibmPlexMono py-10 px-5 bg-[#ECF7F2] rounded-lg">
                          Disincentives and token sinks are provided in various
                          ways to reduce the incentive of sybil attacks and
                          malpractice. However, this is still in the fun stage
                          so I can’t share all the tips ;)
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:!py-10 py-5">
                    <div className="space-y-5 md:!w-4/5 w-full mx-auto">
                      <h5 className="text-center font-bold text-black text-[clamp(24px,4vw,32px)] font-spaceGrotesk">
                        NFT Profiles Are Back!
                      </h5>

                      <div className="md:!p-10 p-5 rounded-xl space-y-4 bg-white shadow-carousel_card">
                        <div className="flex items-center  gap-4">
                          <img
                            src="/icons/nft.svg"
                            alt="gems"
                            className="w-9 h-9"
                          />
                          <p className="text-sm text-[#1E4890] font-sora">
                            This Could Be You!{" "}
                          </p>
                        </div>

                        <p className="text-sm leading-tight tracking-wide font-ibmPlexMono">
                          Add NFT Profile Pictures to add authenticity to your
                          posts! All NFT profiles have a distinct Hexagon
                          Pattern. Only available for Ethereum & Base L2 NFTs.
                        </p>
                        <p className="text-sm leading-tight tracking-wide font-ibmPlexMono py-10 px-5 bg-[#ECF7F2] rounded-lg">
                          All Mental Wealth Academy article posts are onchain
                          and available via NFTs and arweave blockchain storage.
                          Deletion of articles due to tomatoes throw doesn’t
                          delete the content from the internet, as all content
                          is available onchain.
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:!py-10 py-5">
                    <div className="space-y-10 w-full mx-auto text-center flex flex-col items-center sm:!justify-center h-full">
                      <div className="space-y-2">
                        <img
                          src="/icons/intro.svg"
                          alt="intro"
                          className="w-32 h-32 rounded-full mx-auto"
                        />
                        <p className="text-xl font-bold text-[#636363] font-sora ">
                          INTRODUCING
                        </p>
                        <h5 className=" font-bold text-black text-[clamp(24px,4vw,51px)] font-spaceGrotesk leading-none">
                          Academy Profile{" "}
                        </h5>

                        <p className="text-sm text-black font-sora">
                          Sync your account, get started, and rent a book.{" "}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-5 sm:!flex-row flex-col">
                          <div className="flex items-center gap-5 justify-between border border-black rounded-lg p-3 max-w-xs w-full bg-white">
                            <div className="flex items-center gap-2">
                              <img
                                src="/icons/circle.svg"
                                alt="circle"
                                className="w-6 h-6"
                              />
                              <p className="text-sm text-[#1E4890]">
                                0x4725...2352
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <img
                                src="/icons/CryptoIcon.svg"
                                alt="circle"
                                className="w-5 h-5"
                              />
                              <p className="text-sm text-[#1E4890]">0.024E </p>
                            </div>
                          </div>
                          <Button className="text-sm h-auto py-3.5 border-black border px-5 font-ibmPlexMono font-normal text-[#F6F8ED] bg-landing_header_top">
                            Sync Account <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Link
                          to={"/"}
                          className="text-sm text-black font-spaceGrotesk text-left flex sm:!justify-start justify-center tracking-wider"
                        >
                          Change Account?{" "}
                        </Link>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:!py-10 py-5">
                    <div className="space-y-10 w-full mx-auto text-center">
                      <div className="space-y-2">
                        <h5 className=" font-bold text-black text-[clamp(24px,4vw,32px)] font-spaceGrotesk leading-none">
                          Ready To Share Your Stories?{" "}
                        </h5>

                        <p className="text-sm text-black font-sora">
                          Sync your account, Create a post and get started.{" "}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <img
                          src="/icons/story.svg"
                          alt="intro"
                          className="max-w-xs h-60 rounded-full mx-auto"
                        />
                      </div>
                      <div className="space-y-2 2xl:!w-4/5 w-full mx-auto">
                        <div className="flex gap-5 justify-center sm:!flex-row flex-col">
                          <div className="space-y-2">
                            <div className="flex items-center gap-5 justify-between border border-black rounded-lg p-3 max-w-xs w-full bg-white">
                              <div className="flex items-center gap-2">
                                <img
                                  src="/icons/circle.svg"
                                  alt="circle"
                                  className="w-6 h-6"
                                />
                                <p className="text-sm text-[#1E4890]">
                                  0x4725...2352
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <img
                                  src="/icons/CryptoIcon.svg"
                                  alt="circle"
                                  className="w-5 h-5"
                                />
                                <p className="text-sm text-[#1E4890]">
                                  0.024E{" "}
                                </p>
                              </div>
                            </div>
                            <Link
                              to={"/"}
                              className="text-sm text-black font-spaceGrotesk text-left flex tracking-wider"
                            >
                              Change Account?{" "}
                            </Link>
                          </div>
                          <Button className="text-sm h-fit py-3.5 border-black border px-5 font-ibmPlexMono font-normal text-[#F6F8ED] bg-landing_header_top">
                            Sync Account <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="md:!py-10 py-5">
                    <div className="space-y-10 w-4/5 mx-auto flex items-center small_tablet:!justify-center small_tablet:!h-full gap-5 small_tablet:!flex-row flex-col">
                      <div className="flex-1">
                        <img
                          src="/icons/intro.svg"
                          alt="intro"
                          className="w-32 h-32 rounded-full mx-auto"
                        />
                      </div>
                      <div className="space-y-5 flex-1">
                        <h5 className=" font-bold text-black text-[clamp(24px,2vw,51px)] font-spaceGrotesk leading-none">
                          Let’s setup your profile.
                        </h5>
                        <div className="flex items-center gap-3">
                          <Input
                            className="text-[#3F3F3F] !placeholder-[#3F3F3F] flex-1"
                            placeholder="James"
                          />
                          <Input
                            className="text-[#3F3F3F] !placeholder-[#3F3F3F] flex-1"
                            placeholder="Warpcast"
                          />
                        </div>
                        <Textarea
                          rows={5}
                          placeholder="Enter your bio here."
                          className="w-full text-[#3F3F3F] !placeholder-[#3F3F3F]"
                        />
                        <div className="flex items-center justify-between">
                          <Button className="border-none bg-transparent font-spaceGrotesk text-[#939393] p-0 hover:shadow-none gap-1">
                            {" "}
                            <ChevronLeft className="h-4 w-4" /> Go Back
                          </Button>
                          <Button className="border-none bg-transparent font-spaceGrotesk text-[#939393] p-0 hover:shadow-none gap-1">
                            {" "}
                            Press enter
                            <Undo2 className="rotate-360 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-0 shadow-carousel_btn border-none" />
                <CarouselNext className="right-0 shadow-carousel_btn border-none" />
              </Carousel>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img src="/icons/earth.svg" alt="earth" className="h-9 w-9" />
                  <h5 className="font-bold text-[clamp(20px,4vw,24px)] text-white">
                    Global Onchain Economy
                  </h5>
                </div>
                <p className="text-xs text-white !leading-[24px]">
                  Introducing the groundbreaking Agentic Sybil Agent, our newest
                  computational swarm assistant designed to delve into the
                  intricate dynamics of tectonic plate movements. This
                  innovative technology harnesses the power of collective
                  intelligence, enabling it to analyze and predict geological
                  shifts with unprecedented accuracy. Imagine a network of
                  digital minds working in harmony, each contributing to a vast
                  pool of knowledge that transcends traditional boundaries. The
                  Agentic Sybil Agent is not just a tool;{" "}
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/icons/access.svg"
                    alt="earth"
                    className="h-9 w-9"
                  />
                  <h5 className="font-bold text-[clamp(20px,4vw,24px)] text-white">
                    Unrestricted Access{" "}
                  </h5>
                </div>
                <p className="text-xs text-white !leading-[24px]">
                  Introducing Cybernetic Sybil Swarms, 456ghz of data,
                  translated into our quantum computation educational model. Our
                  newest computational assistants designed to delve into the
                  intricate dynamics of science & educational reformation and
                  deliver advanced level pathways to knowledge and
                  higher-learning. Become a master at what you love and what
                  interests you. Legendary tech-stack harnesses the power of
                  collective intelligence, enabling analyzation and predictive
                  learning with unprecedented accuracy. Our knowledge consensus,
                  equalizing contribution towards a vast pool of knowledge that
                  transcends traditional boundaries. The New Digital World. See
                  more
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/icons/quantam.svg"
                    alt="earth"
                    className="h-9 w-9"
                  />
                  <h5 className="font-bold text-[clamp(20px,4vw,24px)] text-white">
                    Quantum Computation{" "}
                  </h5>
                </div>
                <p className="text-xs text-white !leading-[24px]">
                  Introducing the groundbreaking Agentic Sybil Agent, our newest
                  computational swarm assistant designed to delve into the
                  intricate dynamics of tectonic plate movements. This
                  innovative technology harnesses the power of collective
                  intelligence, enabling it to analyze and predict geological
                  shifts with unprecedented accuracy. Imagine a network of
                  digital minds working in harmony, each contributing to a vast
                  pool of knowledge that transcends traditional boundaries. The
                  Agentic Sybil Agent is not just a tool;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-skull py-20 bg-cover h-96 overflow-hidden relative"></section>
      <section className="small_tablet:!py-20 py-10">
        <div className="container xl:!max-w-7xl mx-auto">
          <h2 className="font-bold text-white text-[clamp(30px,4vw,64px)] text-center">
            Strategic Reserve{" "}
          </h2>
          <p className="text-[clamp(20px,2vw,32px)] font-light font-ibmPlexMono leading-none text-white max-w-6xl text-center mx-auto">
            Next-Gen Education requires a diverse set of assets, and funds to
            better ensure quality doesn’t come at the cost of extraction.
          </p>
          <div className="grid md:!grid-cols-2 grid-cols-1 gap-8 small_tablet:!mt-16 mt-8">
            <div className="space-y-5">
              <div className="sm:!p-11 p-7 rounded-xl bg-footer bg-no-repeat bg-cover">
                <div className="flex items-center justify-between sm:!flex-row flex-col-reverse gap-5">
                  <div className="sm:!space-y-20 space-y-10 flex-1">
                    <div className="space-y-4">
                      <h4 className="bg-reserve_text bg-clip-text text-transparent text-[clamp(20px,2vw,32px)] font-bold font-spaceGrotesk leading-normal">
                        MWA Crypto Reserve
                      </h4>
                      <p className="text-[#BFFFDD] font-light leading-normal">
                        BTC, ETH, XRP, SOL, & ADA
                      </p>
                      <div className="flex items-center">
                        <img
                          src="/icons/bitcoin.svg"
                          alt="bitcoin"
                          className="h-10 w-10"
                        />
                        <img
                          src="/icons/etherimu.svg"
                          alt="bitcoin"
                          className="h-10 w-10 -ml-5"
                        />
                        <img
                          src="/icons/3.svg"
                          alt="bitcoin"
                          className="h-10 w-10 -ml-5"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MoveUp className="text-[#3DE792] h-6" />
                      <p className="font-spaceGrotesk text-white font-medium">
                        <span className="text-[#3DE792]">29.23%</span> LAST 24h
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <img
                      src="/images/next_gen.png"
                      alt="next genration"
                      className="w-full aspect-square ml-auto object-cover max-w-44"
                    />
                  </div>
                </div>
              </div>
              <p className="font-medium text-[#A8A8A8] text-[clamp(16px,2vw,24px)] font-spaceGrotesk">
                Mental Wealth Academy is an educational DAO focused on, the
                reshaping of knowledge & scientific access. A bold step forward
                in the Next Gen Education requires innovating using crypto &
                smart contracts, on the foundation of blockchain technology to
                provide a transparent base-layer for operations. This move
                cements Mental Wealth Academy at the fore-front, transparently
                providing critical insight into our system, driving innovation
                by providing power to each individual. Here’s a look at the key
                assets shaping our revolutionary initiative.
              </p>
            </div>
            <div className="space-y-5">
              <div className="rounded-xl bg-footer bg-no-repeat bg-cover sm:!py-10 py-7 space-y-12">
                <div className="sm:!px-10 px-6 space-y-8">
                  <h4 className="bg-reserve_text bg-clip-text text-transparent text-[clamp(18px,2vw,24px)] font-bold font-spaceGrotesk leading-normal">
                    Statistics{" "}
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#BFFFDD] font-light leading-normal text-[clamp(16px,2vw,20px)]">
                        Market Cap
                      </h2>
                      <p className="text-[#BFFFDD] font-light leading-normal text-[clamp(16px,2vw,20px)]">
                        $ 2.47T
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#BFFFDD] font-light leading-normal text-[clamp(16px,2vw,20px)]">
                        24h performance{" "}
                      </h2>
                      <div className="flex items-end gap-2">
                        <MoveUp className="text-[#3DE792] h-6" />
                        <p className=" text-[#3DE792] font-light leading-normal text-[clamp(16px,2vw,20px)]">
                          29.16%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-[#BFFFDD] font-light leading-normal text-[clamp(16px,2vw,20px)]">
                        24h volume{" "}
                      </h2>
                      <p className="text-[#BFFFDD] font-light leading-normal text-[clamp(16px,2vw,20px)]">
                        $ 82.24B{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <h4 className="bg-reserve_text sm:!px-10 px-6 bg-clip-text text-transparent text-[clamp(18px,2vw,24px)] font-bold font-spaceGrotesk leading-normal">
                  Crypto in this basket{" "}
                </h4>
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {Crypto_Prices?.map((crypto) => (
                      <CarouselItem
                        className="xl:!basis-2/5 md:!basis-2/3 sm:!basis-2/5 basis-2/3"
                        key={crypto?.coin}
                      >
                        <div className="flex items-center gap-5 bg-crpto_card bg-cover bg-no-repeat rounded-xl p-4">
                          <img
                            src={crypto?.icon}
                            alt="etherium"
                            className="h-12 w-12"
                          />
                          <div className="space-y-1 flex-1">
                            <h2 className="text-[#494949] text-[clamp(18px,1vw,24px)] uppercase">
                              {crypto?.coin}
                            </h2>
                            <h2 className="text-black text-[clamp(18px,1vw,24px)] uppercase font-bold">
                              {crypto?.price}
                            </h2>
                            <div className="flex items-end gap-1">
                              {crypto?.increase ? (
                                <MoveUp className="text-[#3DE792] h-5" />
                              ) : (
                                <MoveDown className="text-[#FF1280] h-5" />
                              )}
                              <p
                                className={cn(
                                  "  font-light leading-none text-[clamp(16px,2vw,20px)]",
                                  crypto?.increase
                                    ? "text-[#3DE792]"
                                    : "text-[#FF1280]"
                                )}
                              >
                                {crypto?.exchange}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              <p className="font-normal text-[#A8A8A8] text-[clamp(16px,2vw,18px)] font-spaceGrotesk">
                This is not financial advice.* Buying the MWA’s Crypto Reserve
                will automatically purchase the individual assets and store them
                in your respective separate accounts. If you wish to sell any of
                the individual assets comprising the Basket, you’ll need to sell
                each one in a separate transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <h2 className="font-bold text-white text-[clamp(30px,4vw,64px)] text-center">
            Articles & Important Links
          </h2>
          <div className="grid md:!grid-cols-3 sm:!grid-cols-2 grid-cols-1 gap-10 mt-10">
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
                  Let’s find some teachers and classrooms...{" "}
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
            <div className="rounded-xl border-2 border-black bg-mimbership p-2.5">
              <div className="rounded-2xl bg-[#141C2C] py-5 px-2.5 space-y-4">
                <div className="bg-cover bg-no-repeat bg-mimbership_banner h-52 p-5 md:px-7 md:pt-12 rounded-2xl flex items-end">
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
                <h5 className="text-sm uppercase text-white">
                  Let’s Gain access to everything... forever{" "}
                </h5>
                <Button className="bg-mimbership_btn w-full text-xs text-black justify-center h-auto p-2.5">
                  <img src="/icons/crown.svg" alt="crown" className="h-5 w-5" />
                  VIP Membership Lifetime $10
                </Button>
              </div>
            </div>
            <div className="rounded-xl border-4 border-black bg-header p-2.5 ">
              <div className="rounded-2xl bg-[#141C2C] py-5 px-2.5 space-y-4">
                <div className="bg-discord bg-cover h-52 flex items-end p-2 rounded-xl"></div>
                <h5 className="text-sm uppercase text-white">
                  Let’s see the community...{" "}
                </h5>
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
        </div>{" "}
      </section> */}
      <Footer />
    </main>
  );
};
