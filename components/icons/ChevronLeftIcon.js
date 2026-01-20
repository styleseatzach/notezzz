import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function ChevronLeftIcon({ width = 24, height = 24, fill = "#3B3B3B" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.41412 12L16.707 19.2929L15.2928 20.7071L6.58569 12L15.2928 3.29291L16.707 4.70712L9.41412 12Z"
        fill={fill}
      />
    </Svg>
  );
}
