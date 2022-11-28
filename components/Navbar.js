import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/test">
            <button className="btn-logo">FEED</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
