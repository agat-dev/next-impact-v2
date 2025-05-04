"use client";

import { useEffect, useState } from "react";

interface LottieAnimationProps {
  animationPath: string;
  width?: string | number;
  height?: string | number;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottieAnimation({
  animationPath,
  width,
  height,
  loop = true,
  autoplay = true,
}: LottieAnimationProps) {
  const [LottieComponent, setLottieComponent] = useState<any>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Dynamically import Lottie
    import("lottie-react").then((module: typeof import("lottie-react")) => {
      setLottieComponent(() => module.default);
    });

    // Fetch the Lottie animation data
    fetch(animationPath)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Failed to load animation:", error));
  }, [animationPath]);

  if (!LottieComponent || !animationData) {
    return <></>;
  }

  return (
    <LottieComponent
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={{ width, height }}
    />
  );
}