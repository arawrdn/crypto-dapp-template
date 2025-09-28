import { CoreClient, AppKit } from "@reown/appkit";
import { ethers } from "ethers";

export const initializeReown = async () => {
  const projectId = "180a7164cfa9e5388daf1160841f65a0";
  await CoreClient.initialize({ projectId });

  await AppKit.initialize({
    init: CoreClient,
    onSuccess: () => console.log("Reown AppKit initialized"),
    onError: (err) => console.error(err)
  });
};

export const connectWallet = async () => {
  try {
    const session = await AppKit.Modal.open();
    console.log("Wallet connected:", session);
    return session;
  } catch (err) {
    console.error("Failed to connect wallet", err);
    return null;
  }
};
