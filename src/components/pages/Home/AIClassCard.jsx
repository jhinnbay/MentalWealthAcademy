import "./style.css";
import sparkleswhite from "./icons/sparkles-white.svg";

export const AIClassCard = () => {
    return (
        <div className="AIClassCard">
            <div className="AIClassCard-wrapper">
                <div className="AIClassCard-text-wrapper">
                <h6 className="flex justify-center items-center text-black">AI CLASS SCHEDULER</h6>
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