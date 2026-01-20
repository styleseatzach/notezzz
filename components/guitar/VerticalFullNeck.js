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
import { getChordVoicings } from '../../utils/chordVoicings';
import FretboardNote from './FretboardNote';

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
 * @param {Function} props.onNotePress - Callback when a note is pressed (note, fret, string, chordInfo)
 * @param {Array} props.chords - Array of chord objects from the key data
 */
const VerticalFullNeck = ({
  scale = { root: 'G', type: 'major', extended: false },
  labelMode = 'letters',
  camelotNumber = null,
  maxFrets = 24,
  onNotePress = null,
  chords = [],
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

  // Find a chord voicing that uses the given note at the given fret/string position
  const findChordWithVoicingAtPosition = (note, fret, string) => {
    if (!chords || chords.length === 0) return null;

    // Normalize the note for comparison
    const normalizedNote = note.replace('♯', '#').replace('♭', 'b');

    // Helper to check if notes match (including enharmonic equivalents)
    const notesMatch = (n1, n2) => {
      const norm1 = n1.replace('♯', '#').replace('♭', 'b');
      const norm2 = n2.replace('♯', '#').replace('♭', 'b');
      if (norm1 === norm2) return true;
      const enharmonics = {
        'C#': 'Db', 'Db': 'C#',
        'D#': 'Eb', 'Eb': 'D#',
        'F#': 'Gb', 'Gb': 'F#',
        'G#': 'Ab', 'Ab': 'G#',
        'A#': 'Bb', 'Bb': 'A#',
      };
      return enharmonics[norm1] === norm2;
    };

    // PRIORITY 1: Find a chord where this note is the ROOT and has a voicing using this exact fret/string
    for (const chord of chords) {
      // Check if this note is the ROOT of the chord (first note in the chord.notes array)
      const isRoot = notesMatch(chord.notes[0], normalizedNote);
      if (!isRoot) continue;

      // Get voicings for this chord
      const voicings = getChordVoicings(chord.notes[0], chord.type);

      // Find a voicing that uses this fret on this string
      for (let vIndex = 0; vIndex < voicings.length; vIndex++) {
        const voicing = voicings[vIndex];
        const voicingFret = voicing.frets[string];

        // Check if this voicing uses the target fret on this string
        if (voicingFret === fret) {
          return { chord, voicingIndex: vIndex };
        }
      }
    }

    // PRIORITY 2: Find a chord where this note is the ROOT, with closest voicing
    for (const chord of chords) {
      const isRoot = notesMatch(chord.notes[0], normalizedNote);
      if (!isRoot) continue;

      const voicings = getChordVoicings(chord.notes[0], chord.type);

      // Find the voicing closest to this fret
      let closestIndex = 0;
      let closestDistance = Infinity;

      for (let vIndex = 0; vIndex < voicings.length; vIndex++) {
        const voicing = voicings[vIndex];
        const playedFrets = voicing.frets.filter(f => f > 0);
        if (playedFrets.length > 0) {
          const avgFret = playedFrets.reduce((a, b) => a + b, 0) / playedFrets.length;
          const distance = Math.abs(avgFret - fret);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = vIndex;
          }
        }
      }

      return { chord, voicingIndex: closestIndex };
    }

    // PRIORITY 3 (Fallback): Find any chord containing this note, with exact fret match
    for (const chord of chords) {
      const noteInChord = chord.notes.some(n => notesMatch(n, normalizedNote));
      if (!noteInChord) continue;

      const voicings = getChordVoicings(chord.notes[0], chord.type);

      // Find a voicing that uses this fret on this string
      for (let vIndex = 0; vIndex < voicings.length; vIndex++) {
        const voicing = voicings[vIndex];
        const voicingFret = voicing.frets[string];

        if (voicingFret === fret) {
          return { chord, voicingIndex: vIndex };
        }
      }
    }

    // PRIORITY 4 (Last Resort): Find any chord containing this note, with closest voicing
    for (const chord of chords) {
      const noteInChord = chord.notes.some(n => notesMatch(n, normalizedNote));
      if (!noteInChord) continue;

      const voicings = getChordVoicings(chord.notes[0], chord.type);

      // Find the voicing closest to this fret
      let closestIndex = 0;
      let closestDistance = Infinity;

      for (let vIndex = 0; vIndex < voicings.length; vIndex++) {
        const voicing = voicings[vIndex];
        const playedFrets = voicing.frets.filter(f => f > 0);
        if (playedFrets.length > 0) {
          const avgFret = playedFrets.reduce((a, b) => a + b, 0) / playedFrets.length;
          const distance = Math.abs(avgFret - fret);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = vIndex;
          }
        }
      }

      return { chord, voicingIndex: closestIndex };
    }

    return null;
  };

  // Handle note press
  const handleNotePress = (pos) => {
    if (!onNotePress) return;

    const result = findChordWithVoicingAtPosition(pos.note, pos.fret, pos.string);
    onNotePress({
      note: pos.note,
      fret: pos.fret,
      string: pos.string,
      interval: pos.interval,
      scaleDegree: pos.scaleDegree,
      chord: result?.chord || null,
      voicingIndex: result?.voicingIndex || 0,
    });
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
        <FretboardNote
          key={`note-${index}`}
          cx={x}
          cy={y}
          radius={radius}
          fill={noteColors.fill}
          stroke={noteColors.stroke}
          strokeWidth={2}
          label={label}
          textColor={noteColors.textColor}
          onPress={onNotePress ? () => handleNotePress(pos) : undefined}
        />
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
