import { BrowserRouter } from "react-router-dom";
// import { ThemeToggler } from "./components/theme/themeToggler";
import { Toaster } from "@/components/ui/toaster";
import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import "./App.css";
import { config } from "./config";
import { ThemeProvider } from "./providers/themeProvider";
import ThemeRoutes from "./routes";
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <PrivyProvider
            appId="clxybg1dl054hoktgwt7ref80"
            config={{
              walletList: ["coinbase_wallet"],
              // Customize Privy's appearance in your app
              appearance: {
                theme: "light",
                accentColor: "#676FFF",
                logo: "https://i.imgur.com/hu1A85p.png",
              },
              // Create embedded wallets for users who don't have a wallet
              embeddedWallets: {
                createOnLogin: "users-without-wallets",
              },
              externalWallets: {
                coinbaseWallet: {
                  // Valid connection options include 'eoaOnly' (default), 'smartWalletOnly', or 'all'
                  connectionOptions: "all",
                },
              },
            }}
          >
            <BrowserRouter>
              <ThemeRoutes />
              <Toaster />
            </BrowserRouter>
          </PrivyProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
