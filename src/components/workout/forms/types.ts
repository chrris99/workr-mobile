import { Control } from "react-hook-form";

export type WorkoutPlanFormValues = {
  name: string;
  description?: string;
  daysPerWeek: number;
  weekCount: number;
};

export interface BaseWorkoutPlanFormProps {
  control: Control<WorkoutPlanFormValues>;
}
