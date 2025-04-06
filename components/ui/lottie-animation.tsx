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
      <div className="w-full h-[250px] rounded-xl bg-white flex items-center justify-center">
      </div>
    )
  }

  return (
    <LottieComponent
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: "15rem", height: "15rem", margin: "0 auto" }}
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
    fetch("/cloud-astronaut.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load animation:", error))
  }, [])

  if (!LottieComponent || !animationData) {
    return (
      <div className="w-full h-[550px] rounded-xl bg-white flex items-center justify-center">
      </div>
    )
  }

  return (
    <LottieComponent
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ width: "15rem", height: "15rem", margin: "0 auto" }}
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
    fetch("/preloading-4.json")
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
      style={{ width: "25rem", height: "25rem" }}
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
    fetch("/preloading-5.json")
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
      style={{ width: "25rem", height: "25rem" }}
    />
  )
}