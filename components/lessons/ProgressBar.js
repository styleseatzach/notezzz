import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const ProgressBar = ({
  progress = 0,
  color = colors.purple900,
  height = 10,
}) => {
  const progressPercentage = Math.min(100, Math.max(0, progress));

  return (
    <View style={[styles.container, { height }]}>
      <View
        style={[
          styles.fill,
          {
            width: `${progressPercentage}%`,
            backgroundColor: color,
            height,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey100,
    borderRadius: 100,
    overflow: 'hidden',
    width: '100%',
  },
  fill: {
    borderRadius: 100,
  },
});

export default ProgressBar;
