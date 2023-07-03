import { Muscle } from "../types/muscle";

export type Exercise = {
  name: string;
  targetMuscleGroups: Muscle[];
  description?: string;
  instructions?: string[]
}
