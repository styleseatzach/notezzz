import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, camelotColors } from '../../styles/colors';
import { typography, fontFamilies } from '../../styles/typography';
import { spacing } from '../../styles/spacing';
import PianoRoll from '../piano/PianoRoll';
import { VerticalFullNeck } from '../guitar';
import InstrumentToggle from '../ui/InstrumentToggle';
import ChordDetailCard from '../cards/ChordDetailCard';
import CamelotWheelIcon from '../icons/CamelotWheelIcon';
import CloseIcon from '../icons/CloseIcon';
import ZMLogo from '../shapes/ZMLogo';
import BackgroundFillStarShape from '../shapes/BackgroundFillStarShape';

const KeyDetailScreen = ({
  keyData,
  onBack,
  onCamelotWheelPress,
}) => {
  const [activeInstrument, setActiveInstrument] = useState('piano');

  if (!keyData) {
    return null;
  }

  const { name, notes, relativeMinor, relativeMajor, camelotKey, color, colorMid, chords, type, camelotNumber } = keyData;
  const relativeKey = type === 'major' ? relativeMinor : relativeMajor;

  // Extract root note from key name (e.g., "G Major" -> "G")
  const rootNote = name.split(' ')[0];

  // Use camelot colors for piano highlights based on key's camelot number
  const highlightColor = camelotColors[camelotNumber]?.medium || '#E4C478';
  const highlightColorBlack = camelotColors[camelotNumber]?.dark || '#7A5500';

  // Use medium camelot color for background stars
  const starColor = camelotColors[camelotNumber]?.medium || '#E4C478';

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header with Camelot color background */}
        <View style={[styles.header, { backgroundColor: color }]}>
          {/* Background decorative stars - medium camelot color at 50% opacity */}
          <View style={styles.backgroundStarsContainer}>
            <View style={styles.backgroundStar1}>
              <BackgroundFillStarShape
                width={428}
                height={428}
                stroke={starColor}
                strokeWidth={32}
              />
            </View>
            <View style={styles.backgroundStar2}>
              <BackgroundFillStarShape
                width={311}
                height={311}
                stroke={starColor}
                strokeWidth={24}
              />
            </View>
          </View>

          <View style={styles.headerTop}>
            <ZMLogo width={100} height={33} fill={colors.grey800} />
            <TouchableOpacity
              style={styles.camelotButton}
              onPress={onCamelotWheelPress}
              activeOpacity={0.7}
            >
              <CamelotWheelIcon width={24} height={24} fill={colors.black} />
            </TouchableOpacity>
          </View>

          <Text style={styles.keyName}>{name}</Text>

          <View style={styles.keyInfo}>
            <Text style={styles.infoLabel}>Camelot: {camelotKey}</Text>
            <View style={styles.bulletSeparator} />
            <Text style={styles.infoLabel}>Relative Key: {relativeKey}</Text>
          </View>

          {/* Instrument Toggle */}
          <View style={styles.instrumentToggleContainer}>
            <InstrumentToggle
              activeInstrument={activeInstrument}
              onToggle={setActiveInstrument}
            />
          </View>

          {/* Instrument Visualization Section - Inside Header */}
          <View style={styles.headerPianoSection}>
            {activeInstrument === 'piano' ? (
              <PianoRoll
                highlightedNotes={notes}
                highlightColor={highlightColor}
                highlightColorBlack={highlightColorBlack}
                showLabels={true}
                showBlackKeyLabels={true}
                octaveRange={2}
                highlightMode="scale"
              />
            ) : (
              <View style={styles.guitarSection}>
                <VerticalFullNeck
                  scale={{ root: rootNote, type: type, extended: true }}
                  labelMode="letters"
                  camelotNumber={camelotNumber.toString()}
                  maxFrets={24}
                />
              </View>
            )}
          </View>
        </View>

        {/* Content - All Chords (1-7) */}
        <View style={styles.chordsSection}>
          {chords.map((chord, index) => (
            <ChordDetailCard
              key={chord.degree}
              chord={chord}
              index={index}
              keyColor={color}
              keyName={name}
              highlightColor={highlightColor}
              highlightColorBlack={highlightColorBlack}
              camelotNumber={camelotNumber}
              instrument={activeInstrument}
            />
          ))}
        </View>
      </ScrollView>

      {/* Bottom Close Button - same position as nav bar */}
      <View style={styles.bottomCloseContainer}>
        <TouchableOpacity
          style={styles.bottomCloseButton}
          onPress={onBack}
          activeOpacity={0.7}
        >
          <CloseIcon width={24} height={24} fill={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: spacing[24],
    paddingTop: spacing[24],
    paddingBottom: spacing[24],
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundStarsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  backgroundStar1: {
    position: 'absolute',
    top: -182,
    right: -153,
  },
  backgroundStar2: {
    position: 'absolute',
    bottom: -172,
    left: -149,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[8],
    zIndex: 1,
  },
  camelotButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#989898',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 4,
  },
  bottomCloseContainer: {
    position: 'absolute',
    bottom: 28,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCloseButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },
  keyName: {
    ...typography.hero,
    color: colors.purple900,
    marginBottom: spacing[8],
    zIndex: 1,
  },
  keyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    marginBottom: spacing[16],
  },
  infoLabel: {
    ...typography.bodyMedium,
    color: colors.grey800,
  },
  bulletSeparator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.grey800,
    marginHorizontal: spacing[8],
  },
  headerPianoSection: {
    zIndex: 1,
  },
  instrumentToggleContainer: {
    zIndex: 1,
    marginBottom: spacing[16],
    alignItems: 'flex-start',
  },
  guitarSection: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: spacing[8],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding for floating close button
  },
  chordsSection: {
    padding: spacing[24],
    gap: spacing[12],
  },
});

export default KeyDetailScreen;
