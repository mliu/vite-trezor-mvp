import { useWallet } from "@solana/wallet-adapter-react";
import type { ReactElement } from "react";

export function ConnectWalletSolana(): ReactElement {
  const { publicKey, connected, wallets, select, disconnect } = useWallet();

  return (
    <>
      Connected with {connected ? publicKey?.toBase58() : "No wallet"}
      {wallets
        .filter(
          (wallet) =>
            wallet.readyState === "Installed" ||
            wallet.readyState === "Loadable"
        )
        .map((wallet, index) => (
          <div key={index}>
            <button
              onClick={() => {
                select(wallet.adapter.name);
              }}
            >
              Connect with {wallet.adapter.name}
            </button>
          </div>
        ))}
      {connected && <button onClick={() => disconnect()}>Disconnect</button>}
    </>
  );
}
