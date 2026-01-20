import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { G, Rect, Line, Circle, Text as SvgText } from 'react-native-svg';
import { colors, camelotColors } from '../../styles/colors';
import { fontFamilies } from '../../styles/typography';
import {
  STANDARD_TUNING,
  getScalePattern,
  findRootPositionFret,
} from '../../utils/chairSystem';


/**
 * GuitarNeckCompact - Horizontal compact fretboard for cards and previews
 * Shows first chair position with starting fret number for orientation
 *
 * @param {Object} props
 * @param {Object} props.scale - {root, type, extended} scale configuration
 * @param {string} props.camelotNumber - Camelot number for color theming
 * @param {number} props.numFrets - Number of frets to display (default 5)
 * @param {number} props.startFret - Override starting fret
 * @param {number} props.width - Component width
 * @param {number} props.height - Component height
 */
const GuitarNeckCompact = ({
  scale = { root: 'G', type: 'major', extended: false },
  camelotNumber = null,
  numFrets = 5,
  startFret = null,
  width = 200,
  height = 80,
}) => {
  // Calculate starting fret
  const calculatedStartFret = startFret !== null
    ? startFret
    : findRootPositionFret(scale.root);

  const endFret = calculatedStartFret + numFrets - 1;

  // Calculate dimensions
  const leftPadding = 24; // Space for fret number
  const topPadding = 4;
  const bottomPadding = 4;
  const rightPadding = 8;

  const fretboardWidth = width - leftPadding - rightPadding;
  const fretboardHeight = height - topPadding - bottomPadding;

  const fretWidth = fretboardWidth / numFrets;
  const stringSpacing = fretboardHeight / 5; // 6 strings, 5 gaps

  // Get scale type
  const getScaleType = () => {
    const { type, extended } = scale;
    if (extended) {
      return type === 'major' ? 'major' : 'minor';
    }
    return type === 'major' ? 'majorPentatonic' : 'minorPentatonic';
  };

  const scaleType = getScaleType();
  const pattern = getScalePattern(
    scale.root,
    scaleType,
    calculatedStartFret,
    endFret,
    false
  );

  // Get colors for note - root = medium fill, others = light fill with medium outline
  const getColorsForNote = (colorKey) => {
    if (camelotNumber && camelotColors[camelotNumber]) {
      const camelot = camelotColors[camelotNumber];
      if (colorKey === 'root') {
        return { fill: camelot.medium, stroke: null };
      }
      return { fill: camelot.light, stroke: camelot.medium };
    }
    // Fallback greys
    if (colorKey === 'root') {
      return { fill: colors.grey600, stroke: null };
    }
    return { fill: colors.grey100, stroke: colors.grey400 };
  };

  // Calculate X position for a fret
  const getFretX = (fret) => {
    return leftPadding + ((fret - calculatedStartFret) * fretWidth);
  };

  // Calculate Y position for a string (0 = low E at bottom)
  const getStringY = (stringIndex) => {
    const flippedIndex = 5 - stringIndex;
    return topPadding + (flippedIndex * stringSpacing);
  };

  // Render fretboard
  const renderFretboard = () => {
    const elements = [];

    // Wood background
    elements.push(
      <Rect
        key="background"
        x={leftPadding}
        y={topPadding}
        width={fretboardWidth}
        height={fretboardHeight}
        fill="#F5E6D3"
        rx={2}
      />
    );

    // Fret lines
    for (let i = 0; i <= numFrets; i++) {
      const x = leftPadding + (i * fretWidth);
      elements.push(
        <Line
          key={`fret-${i}`}
          x1={x}
          y1={topPadding}
          x2={x}
          y2={topPadding + fretboardHeight}
          stroke={colors.grey400}
          strokeWidth={1.5}
        />
      );
    }

    // String lines
    for (let i = 0; i < 6; i++) {
      const y = getStringY(i);
      const stringWeight = i <= 2 ? 1.5 : 1;
      elements.push(
        <Line
          key={`string-${i}`}
          x1={leftPadding}
          y1={y}
          x2={leftPadding + fretboardWidth}
          y2={y}
          stroke={colors.grey500}
          strokeWidth={stringWeight}
        />
      );
    }

    return elements;
  };

  // Render starting fret number
  const renderFretNumber = () => {
    return (
      <SvgText
        x={12}
        y={height / 2 + 4}
        fontSize={12}
        fontWeight="500"
        fontFamily={fontFamilies.body}
        fill={colors.grey600}
        textAnchor="middle"
      >
        {calculatedStartFret}
      </SvgText>
    );
  };

  // Render scale notes
  const renderScaleNotes = () => {
    return pattern.map((pos, index) => {
      const x = getFretX(pos.fret) + (fretWidth / 2);
      const y = getStringY(pos.string);
      const noteColors = getColorsForNote(pos.colorKey);

      const isRoot = pos.colorKey === 'root';
      const radius = isRoot ? 7 : 5;

      return (
        <Circle
          key={`note-${index}`}
          cx={x}
          cy={y}
          r={radius}
          fill={noteColors.fill}
          stroke={noteColors.stroke}
          strokeWidth={noteColors.stroke ? 1.5 : 0}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {renderFretboard()}
        {renderFretNumber()}
        {renderScaleNotes()}
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

export default GuitarNeckCompact;
