// WalletBar.js
import { useMemo } from "react";
import { useAccount, useConnect, useDisconnect, useBalance } from "@starknet-react/core";
import Link from 'next/link';
import Button from '@mui/material/Button';
import Balance from "./balance"

const NavbarStyle = {
  backgroundColor: "#4B4453",
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "right",
  borderRadius: "10px",
};

const NavLinkStyle = {
  color: "white",
  textDecoration: "none",
  marginRight: "20px"
};

function WalletConnected() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data, isLoading, error, refetch } = useBalance({
    address
  });

  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);


  return (
    <div style={NavbarStyle}>
      <Link href="/stake">
        <text style={NavLinkStyle}>Stake</text>
      </Link>
      <Link href="/points">
        <text style={NavLinkStyle}>Points</text>
      </Link>
      <button onClick={() => disconnect()}>
        <span>{shortenedAddress} </span>
        <span>Disconnect</span>
      </button>
    </div>
  );
}

function ConnectWallet() {
  const { connectors, connect } = useConnect();

  return (
    <div style={NavbarStyle}>
      {connectors.map((connector) => (
        <div key={connector.id}>
          <Link href="/stake" style={NavLinkStyle}>
            <text>Stake</text>
          </Link>
          <Link href="/points" style={NavLinkStyle}>
            <text>Points</text>
          </Link>
          <button
            onClick={() => connect({ connector })}
          >
            {connector.id}
          </button>
        </div>
      ))}
    </div>
  );
}

export default function WalletBar() {
  const { address } = useAccount();

  return address ? <WalletConnected /> : <ConnectWallet />;
}
