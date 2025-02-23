import appletouch from "./images/apple-touch-icon.png";
import "./style.css";

export const EventCard = () => {
    return (
        <div className="EventCard">
            <div className="EventCard-text-wrapper">
                <p style={{ color: 'black' }}>://UPCOMING EVENTS</p>
            </div>
            <div className="EventCard-apple-touch">
                <img className="apple-touch-icon" alt="apple-touch-icon" src={appletouch} />
            </div>   
        </div>
    )
}