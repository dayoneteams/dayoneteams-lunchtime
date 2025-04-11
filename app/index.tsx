import { useEffect } from "react"

import { router, useRootNavigationState } from "expo-router"

export default function Index() {
  const rootNavigation = useRootNavigationState()

  useEffect(() => {
    if (!rootNavigation?.key) return // chưa mount xong layout
    router.replace("/intro")
  }, [rootNavigation])

  return null
}
