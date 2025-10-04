import { LucideIcon, LucideProps } from "lucide-react-native";
import { cssInterop } from "nativewind";
import { cn } from "../utils";

export function iconWithClassName(Icon: LucideIcon) {
  const InteropIcon = cssInterop(Icon, {
    className: {
      target: "style",
      nativeStyleToProp: { color: "color" },
    },
  });

  const Wrapped = (props: LucideProps) => {
    return (
      <InteropIcon
        className={cn("text-foreground", props.className)}
        size={24}
        {...props}
      />
    );
  };

  return Wrapped;
}
