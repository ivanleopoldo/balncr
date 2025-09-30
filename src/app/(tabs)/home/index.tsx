import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import {
  FlatList,
  ScrollView,
  View,
  Dimensions,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Carousel,
  type ICarouselInstance,
  Pagination,
} from "@/components/native/carousel";
import React from "react";
import Reanimated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Swipeable } from "@/components/native/swipeable";
import Entypo from "@expo/vector-icons/Entypo";

const { width } = Dimensions.get("window");

export default function Home() {
  const progress = useSharedValue<number>(0);

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <SafeAreaView edges={["right", "left"]} className="flex-1">
      <ScrollView
        contentContainerClassName="pb-4 pt-2 px-4"
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >
        <View className="gap-2 pb-1">
          <Text className="font-bold text-2xl">Overview</Text>
          <View className="gap-3">
            <Carousel
              onProgressChange={progress}
              ref={ref}
              width={width - 32}
              containerClassName="flex-1 h-40"
              data={Array.from({ length: 3 })}
              renderItem={({ item, index }) => (
                <View className="flex-row gap-3">
                  <Button className="flex-col flex-1 h-fit" variant={"outline"}>
                    <Text className="font-bold text-xl">Expenses</Text>
                    <View className="bg-red-400 h-16 w-full" />
                    <Text className="font-bold text-xl">P1212</Text>
                  </Button>
                  <Button className="flex-col flex-1 h-fit" variant={"outline"}>
                    <Text className="font-bold text-xl">Expenses</Text>
                    <View className="bg-red-400 h-16 w-full" />
                    <Text className="font-bold text-xl">P1212</Text>
                  </Button>
                </View>
              )}
            />
            <Pagination.Basic
              progress={progress}
              data={Array.from({ length: 3 })}
              size={6}
              dotClassName="rounded-full bg-muted"
              activeDotClassName="bg-muted-foreground rounded-full overflow-hidden"
              className="gap-1"
              horizontal
              onPress={onPressPagination}
            />
          </View>
        </View>
        <View className="gap-2 pb-2">
          <Text className="text-muted-foreground text-sm">Categories</Text>
          <FlatList
            data={[
              { title: "Housing", currency: "P", total: "1312", percent: "62" },
              { title: "Food", currency: "P", total: "423", percent: "31" },
              { title: "Cat", currency: "P", total: "2409", percent: "12" },
              { title: "Online", currency: "P", total: "499", percent: "6" },
            ]}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <Pressable className="active:bg-input/20 bg-background flex-1 rounded-lg p-8 items-center border-dashed justify-center border-2 border-border mr-3">
                  <Text className="text-muted-foreground/30 text-2xl">+</Text>
                </Pressable>
              );
            }}
            renderItem={(info) => {
              return <CategoryCard {...info.item} />;
            }}
          />
        </View>
        <View className="gap-3">
          <View className="flex-row justify-between items-center">
            <Text className="text-muted-foreground text-md">Records</Text>
            {/* <Entypo name="plus" size={20} color={"white"} /> */}
          </View>
          <FlatList
            className="flex-1"
            data={[
              {
                description: "mcdonalds run lunch",
                category: "Food",
                price: "5400.23",
                currency: "P",
                type: "expense" as TransactionCardProps["type"],
                account: "Mastercard",
              },
              {
                description: "rent",
                category: "Housing",
                price: "1040.94",
                currency: "P",
                type: "expense" as TransactionCardProps["type"],
                account: "GCash",
              },
              {
                description: "cat food",
                category: "Cat",
                price: "1200.49",
                currency: "P",
                type: "expense" as TransactionCardProps["type"],
                account: "Visa",
              },
              {
                description: "cat food",
                category: "Cat",
                price: "1200.49",
                currency: "P",
                type: "expense" as TransactionCardProps["type"],
                account: "Visa",
              },
              {
                description: "cat food",
                category: "Cat",
                price: "1200.49",
                currency: "P",
                type: "expense" as TransactionCardProps["type"],
                account: "Visa",
              },
              {
                description: "cat food",
                category: "Cat",
                price: "1200.49",
                currency: "P",
                type: "expense" as TransactionCardProps["type"],
                account: "Visa",
              },
              {
                description: "cat food",
                category: "Cat",
                price: "1200.49",
                currency: "P",
                type: "expense" as TransactionCardProps["type"],
                account: "Visa",
              },
            ]}
            contentContainerClassName="gap-3"
            scrollEnabled={false}
            renderItem={(info) => {
              return <TransactionCard {...info.item} />;
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type CategoryCardProps = {
  title: string;
  currency: string;
  total: string;
  percent: string;
};

function CategoryCard({ ...props }: CategoryCardProps) {
  return (
    <Pressable className="active:bg-input/50 h-fit p-4 w-24 bg-input/30 border-border border mr-3 gap-3 rounded-lg">
      <Text className="text-sm">{props.title}</Text>
      <View className="flex-row">
        <Text>{props.currency}</Text>
        <Text className="font-semibold">{props.total}</Text>
      </View>
      <View className="flex-row items-center">
        <Text className="text-xs bg-input px-[6px] py-[3px] rounded-full">
          {props.percent}%
        </Text>
      </View>
    </Pressable>
  );
}

type TransactionCardProps = {
  description: string;
  category: string;
  currency: string;
  price: string;
  type: "expense" | "savings" | "income";
  account: string;
};

function RightActions({ prog }: { prog: SharedValue<number> }) {
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
    <Reanimated.View
      style={styleAnimation}
      className={"rounded-xl overflow-hidden"}
    >
      <View className="w-6" />
      <View
        onLayout={(e) => setTotalWidth(e.nativeEvent.layout.width)}
        className="flex-row h-full"
      >
        <Pressable className="bg-green-400 active:bg-green-500 h-full rounded-r-none px-4 justify-center items-center py-2 w-16">
          <Entypo name="edit" color={"white"} size={24} />
        </Pressable>
        <Pressable className="bg-red-500 active:bg-red-600 rounded-l-none h-full px-4 py-2 justify-center items-center w-16">
          <Entypo name="trash" color={"white"} size={24} />
        </Pressable>
      </View>
    </Reanimated.View>
  );
}

function TransactionCard({ ...props }: TransactionCardProps) {
  const priceArr = props.price.split(".");

  return (
    <Swipeable
      overshootRight={false}
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
