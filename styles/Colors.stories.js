import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, camelotColors, lessonColors } from './colors';

export default {
  title: 'Design Tokens/Colors',
};

const ColorSwatch = ({ name, value }) => (
  <View style={styles.swatchContainer}>
    <View style={[styles.swatch, { backgroundColor: value }]} />
    <View style={styles.swatchInfo}>
      <Text style={styles.colorName}>{name}</Text>
      <Text style={styles.colorValue}>{value}</Text>
    </View>
  </View>
);

export const BaseColors = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.sectionTitle}>Base Colors</Text>
    {Object.entries(colors).map(([name, value]) => (
      <ColorSwatch key={name} name={name} value={value} />
    ))}
  </ScrollView>
);

// Map Camelot numbers to their corresponding keys
const camelotKeyNames = {
  '1': { minor: 'G# Minor', major: 'B Major' },
  '2': { minor: 'D# Minor', major: 'F# Major' },
  '3': { minor: 'A# Minor', major: 'C# Major' },
  '4': { minor: 'F Minor', major: 'G# Major' },
  '5': { minor: 'C Minor', major: 'D# Major' },
  '6': { minor: 'G Minor', major: 'A# Major' },
  '7': { minor: 'D Minor', major: 'F Major' },
  '8': { minor: 'A Minor', major: 'C Major' },
  '9': { minor: 'E Minor', major: 'G Major' },
  '10': { minor: 'B Minor', major: 'D Major' },
  '11': { minor: 'F# Minor', major: 'A Major' },
  '12': { minor: 'C# Minor', major: 'E Major' },
};

export const CamelotColors = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.sectionTitle}>Camelot System Colors</Text>
    <Text style={styles.description}>
      Colors for all 24 musical keys in the Camelot wheel system (Light, Medium, Dark)
    </Text>
    {Object.entries(camelotColors).map(([name, shades]) => {
      const keyInfo = camelotKeyNames[name];
      return (
        <View key={name} style={styles.camelotGroup}>
          <Text style={styles.camelotKeyName}>
            {name}A and {name}B
          </Text>
          <Text style={styles.camelotKeyInfo}>
            {keyInfo.minor} / {keyInfo.major}
          </Text>
          <View style={styles.shadeRow}>
            <ColorSwatch name="Light" value={shades.light} />
            <ColorSwatch name="Medium" value={shades.medium} />
            <ColorSwatch name="Dark" value={shades.dark} />
          </View>
        </View>
      );
    })}
  </ScrollView>
);

export const LessonColors = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.sectionTitle}>Lesson Category Colors</Text>
    {Object.entries(lessonColors).map(([name, value]) => (
      <ColorSwatch key={name} name={name} value={value} />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#15151A',
  },
  description: {
    fontSize: 14,
    color: '#737272',
    marginBottom: 16,
  },
  swatchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
  },
  swatch: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    marginRight: 12,
  },
  swatchInfo: {
    flex: 1,
  },
  colorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#15151A',
    marginBottom: 4,
  },
  colorValue: {
    fontSize: 14,
    fontFamily: 'monospace',
    color: '#737272',
  },
  camelotGroup: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
  },
  camelotKeyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5E4DB2',
    marginBottom: 4,
  },
  camelotKeyInfo: {
    fontSize: 14,
    color: '#737272',
    marginBottom: 12,
  },
  shadeRow: {
    flexDirection: 'row',
    gap: 8,
  },
});
