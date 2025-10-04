import { Tabs } from "expo-router";
import { House, CreditCard, ChartBar, User } from "lucide-react-native";

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
            return <House {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          headerShown: false,
          title: "Accounts",
          tabBarIcon: (props) => {
            return <CreditCard {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          headerShown: false,
          title: "Analytics",
          tabBarIcon: (props) => {
            return <ChartBar {...props} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: (props) => {
            return <User {...props} />;
          },
        }}
      />
    </Tabs>
  );
}
