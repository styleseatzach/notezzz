import React from 'react';
import { View, StyleSheet } from 'react-native';
import GuitarNeck from './GuitarNeck';
import { findRootPositionFret } from '../../utils/chairSystem';

/**
 * RootPositionNeck component - Shows 7 frets starting from the root position
 * Compact view focusing on one chair pattern with fret numbers for orientation
 *
 * @param {Object} props
 * @param {Object} props.scale - {root, type, extended} scale configuration
 * @param {string} props.labelMode - 'letters' | 'majorIntervals' | 'minorIntervals'
 * @param {number} props.startFret - Override starting fret (auto-finds root if not provided)
 * @param {string} props.camelotNumber - Camelot number for color theming
 */
const RootPositionNeck = ({
  scale = { root: 'G', type: 'major', extended: false },
  labelMode = 'letters',
  startFret = null,
  camelotNumber = null,
}) => {
  // Auto-find root position if not specified
  const calculatedStartFret = startFret !== null
    ? startFret
    : findRootPositionFret(scale.root);

  // Show 7 frets from the starting position
  const endFret = calculatedStartFret + 6;

  return (
    <View style={styles.container}>
      <GuitarNeck
        fretRange={{ start: calculatedStartFret, end: endFret }}
        scale={scale}
        labelMode={labelMode}
        highlightChair={true}
        showFretNumbers={true}
        showStringNames={true}
        camelotNumber={camelotNumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RootPositionNeck;
