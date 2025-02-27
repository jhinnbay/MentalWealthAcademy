import sparkleswhite from "./icons/sparkles-white.svg";
import "./style.css";

export const DiscordCard = () => {
  return (
    <div className="DiscordCard">
      <div className="DiscordCard-wrapper">
        <h6 className="flex justify-center items-center text-black">
          ://JOIN OUR DISCORD
        </h6>
      </div>
      <button className="DiscordCard-bckg">
        <div className="DiscordCard-button">
          {" "}
          {/* JOIN THE DISCORD */}
          <div className="DiscordCard-text-wrapper2">JOIN THE DISCORD</div>
          <img
            className="sparkles-white"
            alt="sparkles-white"
            src={sparkleswhite}
          />
        </div>
      </button>
    </div>
  );
};
