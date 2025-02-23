import { Hero } from "@/components/pages/Home/Hero";
import { MintPremiumMembership } from "@/components/pages/Home/MintPremiumMembership";
import { ScrollTextWrapper } from "@/components/pages/Home/ScrollTextWrapper";
import { IPFSLibrary } from "@/components/pages/Home/IPFSLibrary";
import { DiscordCard } from "@/components/pages/Home/DiscordCard";
import { EventCard } from "@/components/pages/Home/EventCard";
import { AIClassCard } from "@/components/pages/Home/AIClassCard";
import { SigninButton } from "@/components/pages/Home/SigninButton";
import { MoreOptionsButton } from "@/components/pages/Home/MoreOptionsButton";

import { ChatBox } from "@/components/pages/Home/newIPFSLibrary";
import { Sidebar } from "@/components/pages/Home/Sidebar";

import './App.css';

const App = () => {
  return (
    <div className="bento-website">
      {/* Header */}
      <header className="header">
        <Hero/>
      </header>

      <ScrollTextWrapper/>

      {/* Main Content */}
      <div className="main-content">
        {/* Column A (1/3 width) */}
        <div className="column-a">
          <div className="top-half">
            {/* Card 1 */}
            <div className="card card-1">
              <ChatBox />
            </div>

            {/* Button 1 */}
            <button className="card button-1">
              <SigninButton />
            </button>

            {/* Button 2 */}
            <button className="card button-2">
              <MoreOptionsButton />
            </button>
          </div>
          
          {/* Card 2 */}
          <div className="card card-2">
            <MintPremiumMembership />
          </div>
        </div>

        {/* Column B (2/3 width) */}
        <div className="column-b">
          {/* Discord Card (1/3 of B height) */}
          <div className="discord-card-container">
            <div className="card discord-card"><DiscordCard /></div>
          </div>

          {/* Nested Columns C and D (2/3 of B height) */}
          <div className="nested-columns">
            {/* Column C (1/3 of B width) */}
            <div className="column-c">
              <div className="card upcoming-event-card"><EventCard /></div>
            </div>

            {/* Column D (2/3 of B width) */}
            <div className="column-d">
              <div className="card ai-scheduler-card"><AIClassCard /></div>
              <div className="card faq-card"><Sidebar />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>footer</p>
      </footer>
    </div>
  );
};

export default App;