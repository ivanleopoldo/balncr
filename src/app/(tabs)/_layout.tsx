import Entypo from "@expo/vector-icons/Entypo";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
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
