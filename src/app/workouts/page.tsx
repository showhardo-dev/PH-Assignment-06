import React from 'react';

import { Iworkout } from '@/types/workout.type';
import WorkoutCard from '@/components/shared/workoutCard';


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
    <section className="container mx-auto  px-4 my-2">
      <div className="container mx-auto  ">
       
        

        {/* Workouts Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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