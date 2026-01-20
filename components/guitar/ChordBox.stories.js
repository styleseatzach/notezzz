import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ChordBox from './ChordBox';

export default {
  title: 'Components/Guitar/ChordBox',
  component: ChordBox,
};

export const CMajorWithNavigation = () => (
  <View style={styles.container}>
    <Text style={styles.label}>C Major - Multiple Voicings</Text>
    <Text style={styles.sublabel}>Use arrows to navigate between voicings</Text>
    <ChordBox
      chordName="C Major"
      root="C"
      chordType="major"
      width={140}
      height={160}
      showNavigation={true}
    />
  </View>
);

export const GWithMultiplePositions = () => (
  <View style={styles.container}>
    <Text style={styles.label}>G Major - All Positions</Text>
    <Text style={styles.sublabel}>Open, E-shape barre, A-shape barre</Text>
    <ChordBox
      chordName="G Major"
      root="G"
      chordType="major"
      width={140}
      height={160}
      showNavigation={true}
    />
  </View>
);

export const FBarreWithVoicings = () => (
  <View style={styles.container}>
    <Text style={styles.label}>F Major - Navigate Voicings</Text>
    <Text style={styles.sublabel}>Full barre, Easy F, A-shape</Text>
    <ChordBox
      chordName="F Major"
      root="F"
      chordType="major"
      width={140}
      height={160}
      showNavigation={true}
    />
  </View>
);

export const AmWithNavigation = () => (
  <View style={styles.container}>
    <Text style={styles.label}>A Minor - Multiple Voicings</Text>
    <ChordBox
      chordName="A Minor"
      root="A"
      chordType="minor"
      width={140}
      height={160}
      showNavigation={true}
    />
  </View>
);

export const BmBarrePositions = () => (
  <View style={styles.container}>
    <Text style={styles.label}>B Minor - Barre Positions</Text>
    <ChordBox
      chordName="B Minor"
      root="B"
      chordType="minor"
      width={140}
      height={160}
      showNavigation={true}
    />
  </View>
);

export const SeventhChordsWithNav = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Seventh Chords - Multiple Voicings</Text>
    <View style={styles.row}>
      <ChordBox root="C" chordType="major7" width={130} height={160} showNavigation={true} />
      <ChordBox root="A" chordType="minor7" width={130} height={160} showNavigation={true} />
      <ChordBox root="G" chordType="dominant7" width={130} height={160} showNavigation={true} />
    </View>
  </View>
);

export const AllMajorChordsWithNav = () => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.label}>All Major Chords - With Navigation</Text>
      <View style={styles.grid}>
        {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map(root => (
          <View key={root} style={styles.gridItem}>
            <ChordBox root={root} chordType="major" width={130} height={170} showNavigation={true} />
          </View>
        ))}
      </View>
    </View>
  </ScrollView>
);

export const AllMinorChordsWithNav = () => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.label}>All Minor Chords - With Navigation</Text>
      <View style={styles.grid}>
        {['C', 'D', 'E', 'F', 'G', 'A', 'B'].map(root => (
          <View key={root} style={styles.gridItem}>
            <ChordBox root={root} chordType="minor" width={130} height={170} showNavigation={true} />
          </View>
        ))}
      </View>
    </View>
  </ScrollView>
);

export const WithCamelotColors = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Chords with Camelot Colors</Text>
    <View style={styles.row}>
      <ChordBox root="C" chordType="major" camelotNumber="8" width={130} height={170} showNavigation={true} />
      <ChordBox root="G" chordType="major" camelotNumber="9" width={130} height={170} showNavigation={true} />
      <ChordBox root="A" chordType="minor" camelotNumber="8" width={130} height={170} showNavigation={true} />
    </View>
  </View>
);

export const CompactWithoutNav = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Compact View (No Navigation)</Text>
    <View style={styles.row}>
      <ChordBox root="C" chordType="major" width={100} height={130} showNavigation={false} />
      <ChordBox root="G" chordType="major" width={100} height={130} showNavigation={false} />
      <ChordBox root="D" chordType="major" width={100} height={130} showNavigation={false} />
      <ChordBox root="A" chordType="minor" width={100} height={130} showNavigation={false} />
    </View>
  </View>
);

export const SharpsAndFlats = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Sharp/Flat Chord Voicings</Text>
    <View style={styles.row}>
      <ChordBox root="F#" chordType="major" width={130} height={170} showNavigation={true} />
      <ChordBox root="Bb" chordType="major" width={130} height={170} showNavigation={true} />
      <ChordBox root="C#" chordType="minor" width={130} height={170} showNavigation={true} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#5E4DB2',
    textAlign: 'center',
  },
  sublabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  gridItem: {
    alignItems: 'center',
  },
});
