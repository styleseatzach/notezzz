import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CloseIcon from '../icons/CloseIcon';
import { colors } from '../../styles/colors';

const FloatingCloseButton = ({ onPress, position = 'bottom-center' }) => {
  const positionStyle = position === 'bottom-center'
    ? styles.bottomCenter
    : styles.topRight;

  return (
    <TouchableOpacity
      style={[styles.button, positionStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <CloseIcon size={24} color={colors.black} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  bottomCenter: {
    bottom: 24,
    left: '50%',
    marginLeft: -28,
  },
  topRight: {
    top: 24,
    right: 24,
  },
});

export default FloatingCloseButton;
