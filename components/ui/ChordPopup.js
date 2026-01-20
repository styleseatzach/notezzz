import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { colors, camelotColors } from '../../styles/colors';
import { typography, fontFamilies } from '../../styles/typography';
import { spacing } from '../../styles/spacing';
import { ChordBox } from '../guitar';
import CloseIcon from '../icons/CloseIcon';
import { getChordExtensionsForDegree, getChordDisplayName } from '../../utils/chordExtensions';
import { getChordVoicings } from '../../utils/chordVoicings';

/**
 * ChordPopup - Modal that shows chord details when a note is tapped
 */
// Roman numeral labels for scale degrees
const SCALE_DEGREE_LABELS = {
  major: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
  minor: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'],
};

// Convert roman numeral degree to number (1-7)
const romanToNumber = (roman) => {
  if (typeof roman === 'number') return roman;
  const romanMap = {
    'I': 1, 'i': 1,
    'II': 2, 'ii': 2, 'ii°': 2,
    'III': 3, 'iii': 3,
    'IV': 4, 'iv': 4,
    'V': 5, 'v': 5,
    'VI': 6, 'vi': 6,
    'VII': 7, 'vii': 7, 'vii°': 7,
  };
  return romanMap[roman] || 1;
};

const ChordPopup = ({
  visible,
  onClose,
  noteInfo,
  camelotNumber,
  keyColor,
  scaleType = 'major', // Pass this from parent if available
}) => {
  if (!noteInfo || !noteInfo.chord) return null;

  const { note, fret, string, chord, voicingIndex = 0 } = noteInfo;

  // Get available chord extensions for this scale degree
  const degree = romanToNumber(chord.degree) || 1;
  const extensions = getChordExtensionsForDegree(degree, scaleType);

  // Find the initial extension index that matches the chord's type
  const initialExtensionIndex = useMemo(() => {
    const index = extensions.findIndex(ext => ext.type === chord.type);
    return index >= 0 ? index : 0;
  }, [extensions, chord.type]);

  const [extensionIndex, setExtensionIndex] = useState(initialExtensionIndex);

  // Reset extension index when chord changes (new note clicked)
  useEffect(() => {
    setExtensionIndex(initialExtensionIndex);
  }, [initialExtensionIndex]);

  // Get current extension
  const currentExtension = extensions[extensionIndex] || extensions[0];
  const currentChordType = currentExtension.type;
  const root = chord.notes[0];
  const chordName = getChordDisplayName(root, currentExtension.displayName);

  // Find the best voicing for the current extension that includes the clicked fret/string
  const bestVoicingIndex = useMemo(() => {
    if (fret === undefined || string === undefined) return 0;

    const voicings = getChordVoicings(root, currentChordType);
    if (!voicings || voicings.length === 0) return 0;

    // First try to find exact match on this fret and string
    for (let i = 0; i < voicings.length; i++) {
      if (voicings[i].frets[string] === fret) {
        return i;
      }
    }

    // Fallback: find voicing closest to this fret
    let closestIndex = 0;
    let closestDistance = Infinity;

    for (let i = 0; i < voicings.length; i++) {
      const voicing = voicings[i];
      const playedFrets = voicing.frets.filter(f => f > 0);
      if (playedFrets.length > 0) {
        const avgFret = playedFrets.reduce((a, b) => a + b, 0) / playedFrets.length;
        const distance = Math.abs(avgFret - fret);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }
    }

    return closestIndex;
  }, [root, currentChordType, fret, string]);

  // Get the scale degree label (roman numeral)
  const degreeIndex = chord.degree ? chord.degree - 1 : 0;
  const romanNumeral = SCALE_DEGREE_LABELS[scaleType][degreeIndex] || '';

  // Get camelot colors for styling
  const camelot = camelotColors[camelotNumber] || {};

  // Navigation handlers for chord extensions
  const goToPrevious = () => {
    setExtensionIndex((prev) => (prev > 0 ? prev - 1 : extensions.length - 1));
  };

  const goToNext = () => {
    setExtensionIndex((prev) => (prev < extensions.length - 1 ? prev + 1 : 0));
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          style={styles.popup}
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <View style={[styles.noteBadge, { backgroundColor: keyColor || camelot.light }]}>
                <Text style={styles.noteBadgeText}>{romanNumeral}</Text>
              </View>
              <View style={styles.headerText}>
                <Text style={styles.chordName}>{chordName}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <CloseIcon width={20} height={20} fill={colors.grey600} />
            </TouchableOpacity>
          </View>

          {/* Chord Diagram */}
          <View style={styles.chordContainer}>
            <ChordBox
              key={`${root}-${currentChordType}-${bestVoicingIndex}`}
              chordName={chordName}
              root={root}
              chordType={currentChordType}
              camelotNumber={camelotNumber?.toString()}
              width={160}
              height={180}
              showTitle={false}
              showNavigation={false}
              initialVoicingIndex={bestVoicingIndex}
            />
          </View>

          {/* Extension Navigation */}
          {extensions.length > 1 && (
            <View style={styles.extensionNavigation}>
              <TouchableOpacity
                onPress={goToPrevious}
                style={styles.navButton}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Text style={styles.navArrow}>{'<'}</Text>
              </TouchableOpacity>

              <Text style={styles.navText}>
                {extensionIndex + 1} of {extensions.length}
              </Text>

              <TouchableOpacity
                onPress={goToNext}
                style={styles.navButton}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Text style={styles.navArrow}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Chord Notes */}
          <View style={styles.notesContainer}>
            <Text style={styles.notesLabel}>Notes in chord:</Text>
            <View style={styles.notesList}>
              {chord.notes.map((n, i) => (
                <View
                  key={i}
                  style={[
                    styles.noteChip,
                    { backgroundColor: i === 0 ? (camelot.medium || colors.grey400) : (camelot.light || colors.grey100) }
                  ]}
                >
                  <Text style={[
                    styles.noteChipText,
                    { color: i === 0 ? '#FFFFFF' : (camelot.dark || colors.grey700) }
                  ]}>
                    {n}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing[24],
  },
  popup: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: spacing[20],
    width: '100%',
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[16],
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  noteBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[12],
  },
  noteBadgeText: {
    fontFamily: fontFamilies.display,
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
  },
  headerText: {
    flex: 1,
  },
  chordName: {
    fontFamily: fontFamilies.display,
    fontSize: 20,
    color: colors.black,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.grey100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chordContainer: {
    alignItems: 'center',
    paddingVertical: spacing[8],
    marginBottom: spacing[12],
  },
  extensionNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[16],
    gap: spacing[8],
  },
  navButton: {
    padding: spacing[4],
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
  notesContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.grey100,
    paddingTop: spacing[16],
  },
  notesLabel: {
    fontFamily: fontFamilies.body,
    fontSize: 12,
    color: colors.grey500,
    marginBottom: spacing[8],
  },
  notesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing[8],
  },
  noteChip: {
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[6],
    borderRadius: 16,
  },
  noteChipText: {
    fontFamily: fontFamilies.body,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ChordPopup;
