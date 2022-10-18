import { useCallback, useEffect } from "react";
import { appChain, getAddChainParameters } from "../../chains";
import { coinbaseWallet, hooks } from "../../connectors/coinbaseWallet";
import Image from "next/image";
import Coinbase from "../../images/coinbase.png";
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

export default function CoinbaseConnector() {
  const chainId = useChainId();

  const isActive = useIsActive();

  const chainParam = getAddChainParameters(appChain);

  const adjustChain = useCallback(async () => {
    // if we're already connected to the desired chain, return
    if (appChain === chainId) return;
    await coinbaseWallet.activate(chainParam);
  }, [chainId, chainParam]);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void coinbaseWallet.connectEagerly();
  }, []);

  return (
    <div className={Style.walletConnector} onClick={adjustChain}>
      <div className={Style.connectors}>
        <Image src={Coinbase} alt="WalletLogo" />
        <h2>{isActive ? "Activated" : "Coinbase"}</h2>
      </div>
    </div>
  );
}
