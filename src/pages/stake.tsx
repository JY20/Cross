import React from 'react';
import { StarknetProvider } from "@/components/starknet-provider";
import WalletBar from '@/components/WalletBar';
import Dropdown from '@/components/ui/dropdown';
import Select from '../components/select';
import Balance from '@/components/balance';

const chainStyle = {
  backgroundColor: "#7C7484",
  color: "white",
  borderRadius: "10px",
  textAlign: 'center' as const,
}

const tokenStyle = {
  color: "white",
  borderRadius: "25px",
  display: "flex",
  justifyContent: "space-evenly"
}

const tokenTypes = ["ETH", "USDC", "USDT"]

const Stake = () => {

  const options = [
    { label: 'Starknet', value: 'Starknet' },
    { label: 'zkSync', value: 'zkSync' },
  ];

  const handleSelect = (option: { label: string; value: string }) => {
    console.log('Selected:', option);
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <StarknetProvider>
        <WalletBar />
        <div className="container mx-auto py-8">
        </div>
      <div style={chainStyle}>
        <br/>
        <Select options={options} onSelect={handleSelect} />
        <br/>
        <br/>
        {tokenTypes.map((token, index) => (
          <div>
            <div key={index} style={tokenStyle}>
              <Dropdown buttonText={token} inputPlaceholder={0.017} onButtonClick={null} balance={<Balance tokenType={token.toLocaleLowerCase()}/>}/>
            </div>
            <br/>
          </div>
        ))}
      </div>
      </StarknetProvider>
    </main>
  );
};

export default Stake;
