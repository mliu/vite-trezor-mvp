# Vite + Trezor Connection Issue Reproduction

```
WalletConfigError: Cannot read properties of undefined (reading 'init')
    at t4.connect (index-LK-qRteD.js:207:21239)
    at async index-LK-qRteD.js:207:7187
    at async index-LK-qRteD.js:207:4699
```

This is a minimal reproducible example to reproduce an error where Trezor's adapter implementation in `@solana/wallet-adapter-react` doesn't work in Vite builds due to `@trezor/connect-web` import issues.

Steps to run

1. `pnpm install`
2. `pnpm build`
3. `pnpm preview`
4. Open up `localhost:4173` and click on "Connect with Trezor" to see the error in console
