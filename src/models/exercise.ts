import { Muscle } from "../types/muscle";

export type Exercise = {
  name: string;
  targetMuscleGroup: Muscle;
  description?: string;
  forceType?: string;
  instructions?: string[]
}
