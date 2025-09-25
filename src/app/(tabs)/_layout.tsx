import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";
import { Pressable, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function TabsLayout() {
  const { bottom } = useSafeAreaInsets();
  return (
    <Tabs
      safeAreaInsets={{ bottom: 0 }}
      tabBar={({ state, navigation, descriptors }) => {
        return (
          <SafeAreaView
            edges={[]}
            style={{
              marginBottom: bottom,
            }}
            className="relative w-[92%] self-center items-center bg-input/30 border-border border rounded-2xl"
          >
            <View className="flex-row justify-between w-full px-8 py-2">
              {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                  const event = navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name, route.params);
                  }
                };

                const onLongPress = () => {
                  navigation.emit({
                    type: "tabLongPress",
                    target: route.key,
                  });
                };
                return (
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    key={route.key}
                  >
                    {options.tabBarIcon ? (
                      options.tabBarIcon({
                        color: isFocused ? "white" : "gray",
                        focused: isFocused,
                        size: 24,
                      })
                    ) : (
                      <Text>{route.name}</Text>
                    )}
                  </Button>
                );
              })}
            </View>
          </SafeAreaView>
        );
      }}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle: {
          height: "100%",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Dashboard",
          tabBarIcon: (props) => {
            return <Entypo name="home" {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          headerShown: false,
          title: "Accounts",
          tabBarIcon: (props) => {
            return <Entypo name="credit-card" {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          headerShown: false,
          title: "Calendar",
          tabBarIcon: (props) => {
            return <Entypo name="calendar" {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          headerShown: false,
          title: "Analytics",
          tabBarIcon: (props) => {
            return <Entypo name="pie-chart" {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: (props) => {
            return <Entypo name="user" {...props} />;
          },
        }}
      />
    </Tabs>
  );
}
