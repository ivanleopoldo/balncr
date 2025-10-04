import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Analytics() {
  return (
    <SafeAreaView edges={["right", "left"]}>
      <View>
        <Text>Analytics</Text>
      </View>
    </SafeAreaView>
  );
}
