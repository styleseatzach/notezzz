import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Svg, { G, Rect, Line, Circle, Text as SvgText } from 'react-native-svg';
import { colors, camelotColors } from '../../styles/colors';
import { fontFamilies } from '../../styles/typography';
import {
  STANDARD_TUNING,
  FRET_MARKERS,
  getScalePattern,
  getScaleDegree,
} from '../../utils/chairSystem';

/**
 * VerticalFullNeck - Full fretboard rendered vertically
 * Strings run left-to-right (low E on left), frets run top-to-bottom
 * Perfect for scrollable full scale visualization
 *
 * @param {Object} props
 * @param {Object} props.scale - {root, type, extended} scale configuration
 * @param {string} props.labelMode - 'letters' | 'majorIntervals' | 'minorIntervals'
 * @param {string} props.camelotNumber - Camelot number for color theming
 * @param {number} props.maxFrets - Maximum frets to show (default 24)
 */
const VerticalFullNeck = ({
  scale = { root: 'G', type: 'major', extended: false },
  labelMode = 'letters',
  camelotNumber = null,
  maxFrets = 24,
}) => {
  const numFrets = maxFrets;
  const numStrings = 6;

  // SVG dimensions - vertical layout
  const stringSpacing = 44; // Horizontal spacing between strings
  const fretHeight = 48;    // Vertical spacing between frets
  const leftMargin = 30;    // Space for string names
  const topMargin = 30;     // Space for fret 0 / nut
  const nutHeight = 8;

  const totalWidth = leftMargin + (numStrings * stringSpacing) + 20;
  const totalHeight = topMargin + nutHeight + (numFrets * fretHeight) + 20;

  // Get scale type for pattern
  const getScaleType = () => {
    const { type, extended } = scale;
    if (extended) {
      return type === 'major' ? 'major' : 'minor';
    }
    return type === 'major' ? 'majorPentatonic' : 'minorPentatonic';
  };

  const scaleType = getScaleType();
  const pattern = getScalePattern(scale.root, scaleType, 0, numFrets, false);

  // Get colors for a scale degree using ONLY Camelot colors
  // Root = medium fill, others = light fill with medium outline
  const getColorsForNote = (colorKey) => {
    if (camelotNumber && camelotColors[camelotNumber]) {
      const camelot = camelotColors[camelotNumber];

      if (colorKey === 'root') {
        // Root note - filled with medium color, no outline needed
        return {
          fill: camelot.medium,
          stroke: null,
          textColor: '#FFFFFF',
        };
      } else {
        // All other notes - light fill with medium outline
        return {
          fill: camelot.light,
          stroke: camelot.medium,
          textColor: camelot.dark,
        };
      }
    }
    // Fallback grey shades if no Camelot number
    if (colorKey === 'root') {
      return {
        fill: colors.grey600,
        stroke: null,
        textColor: '#FFFFFF',
      };
    }
    return {
      fill: colors.grey100,
      stroke: colors.grey400,
      textColor: colors.grey700,
    };
  };

  // Get label for a note
  const getLabel = (note, interval) => {
    if (labelMode === 'letters') {
      return note;
    } else if (labelMode === 'majorIntervals') {
      return getScaleDegree(interval, 'majorPentatonic') || getScaleDegree(interval, 'major');
    } else if (labelMode === 'minorIntervals') {
      return getScaleDegree(interval, 'minorPentatonic') || getScaleDegree(interval, 'minor');
    }
    return note;
  };

  // Calculate X position for a string (0 = low E on left)
  const getStringX = (stringIndex) => {
    return leftMargin + (stringIndex * stringSpacing) + (stringSpacing / 2);
  };

  // Calculate Y position for a fret
  const getFretY = (fret) => {
    return topMargin + nutHeight + (fret * fretHeight);
  };

  // Render nut
  const renderNut = () => (
    <Rect
      key="nut"
      x={leftMargin}
      y={topMargin}
      width={numStrings * stringSpacing}
      height={nutHeight}
      fill={colors.grey800}
      rx={2}
    />
  );

  // Render string labels at top
  const renderStringLabels = () => {
    return STANDARD_TUNING.map((note, index) => {
      const x = getStringX(index);
      return (
        <SvgText
          key={`string-label-${index}`}
          x={x}
          y={topMargin - 8}
          fontSize={12}
          fontWeight="500"
          fontFamily={fontFamilies.body}
          fill={colors.grey700}
          textAnchor="middle"
        >
          {note}
        </SvgText>
      );
    });
  };

  // Render fret numbers on left
  const renderFretNumbers = () => {
    const numbers = [];
    for (let fret = 1; fret <= numFrets; fret++) {
      const y = getFretY(fret) - (fretHeight / 2);
      numbers.push(
        <SvgText
          key={`fret-num-${fret}`}
          x={12}
          y={y + 4}
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

  // Render fretboard grid (no background)
  const renderFretboard = () => {
    const elements = [];

    // Fret lines (horizontal)
    for (let fret = 0; fret <= numFrets; fret++) {
      const y = getFretY(fret);
      elements.push(
        <Line
          key={`fret-line-${fret}`}
          x1={leftMargin}
          y1={y}
          x2={leftMargin + (numStrings * stringSpacing)}
          y2={y}
          stroke={colors.grey400}
          strokeWidth={fret === 0 ? 0 : 2}
        />
      );
    }

    // String lines (vertical)
    for (let string = 0; string < numStrings; string++) {
      const x = getStringX(string);
      // Thicker strings for bass (strings 0-2 are E, A, D)
      const stringWeight = string <= 2 ? 2.5 : 1.5;
      elements.push(
        <Line
          key={`string-line-${string}`}
          x1={x}
          y1={topMargin}
          x2={x}
          y2={topMargin + nutHeight + (numFrets * fretHeight)}
          stroke={colors.grey600}
          strokeWidth={stringWeight}
        />
      );
    }

    return elements;
  };

  // Render fret markers (dots at 3, 5, 7, 9, 12, 15, etc.)
  const renderFretMarkers = () => {
    const markers = [];
    const centerX = leftMargin + (numStrings * stringSpacing) / 2;

    for (let fret = 1; fret <= numFrets; fret++) {
      const y = getFretY(fret) - (fretHeight / 2);

      if (FRET_MARKERS.single.includes(fret)) {
        markers.push(
          <Circle
            key={`marker-${fret}`}
            cx={centerX}
            cy={y}
            r={5}
            fill={colors.grey200}
          />
        );
      } else if (FRET_MARKERS.double.includes(fret)) {
        // Double dots for 12th fret
        markers.push(
          <Circle
            key={`marker-${fret}-1`}
            cx={centerX - stringSpacing}
            cy={y}
            r={5}
            fill={colors.grey200}
          />
        );
        markers.push(
          <Circle
            key={`marker-${fret}-2`}
            cx={centerX + stringSpacing}
            cy={y}
            r={5}
            fill={colors.grey200}
          />
        );
      }
    }

    return markers;
  };

  // Render scale notes
  const renderScaleNotes = () => {
    return pattern.map((pos, index) => {
      const x = getStringX(pos.string);
      const y = pos.fret === 0
        ? topMargin + nutHeight / 2
        : getFretY(pos.fret) - (fretHeight / 2);

      const noteColors = getColorsForNote(pos.colorKey);
      const label = getLabel(pos.note, pos.interval);
      const isRoot = pos.colorKey === 'root';
      const radius = isRoot ? 16 : 14;

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
            y={y + 5}
            fontSize={label.length > 2 ? 10 : 12}
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

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerStyle={styles.scrollContent}
      >
        <Svg
          width={totalWidth}
          height={totalHeight}
          viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        >
          {renderFretMarkers()}
          {renderFretboard()}
          {renderNut()}
          {renderStringLabels()}
          {renderFretNumbers()}
          {renderScaleNotes()}
        </Svg>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 8,
  },
});

export default VerticalFullNeck;
