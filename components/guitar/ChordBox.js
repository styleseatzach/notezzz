import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { G, Rect, Line, Circle, Text as SvgText, Path } from 'react-native-svg';
import { colors, camelotColors } from '../../styles/colors';
import { fontFamilies } from '../../styles/typography';
import { getChordVoicings, getDisplayVoicing } from '../../utils/chordVoicings';

/**
 * ChordBox - Vertical guitar chord diagram (like Ultimate Guitar style)
 * Shows finger positions, open/muted strings, barre indicators
 * Supports multiple voicings with navigation arrows
 *
 * @param {Object} props
 * @param {string} props.chordName - Display name (e.g., "C Major", "Am7")
 * @param {string} props.root - Root note (e.g., "C", "A")
 * @param {string} props.chordType - Chord type ('major', 'minor', 'diminished', etc.)
 * @param {string} props.camelotNumber - For color theming
 * @param {number} props.width - Component width
 * @param {number} props.height - Component height
 * @param {boolean} props.showTitle - Show chord name above diagram
 * @param {boolean} props.showNavigation - Show voicing navigation (arrows + "1 of N")
 * @param {number} props.initialVoicingIndex - Starting voicing index
 */
const ChordBox = ({
  chordName,
  root,
  chordType = 'major',
  camelotNumber = null,
  width = 100,
  height = 130,
  showTitle = true,
  showNavigation = true,
  initialVoicingIndex = 0,
}) => {
  // Get all voicings for this chord
  const voicings = getChordVoicings(root, chordType);
  const [voicingIndex, setVoicingIndex] = useState(initialVoicingIndex);

  // Navigation handlers
  const goToPrevious = () => {
    setVoicingIndex((prev) => (prev > 0 ? prev - 1 : voicings.length - 1));
  };

  const goToNext = () => {
    setVoicingIndex((prev) => (prev < voicings.length - 1 ? prev + 1 : 0));
  };

  if (!voicings || voicings.length === 0) {
    return (
      <View style={[styles.container, { width, height: height + (showNavigation ? 30 : 0) }]}>
        {showTitle && <Text style={styles.chordName}>{chordName || `${root} ${chordType}`}</Text>}
        <View style={styles.noVoicing}>
          <Text style={styles.noVoicingText}>No voicing</Text>
        </View>
      </View>
    );
  }

  const currentVoicing = voicings[voicingIndex];
  const display = getDisplayVoicing(currentVoicing);
  const { frets, fingers, barre, baseFret, showPosition, numFrets, name } = display;

  // SVG dimensions
  const titleHeight = showTitle ? 20 : 0;
  const navHeight = showNavigation ? 28 : 0;
  const topMargin = 20; // Space for X/O markers
  const leftMargin = showPosition ? 20 : 10;
  const rightMargin = 10;
  const bottomMargin = 5;

  const diagramWidth = width - leftMargin - rightMargin;
  const diagramHeight = height - titleHeight - topMargin - bottomMargin;

  const stringSpacing = diagramWidth / 5; // 6 strings, 5 gaps
  const fretSpacing = diagramHeight / numFrets;
  const nutHeight = 4;

  // String positions (0 = low E on left)
  const getStringX = (stringIndex) => leftMargin + (stringIndex * stringSpacing);

  // Fret positions
  const getFretY = (fretNum) => topMargin + (fretNum * fretSpacing);

  // Get themed color
  const getDotColor = () => {
    if (camelotNumber && camelotColors[camelotNumber]) {
      return camelotColors[camelotNumber].dark;
    }
    return colors.grey800;
  };

  const dotColor = getDotColor();
  const dotRadius = Math.min(stringSpacing, fretSpacing) * 0.35;

  // Render the nut (thick top line) or position marker
  const renderNut = () => {
    if (!showPosition) {
      // Show nut (thick line at top)
      return (
        <Rect
          x={leftMargin - 2}
          y={topMargin - nutHeight}
          width={diagramWidth + 4}
          height={nutHeight}
          fill={colors.grey800}
          rx={1}
        />
      );
    }
    return null;
  };

  // Render position number
  const renderPosition = () => {
    if (showPosition) {
      return (
        <SvgText
          x={8}
          y={getFretY(0.5) + 4}
          fontSize={10}
          fontWeight="500"
          fontFamily={fontFamilies.body}
          fill={colors.grey600}
          textAnchor="middle"
        >
          {baseFret}
        </SvgText>
      );
    }
    return null;
  };

  // Render fret lines
  const renderFrets = () => {
    const lines = [];
    for (let i = 0; i <= numFrets; i++) {
      const y = getFretY(i);
      lines.push(
        <Line
          key={`fret-${i}`}
          x1={leftMargin}
          y1={y}
          x2={leftMargin + diagramWidth}
          y2={y}
          stroke={colors.grey400}
          strokeWidth={i === 0 && !showPosition ? 0 : 1.5}
        />
      );
    }
    return lines;
  };

  // Render string lines
  const renderStrings = () => {
    const lines = [];
    for (let i = 0; i < 6; i++) {
      const x = getStringX(i);
      lines.push(
        <Line
          key={`string-${i}`}
          x1={x}
          y1={topMargin}
          x2={x}
          y2={topMargin + diagramHeight}
          stroke={colors.grey500}
          strokeWidth={1}
        />
      );
    }
    return lines;
  };

  // Render X and O markers above nut
  const renderStringMarkers = () => {
    const markers = [];
    frets.forEach((fret, stringIndex) => {
      const x = getStringX(stringIndex);
      const y = topMargin - 10;

      if (fret === -1) {
        // Muted string - X
        markers.push(
          <G key={`marker-${stringIndex}`}>
            <Line
              x1={x - 4}
              y1={y - 4}
              x2={x + 4}
              y2={y + 4}
              stroke={colors.grey600}
              strokeWidth={1.5}
            />
            <Line
              x1={x + 4}
              y1={y - 4}
              x2={x - 4}
              y2={y + 4}
              stroke={colors.grey600}
              strokeWidth={1.5}
            />
          </G>
        );
      } else if (fret === 0) {
        // Open string - O
        markers.push(
          <Circle
            key={`marker-${stringIndex}`}
            cx={x}
            cy={y}
            r={4}
            fill="none"
            stroke={colors.grey600}
            strokeWidth={1.5}
          />
        );
      }
    });
    return markers;
  };

  // Render barre if present
  const renderBarre = () => {
    if (!barre) return null;

    const startX = getStringX(barre.startString);
    const endX = getStringX(barre.endString);
    const y = getFretY(barre.fret) - (fretSpacing / 2);
    const barreHeight = dotRadius * 1.8;

    return (
      <Rect
        x={startX - dotRadius}
        y={y - barreHeight / 2}
        width={endX - startX + dotRadius * 2}
        height={barreHeight}
        rx={barreHeight / 2}
        fill={dotColor}
      />
    );
  };

  // Render finger dots
  const renderDots = () => {
    const dots = [];

    frets.forEach((fret, stringIndex) => {
      if (fret <= 0) return; // Skip muted and open strings

      const x = getStringX(stringIndex);
      const y = getFretY(fret) - (fretSpacing / 2);
      const finger = fingers?.[stringIndex];

      // Skip if this position is covered by a barre
      if (barre && fret === barre.fret && stringIndex >= barre.startString && stringIndex <= barre.endString) {
        // Only show the finger number on the barre, not individual dots
        if (stringIndex === barre.startString && finger) {
          dots.push(
            <SvgText
              key={`finger-barre-${stringIndex}`}
              x={x}
              y={y + 4}
              fontSize={10}
              fontWeight="600"
              fontFamily={fontFamilies.body}
              fill="#FFFFFF"
              textAnchor="middle"
            >
              {finger}
            </SvgText>
          );
        }
        return;
      }

      dots.push(
        <G key={`dot-${stringIndex}`}>
          <Circle
            cx={x}
            cy={y}
            r={dotRadius}
            fill={dotColor}
          />
          {finger && (
            <SvgText
              x={x}
              y={y + 4}
              fontSize={10}
              fontWeight="600"
              fontFamily={fontFamilies.body}
              fill="#FFFFFF"
              textAnchor="middle"
            >
              {finger}
            </SvgText>
          )}
        </G>
      );
    });

    return dots;
  };

  // Render navigation controls (like Ultimate Guitar's "< 1 of 4 >")
  const renderNavigation = () => {
    if (!showNavigation || voicings.length <= 1) return null;

    return (
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={goToPrevious}
          style={styles.navButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.navArrow}>{'<'}</Text>
        </TouchableOpacity>

        <Text style={styles.navText}>
          {voicingIndex + 1} of {voicings.length}
        </Text>

        <TouchableOpacity
          onPress={goToNext}
          style={styles.navButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.navArrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.container, { width }]}>
      {showTitle && (
        <Text style={styles.chordName} numberOfLines={1}>
          {chordName || `${root}${chordType === 'major' ? '' : chordType === 'minor' ? 'm' : chordType}`}
        </Text>
      )}
      <Svg
        width={width}
        height={height - titleHeight}
        viewBox={`0 0 ${width} ${height - titleHeight}`}
      >
        {renderNut()}
        {renderPosition()}
        {renderFrets()}
        {renderStrings()}
        {renderStringMarkers()}
        {renderBarre()}
        {renderDots()}
      </Svg>
      {renderNavigation()}
      {showNavigation && name && voicings.length > 1 && (
        <Text style={styles.voicingName} numberOfLines={1}>{name}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  chordName: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: fontFamilies.body,
    color: colors.grey800,
    marginBottom: 4,
    textAlign: 'center',
  },
  noVoicing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noVoicingText: {
    fontSize: 10,
    fontFamily: fontFamilies.body,
    color: colors.grey400,
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    gap: 8,
  },
  navButton: {
    padding: 4,
  },
  navArrow: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: fontFamilies.body,
    color: colors.grey600,
  },
  navText: {
    fontSize: 11,
    fontFamily: fontFamilies.body,
    color: colors.grey600,
    minWidth: 45,
    textAlign: 'center',
  },
  voicingName: {
    fontSize: 9,
    fontFamily: fontFamilies.body,
    color: colors.grey500,
    marginTop: 2,
    textAlign: 'center',
  },
});

export default ChordBox;
