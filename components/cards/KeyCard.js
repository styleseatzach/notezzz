import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PianoRoll from '../piano/PianoRoll';
import { GuitarNeckCompact } from '../guitar';
import { colors, camelotColors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

const KeyCard = ({
  keyName,
  relativeKey,
  camelotKey,
  backgroundColor,
  highlightedNotes = [],
  keyType = 'major',
  onClick,
  size = 'small',
  instrument = 'piano',
}) => {
  const isLarge = size === 'large';

  // Extract the Camelot number from the key (e.g., "8B" -> "8", "5A" -> "5")
  const camelotNumber = camelotKey ? camelotKey.replace(/[AB]/, '') : '8';
  const highlightColor = camelotColors[camelotNumber]?.medium || '#F2CF85';
  const highlightColorBlack = camelotColors[camelotNumber]?.dark || '#7A5500';

  // Extract root note from key name (e.g., "G Major" -> "G")
  const rootNote = keyName.split(' ')[0];

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor },
        isLarge ? styles.cardLarge : styles.cardSmall,
      ]}
      onPress={onClick}
      activeOpacity={0.8}
    >
      <Text style={[styles.keyName, isLarge && styles.keyNameLarge]}>
        {keyName}
      </Text>

      <View style={styles.instrumentContainer}>
        {instrument === 'piano' ? (
          <PianoRoll
            highlightedNotes={highlightedNotes}
            highlightColor={highlightColor}
            highlightColorBlack={highlightColorBlack}
            showLabels={true}
            octaveRange={2}
            highlightMode="scale"
          />
        ) : (
          <GuitarNeckCompact
            scale={{ root: rootNote, type: keyType, extended: false }}
            camelotNumber={camelotNumber}
            numFrets={5}
            width={isLarge ? 280 : 160}
            height={isLarge ? 100 : 60}
          />
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.label}>Relative Key: {relativeKey} </Text>
        <Text style={styles.label}>Camelot: {camelotKey}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    gap: spacing[8],
  },
  cardSmall: {
    padding: spacing[8],
  },
  cardLarge: {
    padding: spacing[16],
  },
  keyName: {
    fontFamily: 'PP Radio Grotesk',
    fontSize: 14,
    fontWeight: '400',
    color: '#121111', // Slightly softer than pure black per Figma
    textAlign: 'center',
    lineHeight: 14,
  },
  keyNameLarge: {
    ...typography.sectionTitle,
    fontWeight: '400',
  },
  instrumentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 4,
  },
  footer: {
    gap: spacing[4],
    alignItems: 'center',
  },
  label: {
    fontFamily: 'PP Pangram Sans',
    fontSize: 10,
    color: colors.grey500, // #737272
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 14,
  },
});

export default KeyCard;
