// components/CustomCarousel.tsx
import React from "react"

import { View, Dimensions, StyleSheet, Image } from "react-native"
import { Text } from "react-native-paper"
import Carousel from "react-native-reanimated-carousel"

const { width } = Dimensions.get("window")

export type CarouselItem = {
  id: string
  image: any
  title?: string
  subtitle?: string
}

type Props = {
  data: CarouselItem[]
  height?: number
  autoPlay?: boolean
  //   mode: "horizontal-stack" | "parallax" | "vertical-stack"
}

export const CustomCarousel: React.FC<Props> = ({
  data,
  height = 200,
  autoPlay = true,
  //   mode = "parallax",
}) => {
  return (
    <Carousel
      data={data}
      width={width}
      height={height}
      scrollAnimationDuration={1000}
      autoPlay={autoPlay}
      mode="parallax"
      loop={true}
      autoPlayInterval={3000}
      pagingEnabled={true}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer]}>
          <Image
            source={
              typeof item.image === "string" ? { uri: item.image } : item.image
            }
            // resizeMode="contain"
            style={styles.image}
          />
          {item.title && <Text style={styles.title}>{item.title}</Text>}
          {item.subtitle && (
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          )}
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 5,
  },
})
