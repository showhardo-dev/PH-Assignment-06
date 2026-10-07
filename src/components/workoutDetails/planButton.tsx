"use client";
import { workoutContext } from '@/context/WorkoutContext';
import { Iworkout } from '@/types/workout.type';
import React, { useContext } from 'react';
import { toast } from "react-toastify";



const PlanButton = ({ workout }: { workout: Iworkout }) => {

    const workoutContextValue = useContext(workoutContext);

    if (!workoutContextValue) {
      return null;
    }

    const { plan, setPlan } = workoutContextValue;

    const handlePlanWorkout = () => {
      // console.log(workout);
      const existingWorkout = plan.find((w: Iworkout) => w.id === workout.id);
      if (existingWorkout) {
        toast.error(`"${workout.name}" is already in your plan`);
        return;
      }
      setPlan([...plan,workout]);
      toast.success(`you have added "${workout.name}" to your plan`);
       
    };
    return (
        
             <button
              type="button"
              className="flex-1 rounded-full bg-yellow-300! py-3 font-bold text-black! hover:bg-yellow-200!" onClick={() => handlePlanWorkout()}
            >
              Add to today&apos;s plan
            </button>
       
    );
};

export default PlanButton;