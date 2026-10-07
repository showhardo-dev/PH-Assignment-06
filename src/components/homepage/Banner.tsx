import React from 'react';
import Image from 'next/image';
import banner from '@/assets/banner.png';

const Banner = () => {
  return (
    <div className="bg-[#15171D] text-white rounded-3xl mx-4 my-6 p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-yellow-300 font-semibold">WORKOUT LIBRARY</h2>

        <p className="text-4xl font-black mt-3">
          TRAIN WITH INTENT. LOG <br />
          EVERY SET.
        </p>

        <p className="text-gray-400 mt-4">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <button className="mt-6 px-6 py-3 rounded-full font-bold bg-yellow-300! text-black! hover:bg-yellow-200!">
          BROWSE WORKOUTS
        </button>
      </div>

      <div className="flex-1">
        <Image src={banner} alt="Banner" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  );
};

export default Banner;