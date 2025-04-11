import React from "react"

import { useRouter } from "expo-router"
import { useTranslation } from "react-i18next"
import { View, ImageBackground, StyleSheet, Image } from "react-native"
import { Button, Text } from "react-native-paper"

import { images } from "@/libs/common/design-system/assets/images"
import { commonColors } from "@/libs/common/design-system/colors"

export default function IntroScreen() {
  const { t } = useTranslation("intro")

  const router = useRouter()

  const contributers = [
    {
      id: "1",
      name: "Nguyễn Khánh Phương",
      image: images.khanhphuong,
    },
    {
      id: "2",
      name: "Nguyễn Quang Minh",
      image: images.quangminh,
    },
  ]

  const handleNavigate = () => {
    router.push("/(main-tabs)")
  }

  return (
    <>
      <ImageBackground
        source={images.comtam}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.topBar}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>
              <Text style={[styles.textBold, { color: "#00A86B" }]}>Like</Text>
              <Text style={{ color: "#000" }}> Eats</Text>
            </Text>
          </View>
          <Button
            mode="contained"
            style={styles.skipButton}
            onPress={handleNavigate}>
            <Text style={styles.textBold}>Skip</Text>
          </Button>
        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.footerOverlay} />
          <View style={styles.content}>
            <View style={styles.avatarGroup}>
              {contributers.map(contributer => (
                <Image
                  key={contributer.id}
                  source={contributer.image}
                  style={styles.avatar}
                />
              ))}
            </View>
            <Text
              variant="headlineMedium"
              style={[styles.title, styles.textBold]}>
              {t("title1")},{"\n"}
              {t("title2")}
            </Text>
            <Text variant="bodyMedium" style={styles.subtitle}>
              {t("subtitle")}
            </Text>
            <Button
              mode="contained"
              style={styles.continueButton}
              contentStyle={{ height: 50 }}
              onPress={handleNavigate}>
              <Text style={styles.textBold}>Continue</Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  topBar: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: commonColors.white,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  logoText: {
    fontSize: 18,
  },
  skipButton: {
    backgroundColor: "#E0E6D2",
    borderRadius: 999,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
  avatarGroup: {
    flexDirection: "row",
    gap: -10,
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: commonColors.white,
    marginRight: -10,
  },
  title: {
    color: commonColors.white,
    marginBottom: 12,
  },
  subtitle: {
    color: "#eee",
    marginBottom: 24,
  },
  continueButton: {
    backgroundColor: commonColors.white,
    borderRadius: 999,
  },
  textBold: {
    fontWeight: "bold",
  },
  footerWrapper: {
    position: "relative",
  },
  footerOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300, // tùy chỉnh chiều cao mờ theo ý bạn
    backgroundColor: "rgba(0, 0, 0, 0.4)", // màu đen mờ
  },
})
