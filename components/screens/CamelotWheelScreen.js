import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';
import CamelotWheel from '../camelot/CamelotWheel';
import CloseIcon from '../icons/CloseIcon';

const CamelotWheelScreen = ({ onClose, onSegmentPress }) => {
  return (
    <View style={styles.container}>
      {/* Overlay */}
      <View style={styles.overlay} />

      {/* Content */}
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Camelot Wheel</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <View style={styles.floatingButton}>
              <CloseIcon width={20} height={20} fill={colors.white} />
            </View>
          </TouchableOpacity>
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Select a key to see compatible keys for harmonic mixing
        </Text>

        {/* Camelot Wheel */}
        <View style={styles.wheelContainer}>
          <CamelotWheel size={320} onSegmentPress={onSegmentPress} />
        </View>

        {/* Legend */}
        <View style={styles.legend}>
          <Text style={styles.legendTitle}>Mixing Guide</Text>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.purple500 }]} />
            <Text style={styles.legendText}>Inner ring: Minor keys (A)</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.purple700 }]} />
            <Text style={styles.legendText}>Outer ring: Major keys (B)</Text>
          </View>
          <Text style={styles.legendNote}>
            Mix ±1 step, same number, or inner/outer on same number
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    marginHorizontal: spacing[24],
    marginVertical: spacing[48],
    borderRadius: 16,
    padding: spacing[24],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[16],
  },
  title: {
    ...typography.sectionTitle,
    color: colors.black,
  },
  closeButton: {
    position: 'relative',
  },
  floatingButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.purple900,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  description: {
    ...typography.body,
    color: colors.grey600,
    marginBottom: spacing[24],
    textAlign: 'center',
  },
  wheelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[24],
  },
  legend: {
    backgroundColor: colors.grey100,
    borderRadius: 8,
    padding: spacing[16],
  },
  legendTitle: {
    ...typography.body,
    fontWeight: '600',
    color: colors.black,
    marginBottom: spacing[12],
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[8],
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: spacing[8],
  },
  legendText: {
    ...typography.caption,
    color: colors.grey700,
  },
  legendNote: {
    ...typography.caption,
    color: colors.grey600,
    marginTop: spacing[8],
    fontStyle: 'italic',
  },
});

export default CamelotWheelScreen;
