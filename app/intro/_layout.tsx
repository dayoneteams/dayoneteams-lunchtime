import React from "react"

import { Stack } from "expo-router"
import { StyleSheet } from "react-native"

export default function IntroLayout() {
  return (
    <Stack
      screenOptions={() => ({
        animation: "slide_from_right",
      })}>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Intro", headerShown: false }}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({})
