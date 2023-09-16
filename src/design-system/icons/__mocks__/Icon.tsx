import Text from "../../typography/Text";

interface MockIconProps {
  name: string;
}

export const Icon = ({ name }: MockIconProps) => {
  return <Text>{name}</Text>;
};
