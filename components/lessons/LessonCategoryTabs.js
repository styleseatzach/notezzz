import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

const LessonCategoryTabs = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'logic-pro', label: 'Logic Pro' },
    { id: 'music-theory', label: 'Music Theory' },
    { id: 'songwriting', label: 'Song Writing' },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.tab,
            activeCategory === category.id && styles.tabActive,
          ]}
          onPress={() => onCategoryChange(category.id)}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeCategory === category.id && styles.tabTextActive,
            ]}
          >
            {category.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing[24],
    paddingVertical: spacing[16],
    gap: spacing[8],
    backgroundColor: colors.white,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 100,
    backgroundColor: colors.white,
    shadowColor: 'rgba(152, 152, 152, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 3,
  },
  tabActive: {
    backgroundColor: colors.purple900, // #050C46
  },
  tabText: {
    ...typography.body,
    fontWeight: '400',
    color: colors.purple900, // #050C46
    letterSpacing: 0.16,
    lineHeight: 22.4,
  },
  tabTextActive: {
    color: colors.purple50, // #F0EDFF - light purple for active
  },
});

export default LessonCategoryTabs;
