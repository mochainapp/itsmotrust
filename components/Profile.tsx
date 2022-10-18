import { useContext } from "react";
import { EscrowContext } from "../contexts/EscrowContext";
import Image from "next/image";
import { collapseAddress } from "./CopyAbleAddress";
import { useBalanceQuery } from "../lib/queries";
import { ethers } from "ethers";
import Avater from "../images/logo.png";

export const Profile = ({ logOut }: any) => {
  const { signerAddress, ensAvatar, ensName, symbol } =
    useContext(EscrowContext);
  const { data: balance, isLoading: balanceLoading } = useBalanceQuery();

  return (
    <div className="d-flex profile_custom_css justify-content-center align-items-center profile-nav">
      <div className="d-flex float-end profile">
        <Image
          src={Avater}
          alt={ensName ?? signerAddress}
          width={60}
          height={60}
          layout="fixed"
        />
        <div className="ml-2 profile-meta">
          <div>
            <h6>{ensName ?? collapseAddress(signerAddress ?? "")}</h6>
            <p>
              <span className="balance">
                {balance ? ethers.utils.formatEther(balance) : 0}
              </span>{" "}
              {symbol}
            </p>
          </div>
          <span
            className="sign-out"
            onClick={() => (confirm("Are You Sure?") ? logOut() : null)}
          >
            Sign Out
          </span>
        </div>
      </div>
    </div>
  );
};
