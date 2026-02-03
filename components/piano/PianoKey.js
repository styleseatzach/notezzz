import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import { colors } from '../../styles/colors';
import { fontFamilies } from '../../styles/typography';

const PianoKey = ({
  note,
  isBlackKey = false,
  isHighlighted = false,
  highlightColor = '#E4C478',
  showLabel = true,
}) => {
  // Aspect ratio configurations - height relative to width
  // From Figma: aspect-[24.416/93.304] means width:height ratio of ~1:3.82
  const aspectRatio = 93.304 / 24.416; // height / width = ~3.82
  // From Figma: inset-[0_88.62%_41.12%_5.23%] means black key is 100% - 41.12% = 58.88% of white key height
  const blackHeightRatio = 1 - 0.4112; // ~0.5888 or ~59%

  // Responsive font size - will scale with the SVG
  const fontSize = 48;
  const bottomPadding = 20; // Space beneath the label

  // Determine colors
  let fillColor;
  if (isHighlighted) {
    fillColor = highlightColor;
  } else if (isBlackKey) {
    fillColor = colors.grey900; // #272830
  } else {
    fillColor = colors.white;
  }

  const strokeColor = colors.grey200; // #D7D7D7
  const labelColor = isBlackKey ? colors.white : colors.black;

  // Use viewBox with aspect ratio to maintain proportions
  // White key: 100 wide x (100 * aspectRatio) tall
  const viewBoxWidth = 100;
  const whiteKeyHeight = viewBoxWidth * aspectRatio;
  const viewBoxHeight = whiteKeyHeight;

  // Padding-top as percentage of width maintains aspect ratio
  // For white keys: paddingTop = height/width * 100% = aspectRatio * 100%
  // For black keys: We want the HEIGHT to be blackHeightRatio * white key height
  // But padding-top % is relative to the black key's WIDTH (which is 60% of white key width)
  // So: blackKeyHeight = aspectRatio * blackHeightRatio * whiteKeyWidth
  //     padding % = (blackKeyHeight / blackKeyWidth) * 100
  //     padding % = (aspectRatio * blackHeightRatio * whiteKeyWidth) / (0.6 * whiteKeyWidth) * 100
  //     padding % = (aspectRatio * blackHeightRatio / 0.6) * 100
  const paddingTop = isBlackKey
    ? `${(aspectRatio * blackHeightRatio / 0.6) * 100}%`
    : `${aspectRatio * 100}%`;

  return (
    <View style={[styles.container, { paddingTop }]}>
      <Svg style={styles.svg} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} preserveAspectRatio="none">
        <Rect
          x={0}
          y={0}
          width={viewBoxWidth}
          height={viewBoxHeight}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={1}
          rx={2}
        />
        {showLabel && (
          <SvgText
            x={viewBoxWidth / 2}
            y={isBlackKey ? viewBoxHeight - bottomPadding : viewBoxHeight - bottomPadding}
            fontSize={isBlackKey ? fontSize * 0.7 : fontSize}
            fill={labelColor}
            textAnchor="middle"
            fontWeight="400"
            fontFamily={fontFamilies.body}
          >
            {note}
          </SvgText>
        )}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

export default PianoKey;
