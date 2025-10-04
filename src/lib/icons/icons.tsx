import { icons, LucideIcon, LucideProps } from "lucide-react-native";
import { iconWithClassName } from "./iconWithClassName";

export const Icons = Object.fromEntries(
  Object.entries(icons).map(([name, Icon]) => [
    name,
    iconWithClassName(Icon as LucideIcon),
  ]),
) as {
  [K in keyof typeof icons]: LucideIcon;
};
