import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import KeyCard from '../cards/KeyCard';
import BottomNavigation from '../navigation/BottomNavigation';
import PageHeader from '../ui/PageHeader';
import InstrumentToggle from '../ui/InstrumentToggle';
import SortOrderToggle from '../ui/SortOrderToggle';
import keysData from '../../data/keys.json';

const KeysAndChordsMainScreen = ({
  activeTab = 'keys-chords',
  onNavigate,
  onProfilePress,
  onRecipeSelect,
  userProfile
}) => {
  const [activeInstrument, setActiveInstrument] = useState('piano');
  const [sortOrder, setSortOrder] = useState('alphabetical');

  // Convert keys.json object to array
  const keysArray = Object.values(keysData);

  // Define the chromatic order for sorting
  const chromaticOrder = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  // Sort keys based on selected sort order
  const sortedKeys = [...keysArray].sort((a, b) => {
    if (sortOrder === 'camelot') {
      // Sort by Camelot number, then by type (minor before major for same number)
      // This gives us: 1A, 1B, 2A, 2B, 3A, 3B, ..., 12A, 12B
      if (a.camelotNumber !== b.camelotNumber) {
        return a.camelotNumber - b.camelotNumber;
      }
      // Same camelot number: minor (A) comes before major (B)
      if (a.type === 'minor' && b.type === 'major') return -1;
      if (a.type === 'major' && b.type === 'minor') return 1;
      return 0;
    } else {
      // Alphabetical: sort by root note, then major before minor
      // This gives us: C Major, C Minor, C# Major, C# Minor, etc.
      const rootA = a.name.replace(' Major', '').replace(' Minor', '');
      const rootB = b.name.replace(' Major', '').replace(' Minor', '');

      // Compare chromatic positions
      const orderA = chromaticOrder.indexOf(rootA);
      const orderB = chromaticOrder.indexOf(rootB);

      if (orderA !== orderB) {
        return orderA - orderB;
      }

      // Same root note: major comes before minor
      if (a.type === 'major' && b.type === 'minor') return -1;
      if (a.type === 'minor' && b.type === 'major') return 1;
      return 0;
    }
  });

  const handleKeySelect = (key) => {
    console.log('KeysAndChordsMainScreen: Key selected', key.name);
    onRecipeSelect && onRecipeSelect(key);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Header */}
        <PageHeader
          title="Keys and Chords"
          subtitle="All of them except that one that David played that one time."
          onProfilePress={onProfilePress}
          isLoggedIn={!!userProfile}
          userDisplayName={userProfile?.display_name}
        />

        {/* Toggles */}
        <View style={styles.toggleContainer}>
          <InstrumentToggle
            activeInstrument={activeInstrument}
            onToggle={setActiveInstrument}
          />
          <SortOrderToggle
            sortOrder={sortOrder}
            onToggle={setSortOrder}
          />
        </View>

        {/* Keys Grid */}
        <View style={styles.keysGrid}>
          {sortedKeys.map((key) => (
            <View key={key.name} style={styles.keyCardWrapper}>
              <KeyCard
                keyName={key.name}
                relativeKey={key.type === 'major' ? key.relativeMinor : key.relativeMajor}
                camelotKey={key.camelotKey}
                backgroundColor={key.color}
                highlightedNotes={key.notes}
                keyType={key.type}
                size="small"
                instrument={activeInstrument}
                onClick={() => handleKeySelect(key)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onNavigate={onNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // Extra padding for bottom navigation
  },
  toggleContainer: {
    paddingHorizontal: spacing[24],
    paddingTop: spacing[16],
    gap: spacing[12],
  },
  keysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing[24],
    paddingTop: spacing[24],
    gap: spacing[8],
  },
  keyCardWrapper: {
    width: 'calc(50% - 4px)', // 2 columns on mobile
  },
});

export default KeysAndChordsMainScreen;
