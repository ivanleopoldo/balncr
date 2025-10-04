import BaseSwipeable, {
  SwipeableMethods,
  SwipeableProps,
} from "react-native-gesture-handler/ReanimatedSwipeable";
import { cssInterop } from "nativewind";
import * as React from "react";

const SwipeableBase = cssInterop(BaseSwipeable, {
  className: {
    target: "containerStyle",
  },
  childrenContainerClassName: {
    target: "childrenContainerStyle",
  },
});

const Swipeable = React.forwardRef<
  React.ElementRef<typeof BaseSwipeable>,
  React.ComponentProps<typeof SwipeableBase>
>((props, ref) => <SwipeableBase {...props} ref={ref} />);

Swipeable.displayName = "Swipeable";

export { Swipeable, SwipeableMethods, SwipeableProps };
