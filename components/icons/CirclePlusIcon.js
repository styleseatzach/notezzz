import React from 'react';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

export default function CirclePlusIcon({ width = 24, height = 24, fill = "#3B3B3B" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_2002_333)">
        <Path
          d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2002_333">
          <Rect width="24" height="24" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
}
