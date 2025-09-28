import React, { useEffect } from "react";
import WalletConnectButton from "../components/WalletConnectButton";
import { initializeReown } from "../lib/reownClient";

const Home = () => {
  useEffect(() => {
    initializeReown();
  }, []);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Crypto DApp Template</h1>
      <p>Integrasi WalletConnect + Reown AppKit</p>
      <WalletConnectButton />
    </div>
  );
};

export default Home;
