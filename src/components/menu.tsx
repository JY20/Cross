import React from 'react';
import Link from 'next/link';
import WalletBar from './WalletBar';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/stake">
            Stake
          </Link>
        </li>
        <li>
          <Link href="/points">
            Points
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          margin: 20px;
        }
        ul {
          list-style: none;
          padding: 0;
          display: flex;
          gap: 20px;
        }
        li {
          margin: 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </nav>
  );
};

export default Menu;
