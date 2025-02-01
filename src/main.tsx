import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import { ThemeProvider } from "./components/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);
