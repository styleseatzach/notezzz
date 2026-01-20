import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { G, Rect, Line, Circle, Text as SvgText } from 'react-native-svg';
import { colors, camelotColors } from '../../styles/colors';
import { fontFamilies } from '../../styles/typography';
import {
  STANDARD_TUNING,
  FRET_MARKERS,
  getScalePattern,
  getNoteAtFret,
  getScaleDegree,
  SCALE_INTERVALS,
} from '../../utils/chairSystem';


/**
 * Base GuitarNeck component - renders a guitar fretboard with scale patterns
 *
 * @param {Object} props
 * @param {Object} props.fretRange - {start, end} fret numbers to display
 * @param {Object} props.scale - {root, type, extended} scale configuration
 * @param {string} props.labelMode - 'letters' | 'majorIntervals' | 'minorIntervals'
 * @param {boolean} props.highlightChair - Whether to emphasize chair shapes
 * @param {boolean} props.showFretNumbers - Show fret numbers at top
 * @param {boolean} props.showStringNames - Show string names on left
 * @param {string} props.camelotNumber - Camelot number for color theming
 * @param {boolean} props.horizontal - Render horizontally (rotated)
 */
const GuitarNeck = ({
  fretRange = { start: 0, end: 12 },
  scale = { root: 'G', type: 'major', extended: false },
  labelMode = 'letters',
  highlightChair = true,
  showFretNumbers = true,
  showStringNames = true,
  camelotNumber = null,
  horizontal = false,
}) => {
  const numFrets = fretRange.end - fretRange.start + 1;
  const numStrings = 6;

  // SVG dimensions
  const fretWidth = 50;
  const stringSpacing = 24;
  const leftMargin = showStringNames ? 30 : 10;
  const topMargin = showFretNumbers ? 24 : 10;
  const nutWidth = fretRange.start === 0 ? 8 : 0;

  const totalWidth = leftMargin + nutWidth + (numFrets * fretWidth) + 10;
  const totalHeight = topMargin + (numStrings * stringSpacing) + 10;

  // Get scale type for pattern
  const getScaleType = () => {
    const { type, extended } = scale;
    if (extended) {
      return type === 'major' ? 'major' : 'minor';
    }
    return type === 'major' ? 'majorPentatonic' : 'minorPentatonic';
  };

  // Get scale pattern positions
  const scaleType = getScaleType();
  const pattern = getScalePattern(
    scale.root,
    scaleType,
    fretRange.start,
    fretRange.end,
    false
  );

  // Get colors for a scale degree - root = medium fill, others = light fill with medium outline
  const getColorsForNote = (colorKey) => {
    if (camelotNumber && camelotColors[camelotNumber]) {
      const camelot = camelotColors[camelotNumber];
      if (colorKey === 'root') {
        return { fill: camelot.medium, stroke: null, textColor: '#FFFFFF' };
      }
      return { fill: camelot.light, stroke: camelot.medium, textColor: camelot.dark };
    }
    // Fallback greys
    if (colorKey === 'root') {
      return { fill: colors.grey600, stroke: null, textColor: '#FFFFFF' };
    }
    return { fill: colors.grey100, stroke: colors.grey400, textColor: colors.grey700 };
  };

  // Get label for a note based on mode
  const getLabel = (note, interval, scaleType) => {
    if (labelMode === 'letters') {
      return note;
    } else if (labelMode === 'majorIntervals') {
      return getScaleDegree(interval, 'majorPentatonic') || getScaleDegree(interval, 'major');
    } else if (labelMode === 'minorIntervals') {
      return getScaleDegree(interval, 'minorPentatonic') || getScaleDegree(interval, 'minor');
    }
    return note;
  };

  // Calculate X position for a fret
  const getFretX = (fret) => {
    return leftMargin + nutWidth + ((fret - fretRange.start) * fretWidth);
  };

  // Calculate Y position for a string (0 = low E at bottom in standard view)
  const getStringY = (stringIndex) => {
    // Flip so low E is at bottom
    const flippedIndex = 5 - stringIndex;
    return topMargin + (flippedIndex * stringSpacing) + (stringSpacing / 2);
  };

  // Render fret markers (dots)
  const renderFretMarkers = () => {
    const markers = [];
    const markerY = topMargin + (numStrings * stringSpacing) / 2;

    for (let fret = fretRange.start; fret <= fretRange.end; fret++) {
      const x = getFretX(fret) + (fretWidth / 2);

      if (FRET_MARKERS.single.includes(fret)) {
        markers.push(
          <Circle
            key={`marker-${fret}`}
            cx={x}
            cy={markerY}
            r={6}
            fill={colors.grey200}
          />
        );
      } else if (FRET_MARKERS.double.includes(fret)) {
        markers.push(
          <Circle
            key={`marker-${fret}-1`}
            cx={x}
            cy={markerY - stringSpacing}
            r={6}
            fill={colors.grey200}
          />
        );
        markers.push(
          <Circle
            key={`marker-${fret}-2`}
            cx={x}
            cy={markerY + stringSpacing}
            r={6}
            fill={colors.grey200}
          />
        );
      }
    }

    return markers;
  };

  // Render the fretboard grid
  const renderFretboard = () => {
    const elements = [];

    // Background
    elements.push(
      <Rect
        key="background"
        x={leftMargin + nutWidth}
        y={topMargin}
        width={numFrets * fretWidth}
        height={numStrings * stringSpacing}
        fill="#F5E6D3" // Wood color
        rx={2}
      />
    );

    // Nut (if starting from fret 0)
    if (fretRange.start === 0) {
      elements.push(
        <Rect
          key="nut"
          x={leftMargin}
          y={topMargin}
          width={nutWidth}
          height={numStrings * stringSpacing}
          fill={colors.grey800}
          rx={1}
        />
      );
    }

    // Fret lines
    for (let i = 0; i <= numFrets; i++) {
      const x = leftMargin + nutWidth + (i * fretWidth);
      elements.push(
        <Line
          key={`fret-${i}`}
          x1={x}
          y1={topMargin}
          x2={x}
          y2={topMargin + (numStrings * stringSpacing)}
          stroke={colors.grey400}
          strokeWidth={i === 0 && fretRange.start === 0 ? 0 : 2}
        />
      );
    }

    // String lines
    for (let i = 0; i < numStrings; i++) {
      const y = getStringY(i);
      // Thicker strings for bass notes
      const stringWeight = i <= 2 ? 2 : 1;
      elements.push(
        <Line
          key={`string-${i}`}
          x1={leftMargin}
          y1={y}
          x2={leftMargin + nutWidth + (numFrets * fretWidth)}
          y2={y}
          stroke={colors.grey600}
          strokeWidth={stringWeight}
        />
      );
    }

    return elements;
  };

  // Render string names
  const renderStringNames = () => {
    if (!showStringNames) return null;

    return STANDARD_TUNING.map((note, index) => {
      const y = getStringY(index);
      return (
        <SvgText
          key={`string-name-${index}`}
          x={8}
          y={y + 4}
          fontSize={10}
          fontWeight="500"
          fontFamily={fontFamilies.body}
          fill={colors.grey600}
          textAnchor="start"
        >
          {note}
        </SvgText>
      );
    });
  };

  // Render fret numbers
  const renderFretNumbers = () => {
    if (!showFretNumbers) return null;

    const numbers = [];
    for (let fret = fretRange.start; fret <= fretRange.end; fret++) {
      const x = getFretX(fret) + (fretWidth / 2);
      numbers.push(
        <SvgText
          key={`fret-num-${fret}`}
          x={x}
          y={14}
          fontSize={10}
          fontWeight="400"
          fontFamily={fontFamilies.body}
          fill={colors.grey500}
          textAnchor="middle"
        >
          {fret}
        </SvgText>
      );
    }
    return numbers;
  };

  // Render scale notes
  const renderScaleNotes = () => {
    return pattern.map((pos, index) => {
      const x = getFretX(pos.fret) + (fretWidth / 2);
      const y = getStringY(pos.string);
      const noteColors = getColorsForNote(pos.colorKey);
      const label = getLabel(pos.note, pos.interval, scaleType);

      // Determine dot size based on role
      const isRoot = pos.colorKey === 'root';
      const radius = isRoot ? 11 : 9;

      return (
        <G key={`note-${index}`}>
          <Circle
            cx={x}
            cy={y}
            r={radius}
            fill={noteColors.fill}
            stroke={noteColors.stroke}
            strokeWidth={noteColors.stroke ? 2 : 0}
          />
          <SvgText
            x={x}
            y={y + 4}
            fontSize={label.length > 2 ? 8 : 10}
            fontWeight="600"
            fontFamily={fontFamilies.body}
            fill={noteColors.textColor}
            textAnchor="middle"
          >
            {label}
          </SvgText>
        </G>
      );
    });
  };

  const svgStyle = horizontal
    ? { transform: [{ rotate: '-90deg' }] }
    : {};

  return (
    <View style={[styles.container, horizontal && styles.horizontalContainer]}>
      <Svg
        width={horizontal ? totalHeight : totalWidth}
        height={horizontal ? totalWidth : totalHeight}
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        style={svgStyle}
      >
        {renderFretMarkers()}
        {renderFretboard()}
        {renderStringNames()}
        {renderFretNumbers()}
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
  horizontalContainer: {
    // Additional styles for horizontal layout if needed
  },
});

export default GuitarNeck;
