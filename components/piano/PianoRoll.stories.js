import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PianoRoll from './PianoRoll';

export default {
  title: 'Components/Piano/PianoRoll',
  component: PianoRoll,
};

export const Default = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Default Piano Roll (2 octaves)</Text>
    <PianoRoll />
  </View>
);

export const CMajorScale = () => (
  <View style={styles.container}>
    <Text style={styles.label}>C Major Scale (C, D, E, F, G, A, B)</Text>
    <PianoRoll
      highlightedNotes={['C', 'D', 'E', 'F', 'G', 'A', 'B']}
      highlightColor="#E4C478"
    />
  </View>
);

export const CMajorChord = () => (
  <View style={styles.container}>
    <Text style={styles.label}>C Major Chord (C, E, G)</Text>
    <PianoRoll
      highlightedNotes={['C', 'E', 'G']}
      highlightColor="#78E4A9"
    />
  </View>
);

export const DMinorChord = () => (
  <View style={styles.container}>
    <Text style={styles.label}>D Minor Chord (D, F, A)</Text>
    <PianoRoll
      highlightedNotes={['D', 'F', 'A']}
      highlightColor="#78E4CF"
    />
  </View>
);

export const TwoOctaves = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Two Octaves</Text>
    <PianoRoll
      octaveRange={2}
      highlightedNotes={['C', 'E', 'G']}
      highlightColor="#E4C478"
    />
  </View>
);

export const WithoutLabels = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Without Labels</Text>
    <PianoRoll
      showLabels={false}
      highlightedNotes={['C', 'D#', 'G']}
      highlightColor="#78AEE4"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
    color: '#5E4DB2',
  },
});
