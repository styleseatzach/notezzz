import React from 'react';
import LessonContentScreen from '../../../components/screens/LessonContentScreen';
import lessonsData from '../../../data/lessons.json';

export default {
  title: 'Screens/LessonContentScreen',
  component: LessonContentScreen,
};

const lesson1 = lessonsData[0]; // Getting Started In Logic
const lesson2 = lessonsData[1]; // Basic EDM Drum Patterns

export const LogicProLesson = () => (
  <LessonContentScreen
    lessonData={lesson1}
    onClose={() => console.log('Close')}
    onBack={() => console.log('Back')}
  />
);

export const DrumPatternsLesson = () => (
  <LessonContentScreen
    lessonData={lesson2}
    onClose={() => console.log('Close')}
    onBack={() => console.log('Back')}
  />
);
