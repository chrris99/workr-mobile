import { ReactElement, useState } from "react";

export const usePaginatedComponent = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const prev = () =>
    setCurrentStepIndex((curr) => {
      if (curr <= 0) return curr;
      return curr - 1;
    });

  const next = () =>
    setCurrentStepIndex((curr) => {
      if (curr >= steps.length - 1) return curr;
      return curr + 1;
    });

  return {
    steps,
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    prev,
    next,
  };
};
