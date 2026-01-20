import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg from 'react-native-svg';
import FretboardNote from './FretboardNote';
import { camelotColors, colors } from '../../styles/colors';

export default {
  title: 'Components/Guitar/FretboardNote',
  component: FretboardNote,
};

export const RootNote = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Root Note (C)</Text>
    <Text style={styles.sublabel}>Medium fill, larger size, press to see hover state</Text>
    <Svg width={200} height={100} viewBox="0 0 200 100">
      <FretboardNote
        cx={100}
        cy={50}
        radius={16}
        fill={camelotColors[8].medium}
        stroke={null}
        label="C"
        textColor="#FFFFFF"
      />
    </Svg>
  </View>
);

export const ScaleNote = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Scale Note (E)</Text>
    <Text style={styles.sublabel}>Light fill with medium outline, press to see hover state</Text>
    <Svg width={200} height={100} viewBox="0 0 200 100">
      <FretboardNote
        cx={100}
        cy={50}
        radius={14}
        fill={camelotColors[8].light}
        stroke={camelotColors[8].medium}
        label="E"
        textColor={camelotColors[8].dark}
      />
    </Svg>
  </View>
);

export const WithIntervalLabel = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Interval Label (5)</Text>
    <Text style={styles.sublabel}>Showing interval instead of note name</Text>
    <Svg width={200} height={100} viewBox="0 0 200 100">
      <FretboardNote
        cx={100}
        cy={50}
        radius={14}
        fill={camelotColors[9].light}
        stroke={camelotColors[9].medium}
        label="5"
        textColor={camelotColors[9].dark}
      />
    </Svg>
  </View>
);

export const SharpNote = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Sharp Note (F#)</Text>
    <Text style={styles.sublabel}>Accidental notes with smaller font</Text>
    <Svg width={200} height={100} viewBox="0 0 200 100">
      <FretboardNote
        cx={100}
        cy={50}
        radius={14}
        fill={camelotColors[2].light}
        stroke={camelotColors[2].medium}
        label="F#"
        textColor={camelotColors[2].dark}
      />
    </Svg>
  </View>
);

export const FlatNote = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Flat Note (Bb)</Text>
    <Text style={styles.sublabel}>Accidental notes with smaller font</Text>
    <Svg width={200} height={100} viewBox="0 0 200 100">
      <FretboardNote
        cx={100}
        cy={50}
        radius={14}
        fill={camelotColors[6].light}
        stroke={camelotColors[6].medium}
        label="Bb"
        textColor={camelotColors[6].dark}
      />
    </Svg>
  </View>
);

export const AllCamelotColors = () => (
  <View style={styles.container}>
    <Text style={styles.label}>All Camelot Colors</Text>
    <Text style={styles.sublabel}>Press any note to see hover state</Text>
    <Svg width={600} height={300} viewBox="0 0 600 300">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, index) => {
        const col = index % 4;
        const row = Math.floor(index / 4);
        const cx = 80 + col * 140;
        const cy = 60 + row * 80;
        return (
          <FretboardNote
            key={num}
            cx={cx}
            cy={cy}
            radius={14}
            fill={camelotColors[num].light}
            stroke={camelotColors[num].medium}
            label={`${num}`}
            textColor={camelotColors[num].dark}
          />
        );
      })}
    </Svg>
  </View>
);

export const MultipleNotesInScale = () => (
  <View style={styles.container}>
    <Text style={styles.label}>C Major Scale Pattern</Text>
    <Text style={styles.sublabel}>Root (C) and scale notes (D, E, G, A, B)</Text>
    <Svg width={500} height={100} viewBox="0 0 500 100">
      <FretboardNote cx={70} cy={50} radius={16} fill={camelotColors[8].medium} label="C" textColor="#FFFFFF" />
      <FretboardNote cx={140} cy={50} radius={14} fill={camelotColors[8].light} stroke={camelotColors[8].medium} label="D" textColor={camelotColors[8].dark} />
      <FretboardNote cx={210} cy={50} radius={14} fill={camelotColors[8].light} stroke={camelotColors[8].medium} label="E" textColor={camelotColors[8].dark} />
      <FretboardNote cx={280} cy={50} radius={14} fill={camelotColors[8].light} stroke={camelotColors[8].medium} label="G" textColor={camelotColors[8].dark} />
      <FretboardNote cx={350} cy={50} radius={14} fill={camelotColors[8].light} stroke={camelotColors[8].medium} label="A" textColor={camelotColors[8].dark} />
      <FretboardNote cx={420} cy={50} radius={14} fill={camelotColors[8].light} stroke={camelotColors[8].medium} label="B" textColor={camelotColors[8].dark} />
    </Svg>
  </View>
);

export const WithPressCallback = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Interactive Note</Text>
    <Text style={styles.sublabel}>Press to trigger callback (check console)</Text>
    <Svg width={200} height={100} viewBox="0 0 200 100">
      <FretboardNote
        cx={100}
        cy={50}
        radius={14}
        fill={camelotColors[8].light}
        stroke={camelotColors[8].medium}
        label="G"
        textColor={camelotColors[8].dark}
        onPress={() => console.log('Note G pressed!')}
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
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
});
