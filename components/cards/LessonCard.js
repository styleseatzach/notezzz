import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBar from '../lessons/ProgressBar';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';

const LessonCard = ({
  lessonNumber,
  title,
  description,
  progress = 0,
  backgroundColor,
  category,
  onClick,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor }]}
      onPress={onClick}
      activeOpacity={0.8}
    >
      <Text style={styles.lessonLabel}>Lesson {lessonNumber}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>

      <View style={styles.progressSection}>
        <ProgressBar progress={progress} color={colors.purple900} height={10} />
        <Text style={styles.progressText}>{progress}% Complete</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 24,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 3,
    minHeight: 201,
    backgroundColor: colors.white,
  },
  lessonLabel: {
    ...typography.caption,
    color: colors.purple900, // #050C46
    marginBottom: spacing[8],
    letterSpacing: 0.12,
    fontWeight: '500',
  },
  title: {
    ...typography.sectionTitle,
    fontWeight: '400',
    color: colors.black, // #15151A
    marginBottom: spacing[8],
  },
  description: {
    ...typography.caption,
    color: colors.grey800, // #3B3B3B
    marginBottom: spacing[16],
    flex: 1,
    letterSpacing: 0.12,
    fontWeight: '500',
  },
  progressSection: {
    gap: spacing[8],
  },
  progressText: {
    ...typography.smallCaption,
    color: colors.grey800, // #3B3B3B
    fontWeight: '500',
    letterSpacing: 0.1,
  },
});

export default LessonCard;
