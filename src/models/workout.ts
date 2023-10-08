export type WorkoutItemType =
  | "repeated"
  | "timed"
  | "maxDuration"
  | "maxRep"
  | "temp";

type BaseWorkoutItem = {
  exerciseId: string;
  type: WorkoutItemType;
  sets: number;
  comment?: string;
};

type RepeatedWorkoutItem = BaseWorkoutItem & {
  type: "repeated";
  reps: number;
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

export type WorkoutItem =
  | RepeatedWorkoutItem
  | TimedWorkoutItem
  | TempWorkoutItem
  | MaxDurationWorkoutItem
  | MaxRepWorkoutItem;

export type WorkoutBlock = {
  items: WorkoutItem[];
};

export type WorkoutDay = {
  blocks: WorkoutBlock[];
};
