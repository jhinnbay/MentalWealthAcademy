import { AIClassCard } from "@/components/pages/Home/AIClassCard";
import { DiscordCard } from "@/components/pages/Home/DiscordCard";
import { EventCard } from "@/components/pages/Home/EventCard";
import { Footer } from "@/components/pages/Home/Footer";
import { Header } from "@/components/pages/Home/Header";
import { MintPremiumMembership } from "@/components/pages/Home/MintPremiumMembership";
import { MoreOptionsButton } from "@/components/pages/Home/MoreOptionsButton";
import { NewIPFSLibrary } from "@/components/pages/Home/newIPFSLibrary";
import { ScrollTextWrapper } from "@/components/pages/Home/ScrollTextWrapper";
import { Sidebar } from "@/components/pages/Home/Sidebar";
import { SigninButton } from "@/components/pages/Home/SigninButton";

import "@/components/pages/Home/styles/App.css";

const App = () => {
  return (
    <div className="bento-website bg-home_banner">
      {/* Header */}
      <header className="pt-4">
        <div className="container">
          <Header />
        </div>{" "}
      </header>

      <ScrollTextWrapper />

      {/* Main Content */}
      <section className="py-5">
        <div className="container  lg:max-w-6xl small_tablet:max-w-3xl">
          <div className="main-content lg:!flex-row flex-col">
            {/* Column A (1/3 width) */}
            <div className="column-a">
              <div className="top-half">
                {/* Card 1 */}
                <div className="card card-1">
                  <NewIPFSLibrary />
                </div>

                {/* Button 1 */}
                <button className="card button-1">
                  <SigninButton />
                </button>

                {/* Button 2 */}
                <div className="card button-2 small_tablet:block hidden">
                  <MoreOptionsButton />
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1 small_tablet:block hidden">
                <MintPremiumMembership />
              </div>
            </div>

            {/* Column B (2/3 width) */}
            <div className="column-b">
              {/* Discord Card (1/3 of B height) */}
              <div className="discord-card-container">
                <div className="card discord-card">
                  <DiscordCard />
                </div>
              </div>
              <div className="flex-1 small_tablet:hidden block">
                <MintPremiumMembership />
              </div>
              <div className="card button-2 small_tablet:hidden block">
                <MoreOptionsButton />
              </div>

              {/* Nested Columns C and D (2/3 of B height) */}
              <div className="nested-columns">
                {/* Column C (1/3 of B width) */}
                <div className="column-c">
                  <div className="card upcoming-event-card">
                    <EventCard />
                  </div>
                </div>

                {/* Column D (2/3 of B width) */}
                <div className="column-d">
                  <div className="card ai-scheduler-card">
                    <AIClassCard />
                  </div>
                  <div className="card faq-card">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
