import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Entypo from "@expo/vector-icons/Entypo";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView edges={["right", "left", "bottom"]} className="flex-1">
      <View className="flex-1 px-4">
        <Text>hello</Text>
      </View>
      <View className="absolute bottom-0 h-fit p-4 w-full flex-row gap-4">
        <Button variant={"outline"} className="flex-1 rounded-2xl">
          <Text>Add Transaction</Text>
        </Button>
        <Button variant={"outline"} className="rounded-full " size={"icon"}>
          <Entypo name="list" size={24} color={"white"} />
        </Button>
      </View>
    </SafeAreaView>
  );
}
