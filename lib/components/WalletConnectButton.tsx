import React, { useState } from "react";
import { connectWallet } from "../lib/reownClient";

const WalletConnectButton = () => {
  const [connected, setConnected] = useState(false);

  const handleConnect = async () => {
    const session = await connectWallet();
    if (session) setConnected(true);
  };

  return (
    <button
      onClick={handleConnect}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      {connected ? "Wallet Connected ✅" : "Connect Wallet"}
    </button>
  );
};

export default WalletConnectButton;
