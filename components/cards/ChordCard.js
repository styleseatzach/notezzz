import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PianoRoll from '../piano/PianoRoll';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

const ChordCard = ({
  chordNumber,
  chordName,
  notes = [],
  highlightColor = '#E4C478',
  isSelected = false,
}) => {
  return (
    <View style={[styles.card, isSelected && styles.cardSelected]}>
      <View style={[styles.badge, isSelected && styles.badgeSelected]}>
        <Text style={[styles.badgeText, isSelected && styles.badgeTextSelected]}>
          {chordNumber}
        </Text>
      </View>

      <View style={styles.pianoContainer}>
        <PianoRoll
          highlightedNotes={notes}
          highlightColor={highlightColor}
          showLabels={false}
          octaveRange={2}
        />
      </View>

      <Text style={styles.chordName}>{chordName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing[12],
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: 'transparent',
    minWidth: 120,
  },
  cardSelected: {
    borderColor: colors.purple700,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.grey100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[12],
  },
  badgeSelected: {
    backgroundColor: colors.purple700,
  },
  badgeText: {
    ...typography.body,
    fontWeight: '700',
    color: colors.black,
  },
  badgeTextSelected: {
    color: colors.white,
  },
  pianoContainer: {
    marginBottom: spacing[8],
  },
  chordName: {
    ...typography.caption,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
  },
});

export default ChordCard;
