import PlanButton from '@/components/workoutDetails/planButton';
import SaveButton from '@/components/workoutDetails/saveButton';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const getWorkout = async (id: string) => {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);

  if (!res.ok) return null;

  return res.json();
};

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) notFound();

  return (
   <section className="container mx-auto my-5 px-4">
      <Link href="/" className="mb-6 inline-block text-sm font-semibold">
        ← Back
      </Link>

      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-[#15171D] text-white">
        <div className="relative h-72 w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            sizes="(min-width: 672px) 672px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl font-black">{workout.name}</h1>
            <span className="font-semibold">
              <span className="text-yellow-300">★</span> {workout.rating}
            </span>
          </div>

          <p className="mt-2 text-sm text-yellow-300">
            {workout.difficulty} • {workout.muscleGroups.join(', ')}
          </p>

          <p className="mt-4 text-gray-400">{workout.description}</p>

          <p className="mt-4 text-sm text-gray-300">
            {workout.duration} min • {workout.caloriesBurned} cal • {workout.sets} sets
            × {workout.reps} reps
          </p>

          <h2 className="mt-8 text-lg font-bold">How to perform</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-400">
            {workout.instructions.map((step: string) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          {/* Buttons at the bottom */}
          <div className="mt-8 flex gap-3 border-t border-white/10 pt-6">
           <PlanButton workout={workout} />
           <SaveButton workout={workout} />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailsPage;