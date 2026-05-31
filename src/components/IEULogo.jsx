import React from 'react';

export const IEULogo = ({ className }) => (
  <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet" className={className} xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
    <g fill="#FF5A00">
      {/* Abstract Diamond Symbol */}
      <g transform="translate(346, 20) scale(0.6)">
        <path d="M40 0 L100 60 L120 40 L60 -20 Z" />
        <path d="M20 20 L100 100 L120 80 L40 0 Z" />
        <path d="M0 40 L100 140 L120 120 L20 20 Z" />
        <circle cx="160" cy="70" r="20" />
      </g>
      {/* Text "ieu" */}
      <text x="400" y="220" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="120" textAnchor="middle" letterSpacing="-5">ieu</text>
      {/* Text "UNIVERSIDAD" */}
      <text x="400" y="270" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="32" textAnchor="middle" letterSpacing="4">UNIVERSIDAD</text>
    </g>
  </svg>
);
