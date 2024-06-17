import { useState } from 'react';
import Balance from '../balance';

const buttonStyle = {
  // width: "100%"
}

const Dropdown = ({inputPlaceholder, buttonText, onButtonClick, balance}: {inputPlaceholder: any, buttonText: any, onButtonClick: any, balance: any}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button style={buttonStyle} onClick={toggleDropdown}>{buttonText}</button>
      {isOpen && (
        <div style={buttonStyle}>
          <input type="text" placeholder={inputPlaceholder} />
          <button onClick={onButtonClick}>Stake</button>
        </div>
      )}
      {balance}
    </div>
  );
};

export default Dropdown;
