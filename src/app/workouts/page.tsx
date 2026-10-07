import React from 'react';

import { Iworkout } from '@/types/workout.type';
import WorkoutCard from '@/components/shared/workoutCard';


const getWorkouts = async () => {
  const response = await fetch('https://api.api-store.workers.dev/api/fitlog');
  const data = await response.json();
  return data;
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