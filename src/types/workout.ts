import { Exercise } from "@/models/exercise";

export type WorkoutItemType =
  | "repeated"
  | "timed"
  | "maxDuration"
  | "maxRep"
  | "temp";

export type Set = {
  reps: number;
  weight: number;
  unit: "kg";
};

type BaseWorkoutItem = {
  exercise: Exercise;
  type: WorkoutItemType;
  sets: Set[];
  comment?: string;
};

type RepeatedWorkoutItem = BaseWorkoutItem & {
  type: "repeated";
};

type TimedWorkoutItem = BaseWorkoutItem & {
  type: "timed";
  durationInSeconds: number;
};

type TempWorkoutItem = BaseWorkoutItem & {
  type: "temp";
  segments: { name: string; durationInSeconds: number }[];
};

type MaxDurationWorkoutItem = BaseWorkoutItem & {
  type: "maxDuration";
};

type MaxRepWorkoutItem = BaseWorkoutItem & {
  type: "maxRep";
};

export type WorkoutItem = RepeatedWorkoutItem;

export type WorkoutBlock = {
  items: WorkoutItem[];
};

export type WorkoutTemplate = {
  id: string;
  name: string;
  description?: string;
  blocks: WorkoutBlock[];
};

export type WorkoutDay = {
  blocks: WorkoutBlock[];
};
