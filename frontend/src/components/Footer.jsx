// components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-white shadow-top mt-12">
    <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Fundsharing | All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
