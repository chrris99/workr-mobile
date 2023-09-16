import { IconName } from "../design-system/icons/icons";

export const muscles = [
  "abductors",
  "abs",
  "adductors",
  "biceps",
  "calves",
  "chest",
  "forearms",
  "glutes ",
  "hamstrings",
  "hip flexors",
  "lats",
  "lower back",
  "upper back",
  "neck",
  "obliques",
  "quads",
  "shoulders",
  "traps",
  "triceps",
] as const;

export type Muscle = (typeof muscles)[number];

export function isOfTypeMuscle(value: string): value is Muscle {
  return muscles.includes(value as Muscle);
}

export function mapMuscle(muscle: Muscle): IconName {
  switch (muscle) {
    case "abductors":
    case "glutes ":
      return "Butt";
    case "forearms":
    case "biceps":
    case "triceps":
    case "shoulders":
      return "Arm";
    case "quads":
    case "calves":
    case "hamstrings":
      return "Leg";
    case "abs":
    case "chest":
    case "obliques":
      return "Abs"
    default:
      return "Arm";
  }
}
