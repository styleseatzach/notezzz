import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ChordPopup from './ChordPopup';
import { colors, camelotColors } from '../../styles/colors';

export default {
  title: 'Components/UI/ChordPopup',
  component: ChordPopup,
};

// Helper component to show the popup
const PopupDemo = ({ noteInfo, camelotNumber, keyColor, scaleType, title, subtitle }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      {subtitle && <Text style={styles.sublabel}>{subtitle}</Text>}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: keyColor || camelotColors[camelotNumber].light }]}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.buttonText}>Show Chord Popup</Text>
      </TouchableOpacity>

      <ChordPopup
        visible={visible}
        onClose={() => setVisible(false)}
        noteInfo={noteInfo}
        camelotNumber={camelotNumber}
        keyColor={keyColor}
        scaleType={scaleType}
      />
    </View>
  );
};

export const CMajorRootNote = () => (
  <PopupDemo
    title="C Major - Root Note (I)"
    subtitle="Click to open popup, use arrows to cycle through C, Cmaj7, C6"
    noteInfo={{
      note: 'C',
      fret: 3,
      string: 2,
      chord: { degree: 'I', name: 'C Major', notes: ['C', 'E', 'G'], type: 'major' }
    }}
    camelotNumber={8}
    keyColor="#FFF7E5"
    scaleType="major"
  />
);

export const DMinorSecondDegree = () => (
  <PopupDemo
    title="D Minor in C Major - ii Chord"
    subtitle="Click to open popup, use arrows to cycle through Dm, Dm7"
    noteInfo={{
      note: 'D',
      fret: 5,
      string: 2,
      chord: { degree: 'ii', name: 'D Minor', notes: ['D', 'F', 'A'], type: 'minor' }
    }}
    camelotNumber={8}
    keyColor="#FFF7E5"
    scaleType="major"
  />
);

export const GMajorFifthDegree = () => (
  <PopupDemo
    title="G Major in C Major - V Chord (Dominant)"
    subtitle="Click to open popup, use arrows to cycle through G, G7"
    noteInfo={{
      note: 'G',
      fret: 10,
      string: 2,
      chord: { degree: 'V', name: 'G Major', notes: ['G', 'B', 'D'], type: 'major' }
    }}
    camelotNumber={8}
    keyColor="#FFF7E5"
    scaleType="major"
  />
);

export const AMinorSixthDegree = () => (
  <PopupDemo
    title="A Minor in C Major - vi Chord"
    subtitle="Click to open popup, use arrows to cycle through Am, Am7"
    noteInfo={{
      note: 'A',
      fret: 12,
      string: 2,
      chord: { degree: 'vi', name: 'A Minor', notes: ['A', 'C', 'E'], type: 'minor' }
    }}
    camelotNumber={8}
    keyColor="#FFF7E5"
    scaleType="major"
  />
);

export const BDiminishedSeventhDegree = () => (
  <PopupDemo
    title="B Diminished in C Major - vii° Chord"
    subtitle="Click to open popup, use arrows to cycle through Bdim, Bm7♭5"
    noteInfo={{
      note: 'B',
      fret: 2,
      string: 1,
      chord: { degree: 'vii°', name: 'B Diminished', notes: ['B', 'D', 'F'], type: 'diminished' }
    }}
    camelotNumber={8}
    keyColor="#FFF7E5"
    scaleType="major"
  />
);

export const AMinorKeyRootNote = () => (
  <PopupDemo
    title="A Minor - Root Note (i) in Minor Key"
    subtitle="Click to open popup, use arrows to cycle through Am, Am7"
    noteInfo={{
      note: 'A',
      fret: 5,
      string: 0,
      chord: { degree: 'i', name: 'A Minor', notes: ['A', 'C', 'E'], type: 'minor' }
    }}
    camelotNumber={8}
    keyColor="#FFF7E5"
    scaleType="minor"
  />
);

export const FMajorInAMinor = () => (
  <PopupDemo
    title="F Major in A Minor - VI Chord"
    subtitle="Click to open popup, use arrows to cycle through F, Fmaj7"
    noteInfo={{
      note: 'F',
      fret: 1,
      string: 0,
      chord: { degree: 'VI', name: 'F Major', notes: ['F', 'A', 'C'], type: 'major' }
    }}
    camelotNumber={8}
    keyColor="#FFF7E5"
    scaleType="minor"
  />
);

export const GMajorWithDifferentCamelotColor = () => (
  <PopupDemo
    title="G Major - Camelot 9B (Green)"
    subtitle="Different camelot color (9B) showing color theming"
    noteInfo={{
      note: 'G',
      fret: 3,
      string: 0,
      chord: { degree: 'I', name: 'G Major', notes: ['G', 'B', 'D'], type: 'major' }
    }}
    camelotNumber={9}
    keyColor="#FEFFE5"
    scaleType="major"
  />
);

export const DSharpMinorWithSharps = () => (
  <PopupDemo
    title="D# Minor - Camelot 2A (Cyan)"
    subtitle="Sharp note with different camelot color"
    noteInfo={{
      note: 'D#',
      fret: 6,
      string: 2,
      chord: { degree: 'i', name: 'D# Minor', notes: ['D#', 'F#', 'A#'], type: 'minor' }
    }}
    camelotNumber={2}
    keyColor="#E5FFFA"
    scaleType="minor"
  />
);

export const FSharpMajorHighFret = () => (
  <PopupDemo
    title="F# Major - High Fret Position"
    subtitle="Testing voicing selection at higher fret positions"
    noteInfo={{
      note: 'F#',
      fret: 14,
      string: 0,
      chord: { degree: 'I', name: 'F# Major', notes: ['F#', 'A#', 'C#'], type: 'major' }
    }}
    camelotNumber={2}
    keyColor="#E5FFFA"
    scaleType="major"
  />
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    minHeight: 200,
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
    maxWidth: 400,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
});
