import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

/**
 * SortOrderToggle - Tab toggle between Alphabetical and Camelot sorting
 *
 * @param {Object} props
 * @param {string} props.sortOrder - 'alphabetical' | 'camelot'
 * @param {Function} props.onToggle - Callback when sort order changes
 */
const SortOrderToggle = ({
  sortOrder = 'alphabetical',
  onToggle,
}) => {
  const handleAlphabeticalPress = () => {
    if (sortOrder !== 'alphabetical') {
      onToggle?.('alphabetical');
    }
  };

  const handleCamelotPress = () => {
    if (sortOrder !== 'camelot') {
      onToggle?.('camelot');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tab,
          sortOrder === 'alphabetical' && styles.tabActive,
        ]}
        onPress={handleAlphabeticalPress}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            sortOrder === 'alphabetical' && styles.tabTextActive,
          ]}
        >
          A-Z
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          sortOrder === 'camelot' && styles.tabActive,
        ]}
        onPress={handleCamelotPress}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.tabText,
            sortOrder === 'camelot' && styles.tabTextActive,
          ]}
        >
          Camelot
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.grey100,
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 6,
  },
  tabActive: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    ...typography.caption,
    fontWeight: '600',
    color: colors.grey500,
  },
  tabTextActive: {
    color: colors.purple700,
  },
});

export default SortOrderToggle;
