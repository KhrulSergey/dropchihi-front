import React from 'react';
import Sparkles from 'react-sparkle';

type SpeedMapType = Record<string, number>;
const speedMap: SpeedMapType = {
  'slowest': 10,
  'slower': 50,
  'slow': 100,
  'normal': 150,
  'fast': 200,
  'faster': 300,
  'fastest': 500,
};
const speedFadeValueMultiplier = 10;

interface ISparkleBackground {
  speed: 'slowest' | 'slower' | 'slow' | 'normal' | 'fast' | 'faster' | 'fastest';
}

const SparkleBackground = (props: ISparkleBackground) => {

  return (
    <Sparkles
      color={'white'}
      count={30}
      minSize={2}
      maxSize={8}
      overflowPx={speedMap[props.speed]}
      newSparkleOnFadeOut={true}
      fadeOutSpeed={speedMap[props.speed] / speedFadeValueMultiplier}
      flicker={true}
      flickerSpeed={props.speed}
    />
  );
};

export default SparkleBackground;
