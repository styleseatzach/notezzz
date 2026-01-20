import React from 'react';
import { View, StyleSheet } from 'react-native';
import PianoKey from './PianoKey';

const PianoRoll = ({
  highlightedNotes = [],
  highlightColor = '#E4C478',
  highlightColorBlack = null, // Optional separate color for black keys, defaults to highlightColor
  showLabels = true,
  showBlackKeyLabels = false, // Show labels on black keys for larger keyboards
  octaveRange = 2,
  startingOctave = 4,
  highlightMode = 'chord', // 'chord' highlights all instances, 'scale' highlights sequentially
}) => {

  // Enharmonic equivalents mapping (note -> all possible equivalents)
  const enharmonicEquivalents = {
    'C': ['C', 'B#', 'Dbb'],
    'C#': ['C#', 'Db', 'B##'],
    'D': ['D', 'C##', 'Ebb'],
    'D#': ['D#', 'Eb', 'Fbb'],
    'E': ['E', 'D##', 'Fb'],
    'F': ['F', 'E#', 'Gbb'],
    'F#': ['F#', 'Gb', 'E##'],
    'G': ['G', 'F##', 'Abb'],
    'G#': ['G#', 'Ab'],
    'A': ['A', 'G##', 'Bbb'],
    'A#': ['A#', 'Bb', 'Cbb'],
    'B': ['B', 'A##', 'Cb'],
  };

  // Chromatic note order for finding note positions
  const chromaticOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  // Helper to find chromatic position of a note (considering enharmonics)
  const getChromaticPosition = (noteName) => {
    for (let i = 0; i < chromaticOrder.length; i++) {
      const equivalents = enharmonicEquivalents[chromaticOrder[i]] || [];
      if (equivalents.includes(noteName)) {
        return i;
      }
    }
    return -1;
  };

  // Generate sequential scale notes with octaves
  const generateScaleNotes = () => {
    if (highlightedNotes.length === 0) return [];

    const rootNote = highlightedNotes[0];
    const rootPosition = getChromaticPosition(rootNote);
    if (rootPosition === -1) return highlightedNotes;

    const scaleNotesWithOctaves = [];
    let currentOctave = startingOctave;
    let lastPosition = rootPosition;

    highlightedNotes.forEach((noteName) => {
      const notePosition = getChromaticPosition(noteName);
      if (notePosition === -1) {
        scaleNotesWithOctaves.push(noteName);
        return;
      }

      // If the note position is less than the last position, we've wrapped to next octave
      if (notePosition < lastPosition) {
        currentOctave++;
      }

      scaleNotesWithOctaves.push(`${noteName}${currentOctave}`);
      lastPosition = notePosition;
    });

    return scaleNotesWithOctaves;
  };

  // Helper function to check if a note should be highlighted
  const isNoteHighlighted = (fullNote, noteName) => {
    if (highlightMode === 'scale') {
      // For scales, use the generated sequential notes with octaves
      const scaleNotes = generateScaleNotes();

      // Direct match
      if (scaleNotes.includes(fullNote)) {
        return true;
      }

      // Check enharmonic equivalents for scale mode
      // Extract octave from fullNote (e.g., "F4" -> octave "4")
      const octave = fullNote.replace(noteName, '');
      const equivalents = enharmonicEquivalents[noteName] || [];

      // Check if any enharmonic equivalent with same octave is in scaleNotes
      return equivalents.some(equiv => scaleNotes.includes(`${equiv}${octave}`));
    } else {
      // For chords, highlight all instances of the note (original behavior)
      if (highlightedNotes.includes(noteName)) {
        return true;
      }
      const equivalents = enharmonicEquivalents[noteName] || [];
      return highlightedNotes.some(highlightedNote => equivalents.includes(highlightedNote));
    }
  };

  // Standard piano layout for one octave
  const octaveNotes = [
    { note: 'C', isBlack: false },
    { note: 'C#', isBlack: true },
    { note: 'D', isBlack: false },
    { note: 'D#', isBlack: true },
    { note: 'E', isBlack: false },
    { note: 'F', isBlack: false },
    { note: 'F#', isBlack: true },
    { note: 'G', isBlack: false },
    { note: 'G#', isBlack: true },
    { note: 'A', isBlack: false },
    { note: 'A#', isBlack: true },
    { note: 'B', isBlack: false },
  ];

  // Generate notes for the specified octave range
  const generateNotes = () => {
    const allNotes = [];
    for (let octave = 0; octave < octaveRange; octave++) {
      octaveNotes.forEach(({ note, isBlack }) => {
        allNotes.push({
          note,
          isBlack,
          fullNote: `${note}${startingOctave + octave}`,
        });
      });
    }
    return allNotes;
  };

  const notes = generateNotes();

  // Separate white and black keys for proper layering
  const whiteKeys = notes.filter(n => !n.isBlack);
  const blackKeys = notes.filter(n => n.isBlack);

  return (
    <View style={styles.container}>
      <View style={styles.pianoRoll}>
        {/* White keys layer */}
        <View style={styles.whiteKeysRow}>
          {whiteKeys.map((keyData, index) => (
            <View key={`white-${index}`} style={styles.whiteKeyWrapper}>
              <PianoKey
                note={keyData.note}
                isBlackKey={false}
                isHighlighted={isNoteHighlighted(keyData.fullNote, keyData.note)}
                highlightColor={highlightColor}
                showLabel={showLabels}
              />
            </View>
          ))}
        </View>

        {/* Black keys layer (positioned absolutely) */}
        <View style={styles.blackKeysRow}>
          {blackKeys.map((keyData, index) => {
            // Calculate position based on which black key this is in the pattern
            const blackKeyPositions = {
              'C#': 0, 'Db': 0,
              'D#': 1, 'Eb': 1,
              'F#': 3, 'Gb': 3,
              'G#': 4, 'Ab': 4,
              'A#': 5, 'Bb': 5,
            };

            const positionInOctave = blackKeyPositions[keyData.note] || 0;
            const currentOctave = Math.floor(index / 5); // 5 black keys per octave
            const whiteKeyPosition = positionInOctave + (currentOctave * 7);

            // With flex: 1, each white key gets equal width
            const numWhiteKeys = whiteKeys.length;
            const whiteKeyWidthPercent = 100 / numWhiteKeys;
            const blackKeyWidthPercent = whiteKeyWidthPercent * 0.6;
            const leftPositionPercent = (whiteKeyPosition * whiteKeyWidthPercent) + (whiteKeyWidthPercent * 0.7);

            return (
              <View
                key={`black-${index}`}
                style={[styles.blackKeyWrapper, { left: `${leftPositionPercent}%`, width: `${blackKeyWidthPercent}%` }]}
              >
                <PianoKey
                  note={keyData.note}
                  isBlackKey={true}
                  isHighlighted={isNoteHighlighted(keyData.fullNote, keyData.note)}
                  highlightColor={highlightColorBlack || highlightColor}
                  showLabel={showBlackKeyLabels}
                />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 800, // Prevent piano from getting too wide on large screens
    alignItems: 'center',
    justifyContent: 'center',
  },
  pianoRoll: {
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    overflow: 'visible',
  },
  whiteKeysRow: {
    flexDirection: 'row',
    width: '100%',
    paddingRight: 1, // Compensate for negative margin on last item
  },
  whiteKeyWrapper: {
    flex: 1,
    marginRight: -1, // Negative margin to overlap borders (like Figma)
  },
  blackKeysRow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    pointerEvents: 'none',
    overflow: 'visible',
  },
  blackKeyWrapper: {
    position: 'absolute',
    zIndex: 10,
  },
});

export default PianoRoll;
