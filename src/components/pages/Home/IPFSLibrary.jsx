import "./style.css";
import Logo from "./images/Logo.png";
import MessageIncoming from "./images/MessageIncoming.png";

export const IPFSLibrary = () => {
  return (
    <div className="ipfs-library-container">
      {/* Header */}
      <div className="IPFS-library" style={{ color: 'black' }}>IPFS://LIBRARY</div>

      {/* Main Container */}
      <div className="HomeLibraryBento">
        {/* Message Section */}
        <div className="HomeLibraryBento-message">
          <div className="text-wrapper-5">MESSAGE</div>
          <div className="text-wrapper-5">INCOMING</div>
          <img className="img" alt="Message Icon" src={MessageIncoming} />
        </div>

        {/* Text Section */}
        <div className="HomeLibraryBento-wrapper">
          <p className="text-wrapper-6">LET’S CHECK OUT SOME BOOKS...</p>
        </div>

        {/* Button Section */}
        <div className="HomeLibraryBento-button" style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '38px', background:'#EBEBEB'}}>
          <div className="ENTER-THE-ACADEMY" style={{ color: 'black' }}>ENTER THE ACADEMY</div>
          <img className="img" alt="Logo" src={Logo} />
        </div>
      </div>
    </div>
  );
};