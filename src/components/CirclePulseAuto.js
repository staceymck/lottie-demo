import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import circlePulse from '../lotties/circle-pulse.json';

const CirclePulseAuto = () => {

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: circlePulse

      // Configuration options include...
        // animationData: an Object with the exported animation data.
        // path: the relative path to the animation object. (animationData and path are mutually exclusive)
        // loop: true / false / number
        // autoplay: true / false it will start playing as soon as it is ready
        // name: animation name for future reference
        // renderer: 'svg' / 'canvas' / 'html' to set the renderer
        // container: the dom element on which to render the animation
      // Source: https://airbnb.io/lottie/#/web?id=usage
    })
  }, [])

  return (
    <div ref={container} class="circle-pulse">
    </div>
  )
}

export default CirclePulseAuto