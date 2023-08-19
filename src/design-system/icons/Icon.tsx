import { Color, colors } from "../colors/colors";
import { IconName, icons } from "./icons";

type IconSize = "S" | "M";

interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: Color;
  strokeWidth?: number;
}

const iconSize: Record<IconSize, number> = {
  S: 20,
  M: 24,
};

export const Icon = ({
  name,
  size = "M",
  color = "primary-700",
  strokeWidth = 1.5,
}: IconProps) => {
  const SvgIcon = icons[name];
  return (
    <SvgIcon
      width={iconSize[size]}
      height={iconSize[size]}
      strokeWidth={strokeWidth}
      color={colors[color]}
    />
  );
};
