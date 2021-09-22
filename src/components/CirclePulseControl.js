import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import circlePulse from '../lotties/circle-pulse.json';

const CirclePulseControl = () => {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: circlePulse,
      autoplay: false,
      name: "controlled"
    })
  }, [])

  const playLottie = () => {
    lottie.play("controlled") 
    // pass in a name to target a specific animation
    // otherwise lottie.play() will affect all lottie animations
  }

  const pauseLottie = () => {
    lottie.pause("controlled")
  }

  return (
    <div class="circle-pulse">
      <div ref={container}></div>
      <div class="controls">
        <button onClick={playLottie}>Play</button>
        <button onClick={pauseLottie}>Pause</button>
      </div>
    </div>
  )
}

export default CirclePulseControl