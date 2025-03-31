"use client"

import { useEffect, useState } from "react"

export default function LottieAnimation1() {
  const [LottieComponent, setLottieComponent] = useState<any>(null)
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    // Dynamically import Lottie
    import("lottie-react").then((module: typeof import("lottie-react")) => {
      setLottieComponent(() => module.default)
    })

    // Fetch the Lottie animation data
    fetch("/astronaut-with-space-shuttle.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load animation:", error))
  }, [])

  if (!LottieComponent || !animationData) {
    return (
      <div className="w-full h-[550px] rounded-xl bg-muted flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <LottieComponent
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: "100%", height: "100%" }}
    />
  )
}


export function LottieAnimation2() {
  const [LottieComponent, setLottieComponent] = useState<any>(null)
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    // Dynamically import Lottie
    import("lottie-react").then((module: typeof import("lottie-react")) => {
      setLottieComponent(() => module.default)
    })

    // Fetch the Lottie animation data
    fetch("/astronaut-sitting-planet-waving-hand.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load animation:", error))
  }, [])

  if (!LottieComponent || !animationData) {
    return (
      <div className="w-full h-[550px] rounded-xl bg-muted flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <LottieComponent
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: "100%", height: "100%" }}
    />
  )
}

export function LottieAnimation3() {
  const [LottieComponent, setLottieComponent] = useState<any>(null)
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    // Dynamically import Lottie
    import("lottie-react").then((module: typeof import("lottie-react")) => {
      setLottieComponent(() => module.default)
    })

    // Fetch the Lottie animation data
    fetch("/cloud-astronaut.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load animation:", error))
  }, [])

  if (!LottieComponent || !animationData) {
    return (
      <div className="w-full h-[550px] rounded-xl bg-muted flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <LottieComponent
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: "100%", height: "100%" }}
    />
  )
}

export function LottieAnimation4() {
  const [LottieComponent, setLottieComponent] = useState<any>(null)
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    // Dynamically import Lottie
    import("lottie-react").then((module: typeof import("lottie-react")) => {
      setLottieComponent(() => module.default)
    })

    // Fetch the Lottie animation data
    fetch("/astronaut-with-surprise-box.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load animation:", error))
  }, [])

  if (!LottieComponent || !animationData) {
    return (
      <div className="w-full rounded-xl bg-muted flex items-center justify-center">
        <div className="animate-spin rounded-full border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <LottieComponent
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: "100%", height: "100%" }}
    />
  )
}