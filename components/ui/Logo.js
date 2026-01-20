import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const Logo = ({ size = 'medium' }) => {
  const sizes = {
    small: 16,
    medium: 24,
    large: 32,
  };

  const fontSize = sizes[size];

  return (
    <Text style={[styles.logo, { fontSize }]}>
      Z&M's
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    ...typography.title,
    color: colors.black,
    fontWeight: '700',
  },
});

export default Logo;
