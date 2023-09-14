import { Control } from "react-hook-form";

type WorkoutDay = {

}

export type WorkoutPlanFormValues = {
  name: string;
  description?: string;
  daysPerWeek: number;
  weekCount: number;
  workouts: WorkoutDay[]
};

export interface BaseWorkoutPlanFormProps {
  control: Control<WorkoutPlanFormValues>;
}
