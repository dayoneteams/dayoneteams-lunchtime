import React from "react"

import { MotiView } from "moti"
import { StyleSheet } from "react-native"
import { Text } from "react-native-paper"

import { ScreenWrapper } from "@/libs/common/design-system/components"

export default function NotFoundScreen() {
  return (
    <ScreenWrapper contentContainerStyle={styles.mainContainer}>
      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}>
        <Text style={styles.title}>404</Text>
        <Text style={styles.subtitle}>Oops! Trang này không tồn tại.</Text>
      </MotiView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
})
