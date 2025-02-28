import appletouch from "./images/apple-touch-icon.png";
import "./style.css";

export const EventCard = () => {
  return (
    <div className="EventCard">
      <div className="EventCard-text-wrapper">
        <h6 className="flex justify-center items-center text-black">
          ://UPCOMING EVENTS
        </h6>
      </div>
      <div className="EventCard-apple-touch">
        <img
          className="apple-touch-icon w-full"
          alt="apple-touch-icon"
          src={appletouch}
        />
      </div>
    </div>
  );
};
