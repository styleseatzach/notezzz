import React from 'react';
import { View, StyleSheet } from 'react-native';
import LessonCard from './LessonCard';
import { lessonColors } from '../../styles/colors';

export default {
  title: 'Components/Cards/LessonCard',
  component: LessonCard,
};

export const LogicProLesson = () => (
  <View style={styles.container}>
    <LessonCard
      lessonNumber={1}
      title="Getting Started In Logic"
      description="All of them except that one that David played that one time."
      progress={70}
      backgroundColor={lessonColors.logicPro}
      category="logic-pro"
      onClick={() => alert('Lesson clicked')}
    />
  </View>
);

export const MusicTheoryLesson = () => (
  <View style={styles.container}>
    <LessonCard
      lessonNumber={2}
      title="How Do Notes Work?"
      description="Basically they are specific frequencies that sound good together when you play them."
      progress={45}
      backgroundColor={lessonColors.musicTheory}
      category="music-theory"
      onClick={() => {}}
    />
  </View>
);

export const SongwritingLesson = () => (
  <View style={styles.container}>
    <LessonCard
      lessonNumber={3}
      title="Creating Chord Progressions"
      description="Learn how to create catchy chord progressions that move your listeners."
      progress={0}
      backgroundColor={lessonColors.songwriting}
      category="songwriting"
      onClick={() => {}}
    />
  </View>
);

export const CompletedLesson = () => (
  <View style={styles.container}>
    <LessonCard
      lessonNumber={4}
      title="Basic EDM Drum Patterns"
      description="Boots and Cats and Cats and Boots"
      progress={100}
      backgroundColor={lessonColors.lightestGreen}
      category="logic-pro"
      onClick={() => {}}
    />
  </View>
);

export const LessonsList = () => (
  <View style={styles.container}>
    <View style={styles.list}>
      <LessonCard
        lessonNumber={1}
        title="Getting Started In Logic"
        description="All of them except that one that David played that one time."
        progress={70}
        backgroundColor={lessonColors.logicPro}
        category="logic-pro"
        onClick={() => {}}
      />
      <LessonCard
        lessonNumber={2}
        title="Basic EDM Drum Patterns"
        description="Boots and Cats and Cats and Boots"
        progress={70}
        backgroundColor={lessonColors.musicTheory}
        category="logic-pro"
        onClick={() => {}}
      />
      <LessonCard
        lessonNumber={3}
        title="Mixing Basics"
        description="Learn the fundamentals of mixing your tracks."
        progress={30}
        backgroundColor={lessonColors.lightestOrange}
        category="logic-pro"
        onClick={() => {}}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  list: {
    gap: 16,
  },
});
