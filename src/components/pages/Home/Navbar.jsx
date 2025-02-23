// fix spacing between menu2 and logo - seperate icons inside frames (have padding)
// fix weird gradient on navbar
// add flex box

import menu2 from "./icons/menu-2.svg";
import frame427319701 from "./icons/Group 183.svg";
import logo1 from "./icons/logo 1.svg";
import "./style.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="overallframe">
                <div className="frame-wrapper">
                    <div className="div">
                        <div className="div-wrapper">
                            <div className="frame-2">
                                <div className="frame-3">
                                    <div className="redlabel">
                                        <div className="text-wrapper">Academy</div>
                                    </div>

                                    <div className="text-wrapper-2">//</div>

                                    <div className="text-wrapper-2">New Library Books</div>

                                    <div className="redlabel-2">
                                        <div className="text-wrapper-3">EXPLORE NOW!</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="div-2">
                            <img className="img" alt="Frame" src={frame427319701} />

                            <img className="logo" alt="Logo" src={logo1} />

                            <img className="menu" alt="Logo" src={menu2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
