import React from 'react';
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

export default function SchoolIcon({ width = 24, height = 24, fill = "#3B3B3B" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 96 96" fill="none">
      <G clipPath="url(#clip0_283_24007)">
        <Path
          d="M48 12L4 36L20 44.72V68.72L48 84L76 68.72V44.72L84 40.36V68H92V36L48 12ZM75.28 36L48 50.88L20.72 36L48 21.12L75.28 36ZM68 63.96L48 74.88L28 63.96V49.08L48 60L68 49.08V63.96Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_283_24007">
          <Rect width="96" height="96" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
