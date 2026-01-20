import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import GuitarNeck from './GuitarNeck';

/**
 * FullNeck component - Shows full 24-fret guitar neck
 * Wraps in horizontal ScrollView for mobile
 *
 * @param {Object} props
 * @param {Object} props.scale - {root, type, extended} scale configuration
 * @param {string} props.labelMode - 'letters' | 'majorIntervals' | 'minorIntervals'
 * @param {string} props.camelotNumber - Camelot number for color theming
 */
const FullNeck = ({
  scale = { root: 'G', type: 'major', extended: false },
  labelMode = 'letters',
  camelotNumber = null,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContent}
      >
        <GuitarNeck
          fretRange={{ start: 0, end: 24 }}
          scale={scale}
          labelMode={labelMode}
          highlightChair={true}
          showFretNumbers={true}
          showStringNames={true}
          camelotNumber={camelotNumber}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  scrollContent: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
});

export default FullNeck;
