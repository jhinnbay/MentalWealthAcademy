import { BrowserRouter } from "react-router-dom";
// import { ThemeToggler } from "./components/theme/themeToggler";
import { ThemeProvider } from "./providers/themeProvider";
import ThemeRoutes from "./routes";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";
import { config } from "./wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <BrowserRouter>
            <ThemeRoutes />
            <Toaster />
          </BrowserRouter>
        </WagmiProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
