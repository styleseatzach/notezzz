import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import LessonCategoryTabs from '../lessons/LessonCategoryTabs';
import LessonCard from '../cards/LessonCard';
import BottomNavigation from '../navigation/BottomNavigation';
import PageHeader from '../ui/PageHeader';
import lessonsData from '../../data/lessons.json';

const LessonsMainScreen = ({
  activeTab = 'lessons',
  onNavigate,
  initialCategory = 'logic-pro'
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Filter lessons by category
  const filteredLessons = lessonsData.filter(
    lesson => lesson.category === activeCategory
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <PageHeader
          title="Lessons"
          subtitle="Master music production and theory step by step"
          showLogo={true}
        />

        {/* Category Tabs */}
        <LessonCategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Lessons List */}
        <View style={styles.lessonsContainer}>
          {filteredLessons.map((lesson) => (
            <View key={lesson.id} style={styles.lessonCardWrapper}>
              <LessonCard
                lessonNumber={lesson.number}
                title={lesson.title}
                description={lesson.description}
                progress={lesson.progress}
                backgroundColor={lesson.backgroundColor}
                category={lesson.category}
                onClick={() => console.log('Open lesson:', lesson.id)}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onNavigate={onNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing[24],
  },
  lessonsContainer: {
    paddingHorizontal: spacing[24],
    paddingTop: spacing[8],
    gap: spacing[16],
  },
  lessonCardWrapper: {
    marginBottom: spacing[16],
  },
});

export default LessonsMainScreen;
