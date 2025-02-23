import "./style.css";
import heroImage from "./images/mwa-header.png"; // Import the image

export const Hero = () => {
  return (
    <div className="hero">
      <div className="frame">
        <div className="image-container">
          <img className="heroimage" alt="Hero Section" src={heroImage} />
        </div>
      </div>
    </div>
  );
};