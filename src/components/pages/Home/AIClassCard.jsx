import sparkleswhite from "./icons/sparkles-white.svg";
import "./style.css";

export const AIClassCard = () => {
  return (
    <div className="AIClassCard">
      <div className="AIClassCard-wrapper">
        <div className="AIClassCard-text-wrapper">
          <h6 className="flex justify-center items-center text-black">
            AI CLASS SCHEDULER
          </h6>
        </div>
      </div>
      <div className="AIClassCard-inner ">
        <div className="bg-class_scheduler w-full bg-cover bg-center rounded-[24px_8px_24px_8px] py-3 px-4">
          <div className="flex items-center justify-between mb-4">
            <p className=" text-xs text-white  font-spaceGrotesk uppercase">
              message
            </p>
            <p className=" text-xs text-white  font-spaceGrotesk uppercase">
              INCOMING
            </p>
          </div>
          <div className="flex border-white mt-2 border-solid border rounded-sm">
            <div className="animate-progress h-2 rounded-lg bg-white "></div>
          </div>
        </div>
        <p className="my-2 text-xs text-white text-left font-spaceGrotesk uppercase w-full">
          Show me
        </p>
        <button className="AIClassCard-button bg-generate_btn border border-gray-300 ">
          <div className="AIClassCard-text-wrapper2 ">GENERATE!</div>
          <img
            className="sparkles-white"
            alt="sparkles-white-icon"
            src={sparkleswhite}
          />
        </button>
      </div>
    </div>
  );
};
