import React from 'react';
import CamelotWheelScreen from '../../../components/screens/CamelotWheelScreen';

export default {
  title: 'Screens/CamelotWheelScreen',
  component: CamelotWheelScreen,
};

export const Default = () => (
  <CamelotWheelScreen
    onClose={() => console.log('Close')}
    onSegmentPress={(camelotKey, keyName) => console.log('Selected:', camelotKey, keyName)}
  />
);
