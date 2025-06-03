import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SolanaProvider } from "./SolanaProvider.tsx";
import { ConnectWalletSolana } from "./ConnectWallet.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SolanaProvider>
      <ConnectWalletSolana />
    </SolanaProvider>
  </StrictMode>
);
