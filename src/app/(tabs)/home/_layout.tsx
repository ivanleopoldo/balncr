import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Stack } from "expo-router";
import { Icons } from "@/lib/icons/icons";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-full items-center justify-center"
                >
                  <Icons.ChevronLeft />
                </Button>
                <Button
                  variant={"outline"}
                  className="rounded-full h-fit items-center justify-center"
                >
                  <Text className="text-lg font-medium">Today</Text>
                </Button>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="rounded-full items-center justify-center"
                >
                  <Icons.ChevronRight />
                </Button>
              </View>
            </SafeAreaView>
          ),
        }}
      />
    </Stack>
  );
}
