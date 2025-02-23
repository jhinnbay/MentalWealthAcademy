import "./style.css";
import heroImage from "./images/hero.png"; // Assuming you have an image named hero.png in the same directory

export const Hero = () => {
    return (
        <div className="hero">
            <div className="frame">
                <div className="div">
                    <img className="heroimage" alt="Hero Section" src={heroImage} />
                </div>
            </div>
        </div>
    );
};
