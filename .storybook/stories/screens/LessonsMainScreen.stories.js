import React from 'react';
import LessonsMainScreen from '../../../components/screens/LessonsMainScreen';

export default {
  title: 'Screens/LessonsMainScreen',
  component: LessonsMainScreen,
};

export const LogicPro = () => (
  <LessonsMainScreen
    activeTab="lessons"
    onNavigate={(tab) => console.log('Navigate to:', tab)}
    initialCategory="logic-pro"
  />
);

export const MusicTheory = () => (
  <LessonsMainScreen
    activeTab="lessons"
    onNavigate={(tab) => console.log('Navigate to:', tab)}
    initialCategory="music-theory"
  />
);

export const Songwriting = () => (
  <LessonsMainScreen
    activeTab="lessons"
    onNavigate={(tab) => console.log('Navigate to:', tab)}
    initialCategory="songwriting"
  />
);
