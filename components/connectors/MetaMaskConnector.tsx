import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { appChain, getAddChainParameters } from "../../chains";
import { hooks, metaMask } from "../../connectors/metaMask";
import Image from "next/image";
import metamask from "../../images/metamask.png";
import Style from "../../styles/Connectors.module.css";

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function MetaMaskCard() {
  const router = useRouter();
  const chainId = useChainId();
  const error = useError();

  const isActive = useIsActive();

  const chainParam = getAddChainParameters(appChain);

  const adjustChain = useCallback(async () => {
    // if we're already connected to the desired chain, return
    if (appChain === chainId) return;
    await metaMask.activate(chainParam);
  }, [chainId, chainParam]);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly();
  }, []);

  useEffect(() => {
    if (error && !window.ethereum) {
      router.push("https://metamask.io");
    }
  }, [error, router]);

  return (
    <div className={Style.walletConnector} onClick={adjustChain}>
      <div className={Style.connectors}>
        <Image src={metamask} alt="WalletLogo" />
        <h2>{isActive ? "Activated" : "Metamask"}</h2>
      </div>
    </div>
  );
}
