"use client";

import { workoutContext } from '@/context/WorkoutContext';
import React, { useContext, useState } from 'react';
import { Iworkout } from '@/types/workout.type';
import MyPlanCard from '@/components/shared/MyPlanCard';
import Link from 'next/link';

const Page = () => {
  const { plan , save } = useContext(workoutContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortOption, setSortOption] = useState<"duration" | "calories" | "rating">("duration");

  const sortedWorkouts = (workouts: Iworkout[]) => {
    return [...workouts].sort((a, b) => {
      if (sortOption === "duration") {
        return b.duration - a.duration;
      } else if (sortOption === "calories") {
        return b.caloriesBurned - a.caloriesBurned;
      } else if (sortOption === "rating") {
        return b.rating - a.rating; // Sort by rating in descending order
      }
      return 0;
    });
  };

  const currentList: Iworkout[] = activeTab === "today" ? sortedWorkouts(plan) : sortedWorkouts(save);

  return (
    <div className="container mx-auto flex flex-col items-center py-10 px-4">

      <div>
        <h2 className="text-2xl font-bold mb-2 text-center">My Plan</h2>
        <p className="text-center text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="flex justify-center w-full m-4 p-2 rounded-lg">
        <div className="p-5 stats stats-vertical lg:stats-horizontal border-2">

          <div className="stat">
            <div className="stat-title text-white">Exercises</div>
            <div className="stat-value">
              {currentList.length}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-white">Minutes</div>
            <div className="stat-value">
              {currentList.reduce(
                (total: number, workout: Iworkout) => total + workout.duration,
                0
              )}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title text-white">Calories</div>
            <div className="stat-value">
              {currentList.reduce(
                (total: number, workout: Iworkout) => total + workout.caloriesBurned,
                0
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Sort By */}
      <div className="flex justify-end items-center w-full mb-4 p-2 rounded-lg">
        <div className="mr-3 text-gray-400 font-semibold">
          Sort By:
        </div>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as "duration" | "calories" | "rating")}
          className="py-1 px-2 rounded-2xl bg-[#13161d]"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="w-full">
        {/* Tab buttons */}
        <div className="flex w-full gap-2 rounded-full bg-[#13161d] p-1">
          {[
            { key: "today", label: "Today's Plan" },
            { key: "saved", label: "Saved" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key as "today" | "saved")}
              className={`flex-1 rounded-full px-4 py-2 font-semibold transition ${
                activeTab === tab.key
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Single panel */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentList.length > 0 ? (
            currentList.map((workout: Iworkout) => (
              <MyPlanCard
                key={workout.id}
                workout={workout}
                list={activeTab === "today" ? "plan" : "save"}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center rounded-lg bg-[#13161d] p-10">
              <p className="text-center text-gray-500">NOTHING HERE YET</p>
              <h3 className="my-4 text-center text-gray-500">
                Browse the library and add a lift to get today moving.
              </h3>
              <Link
                href="/workouts"
                className="inline-block rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
              >
                Browse workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;