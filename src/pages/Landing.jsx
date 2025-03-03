import { Footer } from "@/components/pages/Home/Footer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Clock, Copy, Globe, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <main className=" bg-landing_bg bg-[#0000009d] bg-blend-overlay pt-6">
      <section>
        <div className="2xl:!max-w-7xl mx-auto container space-y-5">
          <div className="border border-[#74C465] rounded-xl shadow-landing_header overflow-hidden">
            <div className="xs:!flex hidden items-center justify-between border-b border-[#74C465] bg-landing_header_top rounded-[12px_12px_0px_0px] p-3">
              <p className="text-2xs text-[#74C465]">
                <span className="text-2xs border border-[#74C465] p-1.5 text-white rounded-lg mr-2">
                  Academy
                </span>
                {"//  "} New Library Books
                <span className="text-[#222F5B] bg-[#74C465] p-1.5 rounded-lg ml-2 text-2xs">
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
                <p className="text-center flex-1 text-white text-2xl leading-none font-spaceGrotesk  ">
                  Mental Wealth <br />{" "}
                  <span className="font-bold">Academy</span>
                </p>
                <Button className="p-1 ml-auto bg-transparent text-[#74C465] border-none hover:shadow-none">
                  <Menu />
                </Button>
              </div>
            </div>
          </div>
          <div className="sm:!flex hidden items-center justify-end gap-3">
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
          </div>
        </div>
      </section>
      <section className="md:!pt-28 pt-10 pb-10">
        <div className="container">
          <h1 className="text-center font-bold text-[#DBE64C] text-[clamp(32px,4vw,62px)] font-spaceGrotesk">
            Warp Drive Into Next-Gen Digital Education
          </h1>
          <p className="text-center text-[clamp(16px,2vw,24px)] text-[#F6F8ED] font-spaceGrotesk">
            Lifetime Access To Classrooms, No More Subscriptions.
          </p>
          <div className="relative pt-10">
            <img
              src="/images/next_gen.png"
              alt="next genration"
              className="lg:!max-w-xl aspect-square lg:!-mb-[15%] sm:!-mb-[20%] -mb-[30%] mx-auto object-cover"
            />
            <div className="bg-next_gen rounded-[64px] sm:!py-14 p-5 sm:!px-10 bg-cover relative z-30">
              <h3 className="text-center text-white font-bold text-[clamp(24px,4vw,62px)] font-spaceGrotesk">
                Offering Next-Gen Access To...
              </h3>
              <p className="text-center text-[clamp(14px,2vw,24px)] text-white font-spaceGrotesk">
                Digital Classrooms, Spaces, POAPs, Resources/Tools{" "}
              </p>
              <div className="grid lg:!grid-cols-3 small_tablet:!grid-cols-2 grid-cols-1 gap-5 py-10">
                <div className="w-full rounded-[64px] relative overflow-hidden">
                  <img
                    src="/images/vector.png"
                    alt="certificate"
                    className="w-full h-full object-cover"
                  />

                  <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto absolute bottom-12 left-1/2 -translate-x-1/2">
                    <Button className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto py-2 text-[#F6F8ED] sm:!text-xl text-base font-bold">
                      Explore
                    </Button>
                  </div>
                </div>
                <div className="w-full rounded-[64px] relative overflow-hidden">
                  <img
                    src="/icons/vector2.svg"
                    alt="certificate"
                    className="w-full h-full object-cover"
                  />

                  <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto absolute bottom-12 left-1/2 -translate-x-1/2">
                    <Button className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto py-2 text-[#F6F8ED] sm:!text-xl text-base font-bold">
                      Mint
                    </Button>
                  </div>
                </div>
                <div className="w-full rounded-[64px] relative overflow-hidden">
                  <img
                    src="/icons/vector3.svg"
                    alt="certificate"
                    className="w-full h-full object-cover"
                  />

                  <div className="rounded-full bg-fancy_btn_outer border border-black p-1 max-w-40 w-full mx-auto absolute bottom-12 left-1/2 -translate-x-1/2">
                    <Button className="shadow-membership_card bg-fancy_btn  w-full justify-center rounded-full h-auto py-2 text-[#F6F8ED] sm:!text-xl text-base font-bold">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center sm:!justify-between justify-center sm:!mt-10 mt-5 flex-wrap">
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
          </div>
        </div>
      </section>
      <section className="py-10  relative">
        <div className="container">
          <div className="flex gap-10 2xl:!w-2/3 w-full small_tablet:!flex-row flex-col 2xl:!pb-0 md:!pb-40">
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
                  computational assistants designed to delve into the intricate
                  dynamics of science & educational reformation and deliver
                  advanced level pathways to knowledge and higher-learning.
                  Become a master at what you love and what interests you.
                  Legendary tech-stack harnesses the power of collective
                  intelligence, enabling analyzation and predictive learning
                  with unprecedented accuracy. Our knowledge consensus,
                  equalizing contribution towards a vast pool of knowledge that
                  transcends traditional boundaries. The New Digital World.{" "}
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
          <img
            src="/images/tooltip.png"
            alt="next genration"
            className="h-72 md:!absolute right-0 md:!-bottom-20 ml-auto"
          />
        </div>
      </section>
      <section className="pt-20 bg-[#0E0E0E]">
        <div className="container">
          <div className="grid md:!grid-cols-2 grid-cols-1 gap-5">
            <div className="space-y-3">
              <h4 className="text-[clamp(30px,4vw,48px)] font-bold text-white leading-none">
                Academy
              </h4>
              <p className="text-[clamp(24px,4vw,42px)] font-semibold text-[#B2B2B2] leading-tight">
                Lorem episom marikus bealo expersectie els insoas ta ldaoendo.
              </p>
              <p className="text-xl text-[#B2B2B2] leading-tight">
                Knowledge is power. Access the digital library chain in your
                private, secure library where devs can upload and share
                resources, repeat books, and lend and vote on changes.
              </p>
              <Button className="shadow-membership_card bg-fancy_btn max-w-32 w-full justify-center rounded-full h-auto py-3 text-[#F6F8ED] sm:!text-xl text-base font-bold border border-black">
                Explore
              </Button>
            </div>
            <div className="relative">
              <img
                src="/images/home.png"
                alt="home "
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-features bg-cover">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-5">
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
            <div className="rounded-3xl p-5 bg-[#F6F8ED]">
              <Carousel className="py-12">
                <CarouselContent>
                  {Array?.from({ length: 5 }, (_, i) => (
                    <CarouselItem key={i}>
                      <div className="space-y-3 max-w-xl mx-auto">
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
                        <p className="text-sm leading-normal tracking-wide">
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
                        <p className="text-sm leading-normal tracking-wide">
                          Tomatoes are the downvoting system token. These can be
                          purchased in packs. Throw them at articles you think
                          aren’t helpful, or just plain stupid! There’s a
                          special math! If an article receives a certain amount
                          of tomatoes to shards, it gets BOO’d off the platform!
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious className="left-0 shadow-carousel_btn border-none" /> */}
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
      <section className="py-20">
        <div className="container">
          <h3 className="font-bold text-white text-[clamp(30px,4vw,64px)]">
            Articles & Important Links
          </h3>
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
      </section>
      <Footer />
    </main>
  );
};
