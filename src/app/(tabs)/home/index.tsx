import { CategoryCard } from "@/components/home/category-card";
import {
  TransactionCard,
  type TransactionCardProps,
} from "@/components/home/transaction-card";
import {
  Carousel,
  type ICarouselInstance,
  Pagination,
} from "@/components/native/carousel";
import { SwipeableMethods } from "@/components/native/swipeable";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import React from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  View,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function Home() {
  const progress = useSharedValue<number>(0);
  const carouselRef = React.useRef<ICarouselInstance>(null);
  const swipeableRef = React.useRef<SwipeableMethods | null>(null);

  const onPressPagination = (index: number) => {
    carouselRef.current?.scrollTo({
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
              ref={carouselRef}
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
              return (
                <TransactionCard
                  {...info.item}
                  index={info.index}
                  swipeableRef={swipeableRef}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
