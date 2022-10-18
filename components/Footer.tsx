import React from "react";
import Style from "../styles/Footer.module.css";
import Image from "next/future/image";
import Logo from "../images/logo.png";

function Footer() {
  return (
    <div>
      <div className={Style.footer}>
        <div className={Style.widget_one}>
          <Image src={Logo} alt="Logo" />
          <p>
            A group of services under MoEscrow are deployed in various chains to
            facilitate secure transactions between buyers and sellers. Use MO
            Chain, Binance Smart Chain, Avalanche, Polygon, Fantom, and
            Gatechain to conduct safe transactions.
          </p>
        </div>
        <div className={Style.widget}>
          <ul>
            <li>
              <a href="https://motrust.app">MoTrust</a>
            </li>
            <li>
              <a href="https://bsctrust.app">BSCTrust</a>
            </li>
            <li>
              <a href="https://matictrust.app">MaticTrust</a>
            </li>
            <li>
              <a href="https://avaxtrust.app">AvaxTrust</a>
            </li>
            <li>
              <a href="https://ftmtrust.app">FTMTrust </a>
            </li>
            <li>
              <a href="https://gatetrust.app">GateTrust</a>
            </li>
          </ul>
        </div>
        <div className={Style.widget}>
          <ul>
            <li>
              <a href="https://mobridge.app">MoBridge</a>
            </li>
            <li>
              <a href="https://dappsy.io">Dappsy</a>
            </li>
            <li>
              <a href="https://modao.app">MoDao</a>
            </li>
            <li>
              <a href="https://moswap.app">MoSwap</a>
            </li>
            <li>
              <a href="https://mowallet.app">MoWallet </a>
            </li>
            <li>
              <a href="https://moexchange.app">MoExchange</a>
            </li>
          </ul>
        </div>
        <div className={Style.widget}>
          <ul>
            <li>
              <a href="https://mochain.app">MoTrust</a>
            </li>
            <li>
              <a href="https://modocs.app">MoDocs</a>
            </li>
            <li>
              <a href="https://moscan.app">MoScan</a>
            </li>
            <li>
              <a href="https://motestnet.app">MoTestnet</a>
            </li>
            <li>
              <a href="https://mostatus.app">MoStatus</a>
            </li>
            <li>
              <a href="https://mosupport.app">MoSupport</a>
            </li>
            <li>
              <a href="https://mofaucet.app">MoFaucet</a>
            </li>
          </ul>
        </div>
      </div>

      <footer className={Style.footer_text}>
        <p>All Right Reserved By MOTrust © 2022</p>
      </footer>
    </div>
  );
}

export default Footer;
