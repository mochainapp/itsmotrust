import { URI_AVAILABLE } from "@web3-react/walletconnect";
import { useEffect, useCallback } from "react";
import { hooks, walletConnect } from "../../connectors/walletConnect";
import { appChain, getAddChainParameters } from "../../chains";
import Image from "next/image";
import WalletConnectSvg from "../../images/walletconnect.png";
import Style from "../../styles/Connectors.module.css";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function WalletConnectCard() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const chainParam = getAddChainParameters(appChain);

  // log URI when available
  useEffect(() => {
    walletConnect.events.on(URI_AVAILABLE, (uri: string) => {
      console.log(`uri: ${uri}`);
    });
  }, []);

  const adjustChain = useCallback(async () => {
    // if we're already connected to the desired chain, return
    if (appChain === chainId) return;
    await walletConnect.activate(appChain);
  }, [chainId]);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void walletConnect.connectEagerly();
  }, []);

  return (
    <div className={Style.walletConnector} onClick={adjustChain}>
      <div className={Style.connectors}>
        <Image src={WalletConnectSvg} alt="WalletLogo" />
        <h2>{isActive ? "Activated" : "WalletConnect"}</h2>
      </div>
    </div>
  );
}
