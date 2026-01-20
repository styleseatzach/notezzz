import React from 'react';
import { View, StyleSheet } from 'react-native';
import KeyCard from './KeyCard';
import { camelotColors } from '../../styles/colors';

export default {
  title: 'Components/Cards/KeyCard',
  component: KeyCard,
};

export const CMajorSmall = () => (
  <View style={styles.container}>
    <View style={styles.cardWrapper}>
      <KeyCard
        keyName="C Major"
        relativeKey="Am"
        camelotKey="8B"
        backgroundColor={camelotColors['8'].light}
        highlightedNotes={['C', 'D', 'E', 'F', 'G', 'A', 'B']}
        onClick={() => alert('C Major clicked')}
        size="small"
      />
    </View>
  </View>
);

export const CMajorLarge = () => (
  <View style={styles.container}>
    <KeyCard
      keyName="C Major"
      relativeKey="Am"
      camelotKey="8B"
      backgroundColor={camelotColors['8'].light}
      highlightedNotes={['C', 'D', 'E', 'F', 'G', 'A', 'B']}
      onClick={() => alert('C Major clicked')}
      size="large"
    />
  </View>
);

export const AMinorSmall = () => (
  <View style={styles.container}>
    <View style={styles.cardWrapper}>
      <KeyCard
        keyName="A Minor"
        relativeKey="C"
        camelotKey="8A"
        backgroundColor={camelotColors['8'].light}
        highlightedNotes={['A', 'B', 'C', 'D', 'E', 'F', 'G']}
        onClick={() => {}}
        size="small"
      />
    </View>
  </View>
);

export const GMajorSmall = () => (
  <View style={styles.container}>
    <View style={styles.cardWrapper}>
      <KeyCard
        keyName="G Major"
        relativeKey="Em"
        camelotKey="9B"
        backgroundColor={camelotColors['9'].light}
        highlightedNotes={['G', 'A', 'B', 'C', 'D', 'E', 'F#']}
        onClick={() => {}}
        size="small"
      />
    </View>
  </View>
);

export const FMajorSmall = () => (
  <View style={styles.container}>
    <View style={styles.cardWrapper}>
      <KeyCard
        keyName="F Major"
        relativeKey="Dm"
        camelotKey="7B"
        backgroundColor={camelotColors['7'].light}
        highlightedNotes={['F', 'G', 'A', 'Bb', 'C', 'D', 'E']}
        onClick={() => {}}
        size="small"
      />
    </View>
  </View>
);

export const GridExample = () => (
  <View style={styles.container}>
    <View style={styles.grid}>
      <KeyCard
        keyName="C Major"
        relativeKey="Am"
        camelotKey="8B"
        backgroundColor={camelotColors['8'].light}
        highlightedNotes={['C', 'D', 'E', 'F', 'G', 'A', 'B']}
        onClick={() => {}}
        size="small"
      />
      <KeyCard
        keyName="G Major"
        relativeKey="Em"
        camelotKey="9B"
        backgroundColor={camelotColors['9'].light}
        highlightedNotes={['G', 'A', 'B', 'C', 'D', 'E', 'F#']}
        onClick={() => {}}
        size="small"
      />
      <KeyCard
        keyName="D Major"
        relativeKey="Bm"
        camelotKey="10B"
        backgroundColor={camelotColors['10'].light}
        highlightedNotes={['D', 'E', 'F#', 'G', 'A', 'B', 'C#']}
        onClick={() => {}}
        size="small"
      />
      <KeyCard
        keyName="F Major"
        relativeKey="Dm"
        camelotKey="7B"
        backgroundColor={camelotColors['7'].light}
        highlightedNotes={['F', 'G', 'A', 'Bb', 'C', 'D', 'E']}
        onClick={() => {}}
        size="small"
      />
    </View>
  </View>
);

export const ASharpMajorSmall = () => (
  <View style={styles.container}>
    <View style={styles.cardWrapper}>
      <KeyCard
        keyName="A# Major"
        relativeKey="Gm"
        camelotKey="6B"
        backgroundColor={camelotColors['6'].light}
        highlightedNotes={['A#', 'B#', 'C##', 'D#', 'E#', 'F##', 'G##']}
        onClick={() => {}}
        size="small"
      />
    </View>
  </View>
);

export const ASharpMinorSmall = () => (
  <View style={styles.container}>
    <View style={styles.cardWrapper}>
      <KeyCard
        keyName="A# Minor"
        relativeKey="C#"
        camelotKey="3A"
        backgroundColor={camelotColors['3'].light}
        highlightedNotes={['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#']}
        onClick={() => {}}
        size="small"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  cardWrapper: {
    maxWidth: 180,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
