'use client';

import React, { createContext, ReactNode, useState } from 'react';
import { Iworkout } from '@/types/workout.type';

interface WorkoutContextType {
  plan: Iworkout[];
  setPlan: React.Dispatch<React.SetStateAction<Iworkout[]>>;
  save: Iworkout[];
  setSave: React.Dispatch<React.SetStateAction<Iworkout[]>>;
}

export const workoutContext = createContext<WorkoutContextType>({
  plan: [],
  setPlan:() => {},
  save: [],
  setSave:() => {}
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<Iworkout[]>([]);
  const [save, setSave] = useState<Iworkout[]>([]);

  const sharedData = {
    plan,
    setPlan,
    save,
    setSave,
  };

  return (
    <workoutContext.Provider value={sharedData}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;