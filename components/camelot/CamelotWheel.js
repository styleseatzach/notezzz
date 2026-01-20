import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Svg, { G, Path, Circle, Text as SvgText } from 'react-native-svg';
import { colors, camelotColors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const CamelotWheel = ({ size = 320, onSegmentPress }) => {
  const centerX = size / 2;
  const centerY = size / 2;
  const outerRadius = size / 2 - 10;
  const innerRadius = size / 3;
  const middleRadius = (outerRadius + innerRadius) / 2;

  // Musical keys in Camelot order (starting at 12 o'clock, going clockwise)
  // Based on keys.json mapping
  const keys = [
    { camelot: '1', major: 'B', minor: 'G♯m', color: camelotColors['1'] },
    { camelot: '2', major: 'F♯', minor: 'D♯m', color: camelotColors['2'] },
    { camelot: '3', major: 'C♯', minor: 'A♯m', color: camelotColors['3'] },
    { camelot: '4', major: 'G♯', minor: 'Fm', color: camelotColors['4'] },
    { camelot: '5', major: 'D♯', minor: 'Cm', color: camelotColors['5'] },
    { camelot: '6', major: 'A♯', minor: 'Gm', color: camelotColors['6'] },
    { camelot: '7', major: 'F', minor: 'Dm', color: camelotColors['7'] },
    { camelot: '8', major: 'C', minor: 'Am', color: camelotColors['8'] },
    { camelot: '9', major: 'G', minor: 'Em', color: camelotColors['9'] },
    { camelot: '10', major: 'D', minor: 'Bm', color: camelotColors['10'] },
    { camelot: '11', major: 'A', minor: 'F♯m', color: camelotColors['11'] },
    { camelot: '12', major: 'E', minor: 'C♯m', color: camelotColors['12'] },
  ];

  // Create SVG path for a segment
  const createSegmentPath = (index, isOuter) => {
    const angleStep = (2 * Math.PI) / 12;
    const startAngle = index * angleStep - Math.PI / 2; // Start at top (12 o'clock)
    const endAngle = startAngle + angleStep;

    const r1 = isOuter ? innerRadius : 0;
    const r2 = isOuter ? outerRadius : innerRadius;

    const x1 = centerX + r1 * Math.cos(startAngle);
    const y1 = centerY + r1 * Math.sin(startAngle);
    const x2 = centerX + r2 * Math.cos(startAngle);
    const y2 = centerY + r2 * Math.sin(startAngle);
    const x3 = centerX + r2 * Math.cos(endAngle);
    const y3 = centerY + r2 * Math.sin(endAngle);
    const x4 = centerX + r1 * Math.cos(endAngle);
    const y4 = centerY + r1 * Math.sin(endAngle);

    const largeArc = angleStep > Math.PI ? 1 : 0;

    return `
      M ${x1} ${y1}
      L ${x2} ${y2}
      A ${r2} ${r2} 0 ${largeArc} 1 ${x3} ${y3}
      L ${x4} ${y4}
      A ${r1} ${r1} 0 ${largeArc} 0 ${x1} ${y1}
      Z
    `;
  };

  // Calculate text position
  const getTextPosition = (index, isOuter) => {
    const angleStep = (2 * Math.PI) / 12;
    const angle = index * angleStep - Math.PI / 2 + angleStep / 2;
    const radius = isOuter ? (outerRadius + innerRadius) / 2 : innerRadius / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G>
          {/* Outer ring - Major keys */}
          {keys.map((key, index) => {
            const path = createSegmentPath(index, true);
            const textPos = getTextPosition(index, true);

            return (
              <G key={`major-${index}`}>
                <Path
                  d={path}
                  fill={key.color.medium}
                  stroke={colors.white}
                  strokeWidth={2}
                  onPress={() => onSegmentPress && onSegmentPress(key.camelot + 'B', key.major)}
                />
                <SvgText
                  x={textPos.x}
                  y={textPos.y - 8}
                  fontSize={14}
                  fontWeight="600"
                  fill={colors.black}
                  textAnchor="middle"
                >
                  {key.camelot}B
                </SvgText>
                <SvgText
                  x={textPos.x}
                  y={textPos.y + 8}
                  fontSize={12}
                  fill={colors.grey700}
                  textAnchor="middle"
                >
                  {key.major}
                </SvgText>
              </G>
            );
          })}

          {/* Inner ring - Minor keys */}
          {keys.map((key, index) => {
            const path = createSegmentPath(index, false);
            const textPos = getTextPosition(index, false);

            return (
              <G key={`minor-${index}`}>
                <Path
                  d={path}
                  fill={key.color.light}
                  stroke={colors.white}
                  strokeWidth={2}
                  onPress={() => onSegmentPress && onSegmentPress(key.camelot + 'A', key.minor)}
                />
                <SvgText
                  x={textPos.x}
                  y={textPos.y - 6}
                  fontSize={12}
                  fontWeight="600"
                  fill={colors.black}
                  textAnchor="middle"
                >
                  {key.camelot}A
                </SvgText>
                <SvgText
                  x={textPos.x}
                  y={textPos.y + 6}
                  fontSize={10}
                  fill={colors.grey700}
                  textAnchor="middle"
                >
                  {key.minor}
                </SvgText>
              </G>
            );
          })}

          {/* Center circle */}
          <Circle
            cx={centerX}
            cy={centerY}
            r={20}
            fill={colors.purple900}
          />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CamelotWheel;
