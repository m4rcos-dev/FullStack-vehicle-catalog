import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { loadingAnimation } from '../assets';

function Loading() {
  return (
    <div>
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: '300px', width: '300px', marginBottom: '80px' }}
      />
    </div>
  )
}

export default Loading
