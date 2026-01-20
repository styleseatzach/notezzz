import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigation from './BottomNavigation';

export default {
  title: 'Components/Navigation/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    notes: `
# Floating Bottom Navigation

A floating bottom navigation component with two tabs:
- Keys & Chords (Piano icon)
- Lessons (School icon)

## Design Notes
- Floating pill-shaped container with rounded corners (100px radius)
- White background with shadow
- 28px from bottom of screen
- Selected state shows purple star background (#F0EDFF) behind icon
- Active icon color: #050C46 (purple900)
- Inactive icon color: #656565 (grey600)
- 16px gap between nav items
- 24px horizontal padding, 8px vertical padding
    `,
  },
};

export const Default = () => {
  const [activeTab, setActiveTab] = useState('keys-chords');

  return (
    <View style={styles.container}>
      <View style={styles.spacer} />
      <BottomNavigation
        activeTab={activeTab}
        onNavigate={setActiveTab}
      />
    </View>
  );
};

export const KeysChordsActive = () => (
  <View style={styles.container}>
    <View style={styles.spacer} />
    <BottomNavigation
      activeTab="keys-chords"
      onNavigate={() => {}}
    />
  </View>
);

export const LessonsActive = () => (
  <View style={styles.container}>
    <View style={styles.spacer} />
    <BottomNavigation
      activeTab="lessons"
      onNavigate={() => {}}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: '#F0EDFF',
    position: 'relative',
  },
  spacer: {
    flex: 1,
  },
});
