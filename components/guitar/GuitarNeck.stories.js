import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GuitarNeck from './GuitarNeck';
import FullNeck from './FullNeck';
import RootPositionNeck from './RootPositionNeck';
import ChairDiagram from './ChairDiagram';
import GuitarNeckCompact from './GuitarNeckCompact';

export default {
  title: 'Components/Guitar/GuitarNeck',
  component: GuitarNeck,
};

export const GMajorPentatonic = () => (
  <View style={styles.container}>
    <Text style={styles.label}>G Major Pentatonic - Root Position (7 Frets)</Text>
    <RootPositionNeck
      scale={{ root: 'G', type: 'major', extended: false }}
      labelMode="letters"
    />
  </View>
);

export const GMinorPentatonic = () => (
  <View style={styles.container}>
    <Text style={styles.label}>G Minor Pentatonic - Root Position (7 Frets)</Text>
    <RootPositionNeck
      scale={{ root: 'G', type: 'minor', extended: false }}
      labelMode="letters"
    />
  </View>
);

export const CMajorScale = () => (
  <View style={styles.container}>
    <Text style={styles.label}>C Major Scale (Diatonic) - 12 Frets</Text>
    <GuitarNeck
      fretRange={{ start: 0, end: 12 }}
      scale={{ root: 'C', type: 'major', extended: true }}
      labelMode="letters"
    />
  </View>
);

export const AMinorPentatonic = () => (
  <View style={styles.container}>
    <Text style={styles.label}>A Minor Pentatonic - Root Position</Text>
    <RootPositionNeck
      scale={{ root: 'A', type: 'minor', extended: false }}
      labelMode="letters"
      camelotNumber="8"
    />
  </View>
);

export const WithMajorIntervals = () => (
  <View style={styles.container}>
    <Text style={styles.label}>G Major Pentatonic - Major Intervals Mode</Text>
    <RootPositionNeck
      scale={{ root: 'G', type: 'major', extended: false }}
      labelMode="majorIntervals"
    />
  </View>
);

export const WithMinorIntervals = () => (
  <View style={styles.container}>
    <Text style={styles.label}>E Minor Pentatonic - Minor Intervals Mode</Text>
    <RootPositionNeck
      scale={{ root: 'E', type: 'minor', extended: false }}
      labelMode="minorIntervals"
      camelotNumber="9"
    />
  </View>
);

export const FullNeck24Frets = () => (
  <View style={styles.container}>
    <Text style={styles.label}>G Major Pentatonic - Full 24 Fret View</Text>
    <FullNeck
      scale={{ root: 'G', type: 'major', extended: false }}
      labelMode="letters"
    />
  </View>
);

export const ChairDiagramMajor = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Chair Diagram - G Major</Text>
    <ChairDiagram
      scale={{ root: 'G', type: 'major' }}
      showIntervalLabels={true}
    />
  </View>
);

export const ChairDiagramMinor = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Chair Diagram - E Minor</Text>
    <ChairDiagram
      scale={{ root: 'E', type: 'minor' }}
      showIntervalLabels={true}
    />
  </View>
);

export const ChairDiagramBoth = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Chair Diagram - Both Major and Minor</Text>
    <ChairDiagram
      scale={{ root: 'G', type: 'major' }}
      showIntervalLabels={true}
      showBothChairs={true}
    />
  </View>
);

export const CompactFretboard = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Compact Fretboard (for cards)</Text>
    <View style={styles.compactRow}>
      <View style={styles.compactItem}>
        <Text style={styles.smallLabel}>G Major</Text>
        <GuitarNeckCompact
          scale={{ root: 'G', type: 'major', extended: false }}
          camelotNumber="9"
          width={160}
          height={60}
        />
      </View>
      <View style={styles.compactItem}>
        <Text style={styles.smallLabel}>E Minor</Text>
        <GuitarNeckCompact
          scale={{ root: 'E', type: 'minor', extended: false }}
          camelotNumber="9"
          width={160}
          height={60}
        />
      </View>
    </View>
  </View>
);

export const WithCamelotColors = () => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.label}>Guitar Necks with Camelot Colors</Text>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.smallLabel}>C Major (8B)</Text>
          <RootPositionNeck
            scale={{ root: 'C', type: 'major', extended: false }}
            labelMode="letters"
            camelotNumber="8"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.smallLabel}>G Major (9B)</Text>
          <RootPositionNeck
            scale={{ root: 'G', type: 'major', extended: false }}
            labelMode="letters"
            camelotNumber="9"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.smallLabel}>D Major (10B)</Text>
          <RootPositionNeck
            scale={{ root: 'D', type: 'major', extended: false }}
            labelMode="letters"
            camelotNumber="10"
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.smallLabel}>A Minor (8A)</Text>
          <RootPositionNeck
            scale={{ root: 'A', type: 'minor', extended: false }}
            labelMode="letters"
            camelotNumber="8"
          />
        </View>
      </View>
    </View>
  </ScrollView>
);

export const AllScaleTypes = () => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.label}>Scale Type Comparison (G root)</Text>

      <View style={styles.scaleSection}>
        <Text style={styles.sectionTitle}>Major Pentatonic (5 notes)</Text>
        <GuitarNeck
          fretRange={{ start: 2, end: 8 }}
          scale={{ root: 'G', type: 'major', extended: false }}
          labelMode="majorIntervals"
        />
      </View>

      <View style={styles.scaleSection}>
        <Text style={styles.sectionTitle}>Major Diatonic (7 notes)</Text>
        <GuitarNeck
          fretRange={{ start: 2, end: 8 }}
          scale={{ root: 'G', type: 'major', extended: true }}
          labelMode="majorIntervals"
        />
      </View>

      <View style={styles.scaleSection}>
        <Text style={styles.sectionTitle}>Minor Pentatonic (5 notes)</Text>
        <GuitarNeck
          fretRange={{ start: 2, end: 8 }}
          scale={{ root: 'G', type: 'minor', extended: false }}
          labelMode="minorIntervals"
        />
      </View>

      <View style={styles.scaleSection}>
        <Text style={styles.sectionTitle}>Minor Diatonic (7 notes)</Text>
        <GuitarNeck
          fretRange={{ start: 2, end: 8 }}
          scale={{ root: 'G', type: 'minor', extended: true }}
          labelMode="minorIntervals"
        />
      </View>
    </View>
  </ScrollView>
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
    marginBottom: 16,
    color: '#5E4DB2',
    textAlign: 'center',
  },
  smallLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  row: {
    width: '100%',
    marginBottom: 24,
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  },
  compactRow: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  compactItem: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
  },
  scaleSection: {
    width: '100%',
    marginBottom: 32,
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
