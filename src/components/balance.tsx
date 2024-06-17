import { useAccount, useBalance, useContractRead } from "@starknet-react/core";
import { MouseEventHandler } from "react";
import contactAdrr from '../data/contactAddr.json';
import { json } from "starknet";


const Balance = ({tokenType}: {tokenType: string}) => {
  const { address } = useAccount();
  const token = contactAdrr[tokenType as keyof typeof contactAdrr]["address"];
  console.log(token);
  const { data, isLoading, error, refetch } = useBalance({
    token, 
    address
  });

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {JSON.stringify(error)}</span>;

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    await refetch();
  };

  return (
    <div>
      <p>Balance:</p>
      <p>{data?.formatted}</p>
      <p><button onClick={handleClick}>Refresh Balance</button></p>
      <hr/>
    </div>
  );
}

export default Balance;
