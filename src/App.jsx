import { BrowserRouter } from "react-router-dom";
// import { ThemeToggler } from "./components/theme/themeToggler";
import { ThemeProvider } from "./providers/themeProvider";
import ThemeRoutes from "./routes";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <BrowserRouter>
        <ThemeRoutes />
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
