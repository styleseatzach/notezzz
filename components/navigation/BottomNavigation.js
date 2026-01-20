import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigationItem from './BottomNavigationItem';
import { colors } from '../../styles/colors';

const BottomNavigation = ({ activeTab, onNavigate }) => {
  const tabs = [
    { id: 'keys-chords', label: 'Keys & Chords' },
    { id: 'lessons', label: 'Lessons' },
  ];

  return (
    <View style={styles.bottomNavContainer}>
      <View style={styles.bottomNav}>
        {tabs.map((tab) => (
          <BottomNavigationItem
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onPress={onNavigate}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavContainer: {
    position: 'absolute',
    bottom: 28,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 100,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },
});

export default BottomNavigation;
