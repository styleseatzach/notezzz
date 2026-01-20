import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FloatingCloseButton from './FloatingCloseButton';
import BackButton from './BackButton';

export default {
  title: 'Components/Navigation/Buttons',
};

export const CloseButtonBottomCenter = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Floating Close Button (Bottom Center)</Text>
    <View style={styles.previewArea}>
      <FloatingCloseButton onPress={() => alert('Close pressed')} position="bottom-center" />
    </View>
  </View>
);

export const CloseButtonTopRight = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Floating Close Button (Top Right)</Text>
    <View style={styles.previewArea}>
      <FloatingCloseButton onPress={() => alert('Close pressed')} position="top-right" />
    </View>
  </View>
);

export const BackButtonExample = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Back Button</Text>
    <View style={styles.row}>
      <BackButton onPress={() => alert('Back pressed')} />
    </View>
  </View>
);

export const AllButtons = () => (
  <View style={styles.container}>
    <Text style={styles.label}>All Navigation Buttons</Text>
    <View style={styles.row}>
      <BackButton onPress={() => {}} />
      <View style={{ width: 16 }} />
      <FloatingCloseButton onPress={() => {}} position="top-right" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
    color: '#5E4DB2',
  },
  previewArea: {
    height: 200,
    backgroundColor: '#F0EDFF',
    borderRadius: 8,
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
