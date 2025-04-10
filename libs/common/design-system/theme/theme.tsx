import React, { createContext, useContext, useState } from "react"

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import {
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { colors } from "../colors"

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
})

const lightTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    primary: "#6200ee",
    background: colors.lightModeBackground, // Light Mode Background
    text: colors.dark,
  },
  fonts: {
    ...NavigationDefaultTheme.fonts,
    ...MD3LightTheme.fonts,
  },
}

const darkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    primary: "#bb86fc",
    background: colors.darkModeBackground, // Dark Mode Background
    text: colors.white,
  },
  fonts: {
    ...NavigationDarkTheme.fonts,
    ...MD3DarkTheme.fonts,
  },
}

// 🟢 Tạo Context để lưu theme
const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  theme: lightTheme,
})

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => setIsDarkMode(prev => !prev)

  const theme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar style={isDarkMode ? "light" : "dark"} />
          {children}
        </SafeAreaProvider>
      </PaperProvider>
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
})
