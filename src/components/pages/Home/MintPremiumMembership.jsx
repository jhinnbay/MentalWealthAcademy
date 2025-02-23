import "./style.css";
import sparkles from "./icons/sparkles.svg";
import Rectangle1 from "./images/Rectangle1.png";
import Rectangle2 from "./images/Rectangle2.png";
import Rectangle3 from "./images/Rectangle3.png";

export const MintPremiumMembership = () => {
  return (
    <div className="MintPremiumMembership-container">
      <div className="MintPremiumMembership">
        <img className="sparkles" alt="sparkles" src={sparkles} />
        <div className="mint-premium">MINT PREMIUM MEMBERSHIP</div>
      </div>

      <div className="academy-pass">://ACADEMY PASS</div>

      <div className="MembershipCardPreview" >
        {/* Membership Card Preview */}
        <div className="rectangle-1">
          <img className="rectangle-1" alt="rectangle-1" src={Rectangle1} />
        </div>
        <div className="rectangle-2">
          <img className="rectangle-2" alt="rectangle-2" src={Rectangle2} />
        </div>
        <div className="rectangle-3">
          <img className="rectangle-3" alt="rectangle-3" src={Rectangle3} />
        </div>
      </div>
    </div>
  );
};