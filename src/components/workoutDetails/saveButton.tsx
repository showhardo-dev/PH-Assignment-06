"use client";
import { workoutContext } from '@/context/WorkoutContext';
import { Iworkout } from '@/types/workout.type';
import React, { useContext } from 'react';
import { toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: Iworkout }) => {
  const context = useContext(workoutContext);

  if (!context) {
    return null;
  }

  const { save, setSave } = context;

  const handleSaveWorkout = () => {
    const existingWorkout = save.find((w: Iworkout) => w.id === workout.id);
    if (existingWorkout) {
      toast.error(`"${workout.name}" is already in your saved workouts`);
      return;
    }
    setSave([...save, workout]);
    toast.success(`you have added "${workout.name}" to your saved workouts`);
  };

  return (
    <button
      type="button"
      className="flex-1 rounded-full bg-yellow-300! py-3 font-bold text-black! hover:bg-yellow-200!"
      onClick={() => handleSaveWorkout()}
    >
      Save for later
    </button>
  );
};

export default SaveButton;