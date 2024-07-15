import { Sidebar } from "@/components/pages/Home/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const marqueeList = [
  {
    id: "1",
    text: "Discover a revolutionary platform where learning meets blockchain technology. Mental Wealth Academy is a decentralized library and marketplace that puts the power of knowledge directly in your hands.",
  },
  {
    id: "2",
    text: "Welcome to Mental Wealth Academy: Your Gateway to Knowledge and Empowerment",
  },
];

export default function Home() {
  return (
    <main className="2xl:flex items-start p-2 relative gap-3">
      <div className="flex-grow mb-2 2xl:mb-0 flex flex-col 2xl:sticky 2xl:top-[8px] 2xl:h-[calc(100vh-16px)] border border-solid border-black rounded-lg overflow-hidden">
        <header className="bg-[#4c4c8d] px-6 ">
          <div className=" py-6  border-b-2 border-white">
            <img src="/icons/landing_logo.svg" />
          </div>
        </header>
        <div className="flex relative justify-between  bg-[#4c4c8d]  ">
          <div className="p-6 flex-shrink-0 w-[80%]">
            <svg viewBox="0 0 591 336" fill="none" className=" w-full">
              <path
                d="M8.448 100V10.4H39.808L55.296 88.48H57.6L73.088 10.4H104.448V100H88.064V22.816H85.76L70.4 100H42.496L27.136 22.816H24.832V100H8.448ZM121.323 100V10.4H178.923V25.76H138.219V47.136H175.339V62.496H138.219V84.64H179.691V100H121.323ZM192.198 100V10.4H224.326L242.118 88.48H244.422V10.4H261.062V100H228.934L211.142 21.92H208.838V100H192.198ZM298.684 100V25.76H272.572V10.4H341.692V25.76H315.58V100H298.684ZM338.804 100L362.356 10.4H391.796L415.348 100H397.94L393.076 80.288H361.076L356.212 100H338.804ZM365.044 64.672H389.108L378.228 21.024H375.924L365.044 64.672ZM426.073 100V10.4H442.969V84.64H483.929V100H426.073Z"
                fill="#A59EC0"
              ></path>
              <path
                d="M15.616 212L3.84 122.4H20.608L29.312 200.224H31.616L42.88 122.4H72.064L83.328 200.224H85.632L94.336 122.4H111.104L99.328 212H70.144L58.624 132.384H56.32L44.8 212H15.616ZM123.448 212V122.4H181.048V137.76H140.344V159.136H177.464V174.496H140.344V196.64H181.816V212H123.448ZM188.179 212L211.731 122.4H241.171L264.723 212H247.315L242.451 192.288H210.451L205.587 212H188.179ZM214.419 176.672H238.483L227.603 133.024H225.299L214.419 176.672ZM275.448 212V122.4H292.344V196.64H333.304V212H275.448ZM353.309 212V137.76H327.197V122.4H396.317V137.76H370.205V212H353.309ZM407.823 212V122.4H424.719V159.392H457.999V122.4H474.895V212H457.999V174.752H424.719V212H407.823Z"
                fill="#B0A170"
              ></path>
              <path
                d="M2.304 324L25.856 234.4H55.296L78.848 324H61.44L56.576 304.288H24.576L19.712 324H2.304ZM28.544 288.672H52.608L41.728 245.024H39.424L28.544 288.672ZM122.871 325.792C111.778 325.792 102.988 322.72 96.503 316.576C90.0177 310.347 86.775 301.472 86.775 289.952V268.448C86.775 256.928 90.0177 248.096 96.503 241.952C102.988 235.723 111.778 232.608 122.871 232.608C133.879 232.608 142.37 235.637 148.343 241.696C154.402 247.669 157.431 255.904 157.431 266.4V267.168H140.791V265.888C140.791 260.597 139.298 256.245 136.311 252.832C133.41 249.419 128.93 247.712 122.871 247.712C116.898 247.712 112.204 249.547 108.791 253.216C105.378 256.885 103.671 261.877 103.671 268.192V290.208C103.671 296.437 105.378 301.429 108.791 305.184C112.204 308.853 116.898 310.688 122.871 310.688C128.93 310.688 133.41 308.981 136.311 305.568C139.298 302.069 140.791 297.717 140.791 292.512V290.208H157.431V292C157.431 302.496 154.402 310.773 148.343 316.832C142.37 322.805 133.879 325.792 122.871 325.792ZM164.054 324L187.606 234.4H217.046L240.598 324H223.19L218.326 304.288H186.326L181.462 324H164.054ZM190.294 288.672H214.358L203.478 245.024H201.174L190.294 288.672ZM248.763 324V309.152H260.539V249.248H248.763V234.4H285.627C297.659 234.4 306.79 237.472 313.019 243.616C319.334 249.675 322.491 258.72 322.491 270.752V287.648C322.491 299.68 319.334 308.768 313.019 314.912C306.79 320.971 297.659 324 285.627 324H248.763ZM277.435 308.64H285.883C292.71 308.64 297.702 306.848 300.859 303.264C304.016 299.68 305.595 294.645 305.595 288.16V270.24C305.595 263.669 304.016 258.635 300.859 255.136C297.702 251.552 292.71 249.76 285.883 249.76H277.435V308.64ZM336.573 324V234.4H394.173V249.76H353.469V271.136H390.589V286.496H353.469V308.64H394.941V324H336.573ZM407.448 324V234.4H438.808L454.296 312.48H456.6L472.088 234.4H503.448V324H487.064V246.816H484.76L469.4 324H441.496L426.136 246.816H423.832V324H407.448ZM543.363 324V293.152L512.899 234.4H531.715L550.659 272.8H552.963L571.907 234.4H590.723L560.259 293.152V324H543.363Z"
                fill="#121267"
              ></path>
            </svg>
          </div>
          <div className=" absolute block 2xl:hidden bottom-0 right-0">
            <img
              src="/images/bunnyBot.png"
              className="absolute min-w-[350px] w-[350px] aspect-square bottom-0 right-0"
              style={{
                filter: "drop-shadow(rgba(0, 0, 0, 0.25) -64px 0px 0px)",
              }}
            />
            {/* <img
              src="/images/landingTooltip.png"
              className="absolute  w-[150px] top-[50%] hidden md:block"
            /> */}
          </div>
        </div>
        <div className="flex overflow-hidden w-full bg-[#2BD178] border-y border-y-[#1a213d]">
          <div className="animate-marquee-left flex hover:paused">
            {marqueeList?.map((data, i) => (
              <div
                key={data?.id + data?.text + i}
                className="flex-shrink-0 text-nowrap px-2 py-3"
              >
                {data?.text}
              </div>
            ))}
          </div>
        </div>
        <div className="flex  2xl:mt-auto">
          <div className=" 2xl:w-[50%]  p-6">
            <p className="mb-3 text-lg">
              A digital library built on the Ethereum blockchain, to preserve
              the rich writings and history of humanity. The Future is ours.
            </p>
            <div className="flex flex-col 2xl:!flex-row gap-2">
              <Input
                className="bg-[#DCDBE4] rounded-lg p-3 h-full border border-solid border-[#71a9fd]"
                placeholder="YOUR EMAIL ADDRESS"
              />
              <Button
                className=" bg-[#71a9fd] border p-3 border-solid border-[#71a9fd] rounded-lg text-white"
                disabled
              >
                GET UPDATES
              </Button>
            </div>
          </div>
          <div className="w-[50%]  2xl:block hidden">
            <img
              src="/images/bunnyBot.png"
              className="absolute w-[550px]  aspect-square bottom-0"
              style={{
                filter: "drop-shadow(rgba(0, 0, 0, 0.25) -64px 0px 0px)",
              }}
            />
            {/* <img src="/images/landingTooltip.png" className="absolute  ml-16" /> */}
          </div>
        </div>
      </div>
      <div className="2xl:max-w-[400px] w-full">
        <Sidebar />
      </div>
    </main>
  );
}
