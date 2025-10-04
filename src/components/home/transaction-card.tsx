import React from "react";
import { View } from "react-native";
import Reanimated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Swipeable, SwipeableMethods } from "../native/swipeable";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Icons } from "@/lib/icons/icons";

export type TransactionCardProps = {
  description: string;
  category: string;
  currency: string;
  price: string;
  type: "expense" | "savings" | "income";
  account: string;
  index?: number;
  swipeableRef: React.RefObject<SwipeableMethods | null>;
};

export type RightActionsProps = {
  prog: SharedValue<number>;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
};

export function TransactionCard({ ...props }: TransactionCardProps) {
  const priceArr = props.price.split(".");
  const ref = React.useRef<SwipeableMethods>(null);

  const RightActions = ({
    prog,
    onPressDelete,
    onPressEdit,
  }: RightActionsProps) => {
    const [totalWidth, setTotalWidth] = React.useState(0);

    const styleAnimation = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: interpolate(
            prog.value,
            [0, 1],
            [totalWidth, 0],
            Extrapolation.CLAMP,
          ),
        },
      ],
    }));

    return (
      <View className="flex-row items-center">
        <View className="w-3" />
        <Reanimated.View style={styleAnimation} className={"overflow-hidden"}>
          <View
            onLayout={(e) => setTotalWidth(e.nativeEvent.layout.width)}
            className="flex-row h-full"
          >
            <Button
              onPress={() => {
                onPressEdit && onPressEdit();
                ref.current?.close();
              }}
              variant={"outline"}
              size={"icon"}
              className="h-full rounded-r-none w-14 border-r-0 rounded-l-xl"
            >
              <Icons.Pencil />
            </Button>
            <Button
              onPress={() => {
                onPressDelete && onPressDelete();
                ref.current?.close();
              }}
              variant={"outline"}
              size={"icon"}
              className="h-full w-14 rounded-l-none rounded-r-xl"
            >
              <Icons.Trash />
            </Button>
          </View>
        </Reanimated.View>
      </View>
    );
  };

  return (
    <Swipeable
      ref={ref}
      overshootRight={false}
      onSwipeableWillOpen={() => {
        if (
          props.swipeableRef.current &&
          props.swipeableRef.current !== ref.current
        ) {
          props.swipeableRef.current.close();
        }
        props.swipeableRef.current = ref.current;
      }}
      renderRightActions={(progress, translation) => {
        return <RightActions prog={progress} />;
      }}
      enableTrackpadTwoFingerGesture
      childrenContainerClassName="px-4 py-2 border-border border bg-input/30 rounded-xl flex-1 justify-between flex-row"
    >
      <View className="">
        <Text className="text-lg font-semibold">{props.description}</Text>
        <Text className="text-muted-foreground">{props.category}</Text>
      </View>
      <View className="justify-center">
        <View className="items-baseline justify-center flex-row">
          <Text className="font-semibold text-lg">
            {props.type === "expense" ? "-" : "+"}
            {props.currency}
            {priceArr[0]}
          </Text>
          <Text className="text-muted-foreground text-md">.{priceArr[1]}</Text>
        </View>
        <View className="items-end">
          <Text className="text-muted-foreground">{props.account}</Text>
        </View>
      </View>
    </Swipeable>
  );
}
