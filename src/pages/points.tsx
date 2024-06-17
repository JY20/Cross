import React from 'react';
import Menu from "@/components/menu";
import { useState } from 'react';

const Points = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Eth</button>
      {isOpen && (
        <div>
          <input type="text" placeholder="Amount" />
          <button>Stake</button>
        </div>
      )}
    </div>
  );
};

export default Points;
