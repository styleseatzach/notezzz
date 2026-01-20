import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InstrumentToggle from './InstrumentToggle';

export default {
  title: 'Components/UI/InstrumentToggle',
  component: InstrumentToggle,
};

export const DefaultPiano = () => {
  const [instrument, setInstrument] = useState('piano');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Default Toggle (Piano selected)</Text>
      <InstrumentToggle
        activeInstrument={instrument}
        onToggle={setInstrument}
      />
      <Text style={styles.value}>Selected: {instrument}</Text>
    </View>
  );
};

export const DefaultGuitar = () => {
  const [instrument, setInstrument] = useState('guitar');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Default Toggle (Guitar selected)</Text>
      <InstrumentToggle
        activeInstrument={instrument}
        onToggle={setInstrument}
      />
      <Text style={styles.value}>Selected: {instrument}</Text>
    </View>
  );
};

export const CompactPiano = () => {
  const [instrument, setInstrument] = useState('piano');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Compact Toggle (Piano selected)</Text>
      <InstrumentToggle
        activeInstrument={instrument}
        onToggle={setInstrument}
        variant="compact"
      />
      <Text style={styles.value}>Selected: {instrument}</Text>
    </View>
  );
};

export const CompactGuitar = () => {
  const [instrument, setInstrument] = useState('guitar');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Compact Toggle (Guitar selected)</Text>
      <InstrumentToggle
        activeInstrument={instrument}
        onToggle={setInstrument}
        variant="compact"
      />
      <Text style={styles.value}>Selected: {instrument}</Text>
    </View>
  );
};

export const BothVariants = () => {
  const [instrument, setInstrument] = useState('piano');
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Both Variants (Synced)</Text>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.smallLabel}>Default</Text>
          <InstrumentToggle
            activeInstrument={instrument}
            onToggle={setInstrument}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.smallLabel}>Compact</Text>
          <InstrumentToggle
            activeInstrument={instrument}
            onToggle={setInstrument}
            variant="compact"
          />
        </View>
      </View>

      <Text style={styles.value}>Selected: {instrument}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5E4DB2',
  },
  smallLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
    color: '#666',
    textAlign: 'center',
  },
  value: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'flex-start',
  },
  item: {
    alignItems: 'center',
  },
});
