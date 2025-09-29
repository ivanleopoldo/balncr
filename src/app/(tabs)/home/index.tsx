import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Entypo from "@expo/vector-icons/Entypo";
import { FlatList, ScrollView, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Carousel,
  type ICarouselInstance,
  Pagination,
} from "@/components/native/carousel";
import React from "react";
import { useSharedValue } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function Home() {
  const progress = useSharedValue<number>(0);
  const ref = React.useRef<ICarouselInstance>(null);
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <SafeAreaView edges={["right", "left"]} className="flex-1 p-4">
      <ScrollView
        contentContainerClassName="gap-3"
        showsVerticalScrollIndicator={false}
        className="flex-1"
      >
        <Text className="font-bold text-2xl">Overview</Text>
        <Carousel
          onProgressChange={progress}
          ref={ref}
          width={width - 32}
          containerClassName="flex-1 h-36"
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
        <Text className="text-muted-foreground text-sm">Categories</Text>
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => {
              return (
                <View className="bg-background flex-1 rounded-lg p-8 items-center border-dashed justify-center border-2 border-border mr-3">
                  <Text>+</Text>
                </View>
              );
            }}
            renderItem={(info) => {
              return (
                <View className="h-fit p-4 bg-input/30 border-border border mr-3 gap-3 rounded-lg">
                  <Text className="text-sm">Housing</Text>
                  <Text className="font-semibold">P12312</Text>
                  <View className="flex-row items-center">
                    <Text className="text-xs bg-input px-[6px] py-[3px] rounded-full">
                      61%
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View className="gap-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-muted-foreground text-md">Records</Text>
            <Entypo name="plus" size={20} color={"white"} />
          </View>
          <FlatList
            className="flex-1"
            data={Array.from({ length: 30 }).map((_, i) => i)}
            contentContainerClassName="gap-3"
            scrollEnabled={false}
            renderItem={(info) => {
              return (
                <View className="w-full bg-input/30 border-border border p-4 rounded-2xl">
                  <Text>{info.index}</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
