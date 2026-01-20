import React from 'react';
import { Svg, Circle } from 'react-native-svg';

export default function CamelotWheelIcon({ width = 24, height = 24, fill = "#3B3B3B" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      {/* Outer circle */}
      <Circle
        cx="12"
        cy="12"
        r="10"
        stroke={fill}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Middle circle */}
      <Circle
        cx="12"
        cy="12"
        r="6"
        stroke={fill}
        strokeWidth="1.5"
        fill="none"
      />
      {/* Inner circle (filled) */}
      <Circle
        cx="12"
        cy="12"
        r="2"
        fill={fill}
      />
    </Svg>
  );
}
