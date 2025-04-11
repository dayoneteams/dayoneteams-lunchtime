import React from "react"

import { useRouter } from "expo-router"
import { StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"

import { images } from "@/libs/common/design-system/assets/images"
import { commonColors } from "@/libs/common/design-system/colors"
import {
  CarouselItem,
  CustomCarousel,
} from "@/libs/common/design-system/components"

export default function Prototype() {
  const router = useRouter()

  const data: CarouselItem[] = [
    {
      id: "1",
      image: images.bunbo,
      title: "Welcome to Our App",
      subtitle: "Discover amazing features",
    },
    {
      id: "2",
      image: images.comga,
      title: "User-Friendly Interface",
      subtitle: "Experience a seamless user experience",
    },
    {
      id: "3",
      image: images.comtam,
      title: "Stay Connected",
      subtitle: "Connect with friends and family",
    },
    {
      id: "4",
      image: images.hutieu,
      title: "Engaging Content",
      subtitle: "Engage with engaging content",
    },
  ]
  const handleNavigate = () => {
    router.push("/(main-tabs)")
  }
  return (
    <View style={styles.mainContainer}>
      <CustomCarousel data={data} height={750} autoPlay={false} />
      <Button mode="contained" style={styles.button} onPress={handleNavigate}>
        <Text style={[styles.textBold, { color: commonColors.white }]}>
          Skip
        </Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  button: {
    width: "100%",
    borderRadius: 50,
    // paddingHorizontal: 50,
  },
  textBold: {
    fontWeight: "bold",
  },
})
