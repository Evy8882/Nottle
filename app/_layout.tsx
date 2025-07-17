import { Tabs } from "expo-router";
import "../global.css";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return <Tabs screenOptions={{ 
    headerShown: false,
    tabBarActiveTintColor: "#444477",
    tabBarInactiveTintColor: "#aaaaaa",
    tabBarStyle: {
      backgroundColor: "#fff5",
      borderTopWidth: 0,
      elevation: 0,
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 110,}
  }}>
    <Tabs.Screen
      name="index"
      options={{
        tabBarLabel: "Notas",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="newNote"
      options={{
        tabBarLabel: "",
        tabBarIconStyle: {
          transform: "scale(2.8)",
        },
        
        tabBarIcon: ({ focused, size }) => (
          <Ionicons name="add-circle" size={size} color={focused ? "#44f" : "#88e"} />
        ),
      }}
      />
    <Tabs.Screen
      name="settings"
      options={{
        tabBarLabel: "Config",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" size={size} color={color} />
        ),
      }}
    />
  </Tabs>;
}