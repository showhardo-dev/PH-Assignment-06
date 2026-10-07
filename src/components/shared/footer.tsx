import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0F1115] text-white border-t border-white/10 px-4 py-6 md:px-6">
      <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-black tracking-wide">FITLOG</span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-white/70">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
