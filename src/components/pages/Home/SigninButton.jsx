import "./style.css";
import CryptoIcon from "./icons/CryptoIcon.svg";

export const SigninButton = () => {
    return (
      <div className="SigninButton"> {/* SigninButton */}
      <img className="crypto-icon" alt="crypto-icon" src= {CryptoIcon} />
      <div className="text-wrapper-7">Sign in with Ethereum</div>
      </div>
    )
}