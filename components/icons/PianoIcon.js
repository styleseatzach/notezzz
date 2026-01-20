import React from 'react';
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

export default function PianoIcon({ width = 24, height = 24, fill = "#3B3B3B" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 96 96" fill="none">
      <G clipPath="url(#clip0_283_24006)">
        <Path
          d="M76 12H20C15.6 12 12 15.6 12 20V76C12 80.4 15.6 84 20 84H76C80.4 84 84 80.4 84 76V20C84 15.6 80.4 12 76 12ZM56 58H57V76H39V58H40C42.2 58 44 56.2 44 54V20H52V54C52 56.2 53.8 58 56 58ZM20 20H28V54C28 56.2 29.8 58 32 58H33V76H20V20ZM76 76H63V58H64C66.2 58 68 56.2 68 54V20H76V76Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_283_24006">
          <Rect width="96" height="96" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
