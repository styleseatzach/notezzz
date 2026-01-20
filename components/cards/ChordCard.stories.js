import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChordCard from './ChordCard';
import { camelotColors } from '../../styles/colors';

export default {
  title: 'Components/Cards/ChordCard',
  component: ChordCard,
};

export const CMajorChord = () => (
  <View style={styles.container}>
    <ChordCard
      chordNumber="I"
      chordName="C Major"
      notes={['C', 'E', 'G']}
      highlightColor={camelotColors['8'].medium}
      isSelected={false}
    />
  </View>
);

export const DMinorChord = () => (
  <View style={styles.container}>
    <ChordCard
      chordNumber="ii"
      chordName="D Minor"
      notes={['D', 'F', 'A']}
      highlightColor={camelotColors['8'].medium}
      isSelected={false}
    />
  </View>
);

export const SelectedChord = () => (
  <View style={styles.container}>
    <ChordCard
      chordNumber="IV"
      chordName="F Major"
      notes={['F', 'A', 'C']}
      highlightColor={camelotColors['8'].medium}
      isSelected={true}
    />
  </View>
);

export const DiminishedChord = () => (
  <View style={styles.container}>
    <ChordCard
      chordNumber="vii°"
      chordName="B Diminished"
      notes={['B', 'D', 'F']}
      highlightColor={camelotColors['8'].medium}
      isSelected={false}
    />
  </View>
);

export const AllChordsInCMajor = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <ChordCard
        chordNumber="I"
        chordName="C Major"
        notes={['C', 'E', 'G']}
        highlightColor={camelotColors['8'].medium}
        isSelected={true}
      />
      <ChordCard
        chordNumber="ii"
        chordName="D Minor"
        notes={['D', 'F', 'A']}
        highlightColor={camelotColors['8'].medium}
        isSelected={false}
      />
      <ChordCard
        chordNumber="iii"
        chordName="E Minor"
        notes={['E', 'G', 'B']}
        highlightColor={camelotColors['8'].medium}
        isSelected={false}
      />
      <ChordCard
        chordNumber="IV"
        chordName="F Major"
        notes={['F', 'A', 'C']}
        highlightColor={camelotColors['8'].medium}
        isSelected={false}
      />
    </View>
    <View style={styles.row}>
      <ChordCard
        chordNumber="V"
        chordName="G Major"
        notes={['G', 'B', 'D']}
        highlightColor={camelotColors['8'].medium}
        isSelected={false}
      />
      <ChordCard
        chordNumber="vi"
        chordName="A Minor"
        notes={['A', 'C', 'E']}
        highlightColor={camelotColors['8'].medium}
        isSelected={false}
      />
      <ChordCard
        chordNumber="vii°"
        chordName="B Diminished"
        notes={['B', 'D', 'F']}
        highlightColor={camelotColors['8'].medium}
        isSelected={false}
      />
    </View>
  </View>
);

// All Chords from Different Keys with their Camelot Colors
export const AMajorChords = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <ChordCard chordNumber="I" chordName="A Major" notes={['A', 'C#', 'E']} highlightColor={camelotColors['11'].medium} />
      <ChordCard chordNumber="ii" chordName="B Minor" notes={['B', 'D', 'F#']} highlightColor={camelotColors['11'].medium} />
      <ChordCard chordNumber="iii" chordName="C# Minor" notes={['C#', 'E', 'G#']} highlightColor={camelotColors['11'].medium} />
    </View>
  </View>
);

export const GMajorChords = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <ChordCard chordNumber="I" chordName="G Major" notes={['G', 'B', 'D']} highlightColor={camelotColors['9'].medium} />
      <ChordCard chordNumber="ii" chordName="A Minor" notes={['A', 'C', 'E']} highlightColor={camelotColors['9'].medium} />
      <ChordCard chordNumber="V" chordName="D Major" notes={['D', 'F#', 'A']} highlightColor={camelotColors['9'].medium} />
    </View>
  </View>
);

export const DMajorChords = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <ChordCard chordNumber="I" chordName="D Major" notes={['D', 'F#', 'A']} highlightColor={camelotColors['10'].medium} />
      <ChordCard chordNumber="ii" chordName="E Minor" notes={['E', 'G', 'B']} highlightColor={camelotColors['10'].medium} />
      <ChordCard chordNumber="IV" chordName="G Major" notes={['G', 'B', 'D']} highlightColor={camelotColors['10'].medium} />
    </View>
  </View>
);

export const FMajorChords = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <ChordCard chordNumber="I" chordName="F Major" notes={['F', 'A', 'C']} highlightColor={camelotColors['7'].medium} />
      <ChordCard chordNumber="ii" chordName="G Minor" notes={['G', 'A#', 'D']} highlightColor={camelotColors['7'].medium} />
      <ChordCard chordNumber="V" chordName="C Major" notes={['C', 'E', 'G']} highlightColor={camelotColors['7'].medium} />
    </View>
  </View>
);

export const AMinorChords = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <ChordCard chordNumber="i" chordName="A Minor" notes={['A', 'C', 'E']} highlightColor={camelotColors['8'].medium} />
      <ChordCard chordNumber="iv" chordName="D Minor" notes={['D', 'F', 'A']} highlightColor={camelotColors['8'].medium} />
      <ChordCard chordNumber="v" chordName="E Minor" notes={['E', 'G', 'B']} highlightColor={camelotColors['8'].medium} />
    </View>
  </View>
);

export const CMinorChords = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <ChordCard chordNumber="i" chordName="C Minor" notes={['C', 'D#', 'G']} highlightColor={camelotColors['5'].medium} />
      <ChordCard chordNumber="III" chordName="D# Major" notes={['D#', 'G', 'A#']} highlightColor={camelotColors['5'].medium} />
      <ChordCard chordNumber="VII" chordName="A# Major" notes={['A#', 'D', 'F']} highlightColor={camelotColors['5'].medium} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
