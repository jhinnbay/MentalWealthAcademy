import "./style.css";
import sparkleswhite from "./icons/sparkles-white.svg";

export const AIClassCard = () => {
    return (
        <div className="AIClassCard">
            <div className="AIClassCard-wrapper">
                <div className="AIClassCard-text-wrapper">
                    <p style={{ color: 'black' }}>AI CLASS SCHEDULER</p>
                </div>
            </div>
            <div className="AIClassCard-inner">
                <div className="AIClassCard-button"> {/* JOIN THE DISCORD */}
                <div className="AIClassCard-text-wrapper2">GENERATE!</div>
                <img className="sparkles-white" alt="sparkles-white-icon" src= {sparkleswhite} />
            </div>
            </div>
        </div>
    )
}