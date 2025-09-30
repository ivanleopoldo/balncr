import BaseSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { cssInterop } from "nativewind";

const Swipeable = cssInterop(BaseSwipeable, {
  className: {
    target: "containerStyle",
  },
  childrenContainerClassName: {
    target: "childrenContainerStyle",
  },
});

export { Swipeable };
