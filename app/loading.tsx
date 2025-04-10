'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import loaderAnimation from '@/public/preloading-1.json'; // ajuste le chemin si nécessaire

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Player
        autoplay
        loop
        src={loaderAnimation}
        style={{ height: '200px', width: '200px' }}
      />
    </div>
  );
};

export default Loading;

  