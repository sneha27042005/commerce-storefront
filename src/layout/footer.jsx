import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'; // Make sure you install lucide-react

const Footer = () => {
  return (
    <footer className="bg-[#4e342e] text-white border-t border-neutral-600/30 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        
        <div className="text-center md:text-left">
          <p className="font-semibold">&copy; {new Date().getFullYear()} Zelion Store</p>
          <p>All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
          <Link to="/signin" className="hover:underline">Sign In</Link>
        </div>

        <div className="flex gap-4 items-center">
          <a href="mailto:support@zelionstore.com" className="hover:text-yellow-200" title="Email us">
            <Mail size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
