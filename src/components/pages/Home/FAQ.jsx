{/* FAQ card section */}

import "./style.css";

export const FAQ = () => {
    return (
        <div className="FAQCard"style={{ color: 'black' }}>
            <div className="FAQ-1">
                <p className="text-wrapper-8">What is Mental Wealth Academy?</p>
            </div>
            <div className="FAQ-2">
                <div className="text-wrapper-8">What Makes It Beneficial?</div>
            </div>
            <div className="FAQ-3">
                <p className="text-wrapper-8">How Can I Be A Part Of This?</p>
            </div>

            <div className="FAQ-links-wrapper">
                <div className="links">
                    Whitepaper
                    <br />
                    Discord
                    <br />
                    Contract
                </div>
            </div>
        </div>
    );
};


