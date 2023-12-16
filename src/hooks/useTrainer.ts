import { useUser } from "@clerk/clerk-expo";

const TRAINER_ROLE = "trainer";

export const useTrainer = () => {
  const { user } = useUser();

  return user?.unsafeMetadata && user.unsafeMetadata.role === TRAINER_ROLE;
};
