import "./style.css";
import headerImage from "./images/mwa-header.png"; // Import the image

export const Header = () => {
  return (
    <div className="hero">
      <div className="frame">
        <div className="image-container">
          <img className="heroimage" alt="Header" src={headerImage} />
        </div>
      </div>
    </div>
  );
};