import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { colors } from '../../styles/colors';
import PianoIcon from '../icons/PianoIcon';
import SchoolIcon from '../icons/SchoolIcon';
import SelectedNavItemBackgroundShape from '../shapes/SelectedNavItemBackgroundShape';

const BottomNavigationItem = ({ id, label, isActive, onPress }) => {
  const renderIcon = () => {
    const iconProps = {
      width: 24,
      height: 24,
      fill: isActive ? colors.purple900 : colors.grey600
    };

    switch (id) {
      case 'keys-chords':
        return <PianoIcon {...iconProps} />;
      case 'lessons':
        return <SchoolIcon {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={styles.navItem}
      onPress={() => onPress(id)}
      activeOpacity={0.7}
    >
      <View style={styles.navContent}>
        <View style={styles.iconContainer}>
          {isActive && (
            <View style={styles.selectedBackground}>
              <SelectedNavItemBackgroundShape
                width={48}
                height={48}
                fill={colors.purple50}
              />
            </View>
          )}
          <View style={styles.iconWrapper}>
            {renderIcon()}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  selectedBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});

export default BottomNavigationItem;
