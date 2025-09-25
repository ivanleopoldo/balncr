import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <SafeAreaView edges={["top"]}>
              <View className="flex-row items-center justify-between px-4 py-2">
                <Button
                  className="rounded-full"
                  variant={"outline"}
                  size={"icon"}
                >
                  <Entypo name="chevron-left" size={24} color={"white"} />
                </Button>
                <Button
                  variant={"outline"}
                  className="rounded-full h-fit items-center justify-center"
                >
                  <Text className="text-lg font-medium">Today</Text>
                </Button>
                <Button
                  className="rounded-full"
                  variant={"outline"}
                  size={"icon"}
                >
                  <Entypo name="chevron-right" size={24} color={"white"} />
                </Button>
              </View>
            </SafeAreaView>
          ),
        }}
      />
    </Stack>
  );
}
