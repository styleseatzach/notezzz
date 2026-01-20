import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import VerticalFullNeck from './VerticalFullNeck';

export default {
  title: 'Components/Guitar/VerticalFullNeck',
  component: VerticalFullNeck,
};

export const GMajorDiatonic = () => (
  <View style={styles.container}>
    <Text style={styles.label}>G Major - 7 Notes (24 Frets)</Text>
    <VerticalFullNeck
      scale={{ root: 'G', type: 'major', extended: true }}
      labelMode="letters"
      camelotNumber="9"
      maxFrets={24}
    />
  </View>
);

export const EMinorDiatonic = () => (
  <View style={styles.container}>
    <Text style={styles.label}>E Minor - 7 Notes (24 Frets)</Text>
    <VerticalFullNeck
      scale={{ root: 'E', type: 'minor', extended: true }}
      labelMode="letters"
      camelotNumber="9"
      maxFrets={24}
    />
  </View>
);

export const CMajorWithCamelot = () => (
  <View style={styles.container}>
    <Text style={styles.label}>C Major - Camelot 8B Colors</Text>
    <VerticalFullNeck
      scale={{ root: 'C', type: 'major', extended: true }}
      labelMode="letters"
      camelotNumber="8"
      maxFrets={24}
    />
  </View>
);

export const AMinorWithCamelot = () => (
  <View style={styles.container}>
    <Text style={styles.label}>A Minor - Camelot 8A Colors</Text>
    <VerticalFullNeck
      scale={{ root: 'A', type: 'minor', extended: true }}
      labelMode="letters"
      camelotNumber="8"
      maxFrets={24}
    />
  </View>
);

export const DMajorCamelot10 = () => (
  <View style={styles.container}>
    <Text style={styles.label}>D Major - Camelot 10B Colors</Text>
    <VerticalFullNeck
      scale={{ root: 'D', type: 'major', extended: true }}
      labelMode="letters"
      camelotNumber="10"
      maxFrets={24}
    />
  </View>
);

export const IntervalLabels = () => (
  <View style={styles.container}>
    <Text style={styles.label}>G Major with Interval Labels</Text>
    <VerticalFullNeck
      scale={{ root: 'G', type: 'major', extended: true }}
      labelMode="majorIntervals"
      camelotNumber="9"
      maxFrets={24}
    />
  </View>
);

export const AllMajorKeys = () => (
  <ScrollView style={styles.scrollContainer}>
    <View style={styles.gridContainer}>
      <Text style={styles.sectionLabel}>All Major Keys - Vertical Fretboards</Text>
      {['C', 'G', 'D', 'A', 'E', 'B', 'F'].map((root, index) => (
        <View key={root} style={styles.gridItem}>
          <Text style={styles.itemLabel}>{root} Major</Text>
          <VerticalFullNeck
            scale={{ root, type: 'major', extended: false }}
            labelMode="letters"
            camelotNumber={String(8 + index > 12 ? 8 + index - 12 : 8 + index)}
            maxFrets={12}
          />
        </View>
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    minHeight: 600,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridContainer: {
    padding: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#5E4DB2',
    textAlign: 'center',
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 24,
    color: '#5E4DB2',
    textAlign: 'center',
  },
  gridItem: {
    marginBottom: 32,
    alignItems: 'center',
    width: '100%',
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#666',
  },
});
