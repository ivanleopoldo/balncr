import { Pressable, View } from "react-native";
import { Text } from "@/components/ui/text";

export type CategoryCardProps = {
  title: string;
  currency: string;
  total: string;
  percent: string;
};

export function CategoryCard({ ...props }: CategoryCardProps) {
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
