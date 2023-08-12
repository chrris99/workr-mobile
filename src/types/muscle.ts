const muscles = [
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
];

export type Muscle = typeof muscles[number]

export function isOfType(value: string): value is Muscle {
  return muscles.includes(value);
}
