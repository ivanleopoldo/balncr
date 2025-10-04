import { Stack } from "expo-router";

export default function Analytics() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Analytics",
        }}
      />
    </Stack>
  );
}
