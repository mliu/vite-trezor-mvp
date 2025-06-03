import { useWallet } from "@solana/wallet-adapter-react";
import type { ReactElement } from "react";

export function ConnectWalletSolana(): ReactElement {
  const { publicKey, wallets, select } = useWallet();

  return (
    <>
      Connected with {publicKey?.toBase58()}
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
              {wallet.adapter.name}
            </button>
          </div>
        ))}
    </>
  );
}
