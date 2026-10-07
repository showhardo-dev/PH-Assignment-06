import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Iworkout } from '@/types/workout.type';

const difficultyColor = {
  Beginner: 'bg-green-400 text-black',
  Intermediate: 'bg-yellow-300 text-black',
  Advanced: 'bg-red-400 text-black',
};

const WorkoutCard = ({ workout }: { workout: Iworkout }) => {
  const stats = [
    { label: 'Time', value: `${workout.duration} min` },
    { label: 'Calories', value: `${workout.caloriesBurned}` },
    { label: 'Sets', value: `${workout.sets}` },
    { label: 'Reps', value: workout.reps },
  ];

  return (
    <Link href={`/workouts/${workout.id}`} className="block h-full w-full">
      <div className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#15171D] text-white shadow-lg transition hover:-translate-y-1 hover:border-yellow-300/50">
        {/* Image */}
        <div className="relative aspect-4/3 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#15171D] via-[#15171D]/10 to-transparent" />

          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${
              difficultyColor[workout.difficulty as keyof typeof difficultyColor] ??
              'bg-white text-black'
            }`}
          >
            {workout.difficulty}
          </span>

          <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold backdrop-blur">
            <span className="text-yellow-300">★</span> {workout.rating}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
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

          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
            {workout.description}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Equipment: <span className="text-gray-300">{workout.equipment}</span>
          </p>

          {/* Stats */}
          <div className="mt-auto grid grid-cols-2 gap-2 pt-5 min-[420px]:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/5 py-3 text-center">
                <p className="text-base font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;