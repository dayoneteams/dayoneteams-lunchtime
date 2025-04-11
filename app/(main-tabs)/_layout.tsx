import React from "react"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { Platform } from "react-native"
import { useTheme } from "react-native-paper"

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary, // 👈 màu active theo theme
        tabBarInactiveTintColor: theme.colors.outline, // 👈 màu inactive theo theme
        tabBarStyle: {
          backgroundColor: theme.colors.elevation.level2, // 👈 màu nền của tab bar
          borderTopWidth: 0,
          ...Platform.select({
            ios: {
              position: "absolute",
            },
          }),
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
