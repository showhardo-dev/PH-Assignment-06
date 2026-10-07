import React from 'react';
import WorkoutCard from '../shared/workoutCard';
import { Iworkout } from '@/types/workout.type';


const getWorkouts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/fitlog`
    );
    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return (
    <section>
      <div className="container mx-auto my-20">
        <div className="mb-8">
            <h2 className="mb-8 text-3xl font-white">THE LIBRARY</h2>
        <p className="text-lg text-gray-300">
          Twelve lifts covering every major muscle group.
        </p>
        </div>
        

        {/* Workouts Grid */}
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {workoutsData.map((workout: Iworkout) => (
            <div key={workout.id}>
            <WorkoutCard workout={workout} />
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workouts;