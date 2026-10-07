"use client";
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Iworkout } from '@/types/workout.type';
import { toast } from "react-toastify";
import { workoutContext } from '@/context/WorkoutContext';

const difficultyColor = {
  Beginner: 'bg-green-400 text-black',
  Intermediate: 'bg-yellow-300 text-black',
  Advanced: 'bg-red-400 text-black',
};

type Props = {
  workout: Iworkout;
  list: 'plan' | 'save';
};

const MyPlanCard = ({ workout, list }: Props) => {
  const context = useContext(workoutContext);

  if (!context) return null;

  const { setPlan, setSave } = context;

  const handleRemove = () => {
    if (list === 'plan') {
      setPlan((prev: Iworkout[]) => prev.filter((item) => item.id !== workout.id));
    } else {
      setSave((prev: Iworkout[]) => prev.filter((item) => item.id !== workout.id));
    }
    toast.success("Workout removed!");
  };

  const handleDone = () => {
    if (list === 'plan') {
      setPlan((prev: Iworkout[]) => prev.filter((item) => item.id !== workout.id));
    }
    toast.success("Workout marked as done!");
  };

  const stats = [
    { label: 'Time', value: `${workout.duration} min` },
    { label: 'Calories', value: `${workout.caloriesBurned}` },
    { label: 'Sets', value: `${workout.sets}` },
    { label: 'Reps', value: workout.reps },
  ];

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#15171D] text-white shadow-lg transition hover:-translate-y-1 hover:border-yellow-300/50">
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 640px) 384px, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#15171D] via-[#15171D]/10 to-transparent" />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${
            difficultyColor[workout.difficulty as keyof typeof difficultyColor] ?? 'bg-white text-black'
          }`}
        >
          {workout.difficulty}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold backdrop-blur">
          <span className="text-yellow-300">★</span> {workout.rating}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-2xl font-black">{workout.name}</h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group: string) => (
            <span
              key={group}
              className="rounded-full border border-yellow-300/40 px-3 py-1 text-xs text-yellow-300"
            >
              {group}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-gray-400">{workout.description}</p>

        <p className="mt-3 text-sm text-gray-500">
          Equipment: <span className="text-gray-300">{workout.equipment}</span>
        </p>

        <div className="mt-5 grid grid-cols-4 gap-2">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 py-3 text-center">
              <p className="text-base font-bold">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            href={`/workouts/${workout.id}`}
            className="btn btn-sm sm:btn-md rounded-full border border-white/30 bg-transparent text-white hover:bg-white/10"
          >
            View Details
          </Link>

          <div className="flex gap-2">
            {list === 'plan' && (
              <button
                type="button"
                onClick={handleDone}
                className="btn rounded-xl bg-yellow-300 text-black hover:bg-yellow-400"
              >
                Mark as Done
              </button>
            )}
            <button
              type="button"
              onClick={handleRemove}
              aria-label="Remove workout"
              className="btn btn-sm rounded-xl border border-red-400/50 bg-transparent px-3 text-red-400 hover:bg-red-500 hover:text-white sm:btn-md"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;