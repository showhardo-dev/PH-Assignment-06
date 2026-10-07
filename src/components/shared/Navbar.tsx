"use client";
import React, { useContext } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { workoutContext } from '@/context/WorkoutContext';

const Navbar = () => {
  const context = useContext(workoutContext) ?? { plan: [], save: [] };
  const { plan, save } = context;
  return (
     <div className="navbar sticky top-0 z-50 bg-[#0F1115] text-white border-b border-white/10 px-4 lg:px-8">
      <div className="navbar-start gap-2">
        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-box border border-white/10 bg-[#13161d] p-2 text-gray-300 shadow-lg"
          >
            <li><Link href="/workouts">workouts</Link></li>
            <li><Link href="/My-Plan">My Plan</Link></li>
          </ul>
        </div>

        <Image src={logo} alt="Logo" width={40} height={40} className="rounded-lg" />
        <a className="text-xl font-black tracking-wide">
          FITLOG
        </a>
      </div>

      {/* Desktop links */}
      <div className="navbar-center hidden lg:flex gap-8 text-gray-400">
        <Link className="hover:text-white transition" href="/workouts">
          workouts
        </Link>
        <Link className="hover:text-white transition" href="/My-Plan">
          My Plan
        </Link>
      </div>

      <div className="navbar-end gap-3">
        <button className="btn btn-sm sm:btn-md rounded-full bg-transparent text-white border border-white/30 hover:bg-white/10">
          Plan ({plan.length})
        </button>
        <button className="btn btn-sm sm:btn-md rounded-full bg-transparent text-white border border-white/30 hover:bg-white/10">
          Saved ({save.length})
        </button>
      </div>
    </div>
  );
};

export default Navbar;