import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { TrezorWalletAdapter } from "@solana/wallet-adapter-wallets";
import type { PropsWithChildren } from "react";

const WALLETS = [new TrezorWalletAdapter()];

export function SolanaProvider({ children }: PropsWithChildren) {
  return (
    <ConnectionProvider
      endpoint="https://api.devnet.solana.com"
      // All transactions are already using 'confirmed' commitment level, so keep the consistency globally directly.
      config={{
        wsEndpoint: "wss://api.devnet.solana.com",
        commitment: "confirmed",
      }}
    >
      <WalletProvider wallets={WALLETS} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
