import CryptoIcon from "./icons/CryptoIcon.svg";
import "./style.css";

export const SigninButton = () => {
  return (
    <div className=" small_tablet:!text-[#333] text-white text-sm font-bold inline-flex items-center justify-center gap-3 h-[47px] w-full px-5 py-2.5 small_tablet:rounded-[0_16px_16px_16px] rounded-b-2xl border-none small_tablet:bg-[#ececff] bg-[#797EED]">
      {" "}
      {/* SigninButton */}
      <img className="crypto-icon" alt="crypto-icon" src={CryptoIcon} />
      <div className="text-wrapper-7">Sign in with Ethereum</div>
    </div>
  );
};
