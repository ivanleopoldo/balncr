import { ScrollView as BaseScrollView } from "react-native";
import { cssInterop } from "nativewind";

const ScrollView = cssInterop(BaseScrollView, {
  contentContainerClassName: {
    target: "contentContainerStyle",
  },
});

export { ScrollView };
