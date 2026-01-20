import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';
import CloseIcon from '../icons/CloseIcon';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import ProgressBar from '../lessons/ProgressBar';

const LessonContentScreen = ({
  lessonData,
  onClose,
  onBack
}) => {
  if (!lessonData) {
    return null;
  }

  const { number, title, description, progress, backgroundColor, category } = lessonData;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onBack}
            activeOpacity={0.7}
          >
            <ChevronLeftIcon width={24} height={24} fill={colors.black} />
          </TouchableOpacity>
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

        <Text style={styles.lessonNumber}>Lesson {number}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        {/* Progress */}
        <View style={styles.progressContainer}>
          <ProgressBar progress={progress} color={colors.purple900} />
          <Text style={styles.progressText}>{progress}% Complete</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderTitle}>Lesson Content Coming Soon</Text>
          <Text style={styles.placeholderText}>
            This section will include:
          </Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>• Video lessons</Text>
            <Text style={styles.featureItem}>• Interactive exercises</Text>
            <Text style={styles.featureItem}>• Images with lightbox viewer</Text>
            <Text style={styles.featureItem}>• Progress tracking</Text>
            <Text style={styles.featureItem}>• Quiz questions</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: spacing[24],
    paddingTop: spacing[48],
    paddingBottom: spacing[24],
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[24],
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
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
  lessonNumber: {
    ...typography.caption,
    color: colors.grey700,
    marginBottom: spacing[8],
  },
  title: {
    ...typography.hero,
    color: colors.black,
    marginBottom: spacing[12],
  },
  description: {
    ...typography.body,
    color: colors.grey700,
    marginBottom: spacing[16],
  },
  progressContainer: {
    marginTop: spacing[8],
  },
  progressText: {
    ...typography.caption,
    color: colors.grey700,
    marginTop: spacing[8],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing[24],
    paddingTop: spacing[32],
    paddingBottom: spacing[32],
  },
  placeholderContainer: {
    backgroundColor: colors.grey100,
    borderRadius: 8,
    padding: spacing[24],
    alignItems: 'center',
  },
  placeholderTitle: {
    ...typography.sectionTitle,
    color: colors.black,
    marginBottom: spacing[16],
  },
  placeholderText: {
    ...typography.body,
    color: colors.grey700,
    marginBottom: spacing[16],
    textAlign: 'center',
  },
  featureList: {
    alignSelf: 'stretch',
    paddingLeft: spacing[16],
  },
  featureItem: {
    ...typography.body,
    color: colors.grey700,
    marginBottom: spacing[8],
  },
});

export default LessonContentScreen;
