import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path, Rect, Line, Circle, G } from 'react-native-svg';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

/**
 * Piano icon for toggle
 */
const PianoIcon = ({ size = 20, fill = colors.grey600 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Rect x="2" y="4" width="20" height="16" rx="2" stroke={fill} strokeWidth="1.5" fill="none" />
    <Rect x="6" y="4" width="3" height="10" fill={fill} />
    <Rect x="11" y="4" width="3" height="10" fill={fill} />
    <Rect x="16" y="4" width="3" height="10" fill={fill} />
    <Line x1="5" y1="4" x2="5" y2="20" stroke={fill} strokeWidth="1" />
    <Line x1="9" y1="4" x2="9" y2="20" stroke={fill} strokeWidth="1" />
    <Line x1="14" y1="4" x2="14" y2="20" stroke={fill} strokeWidth="1" />
    <Line x1="19" y1="4" x2="19" y2="20" stroke={fill} strokeWidth="1" />
  </Svg>
);

/**
 * Guitar icon for toggle
 */
const GuitarIcon = ({ size = 20, fill = colors.grey600 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    {/* Fretboard (neck) */}
    <Rect x="4" y="2" width="16" height="20" rx="2" stroke={fill} strokeWidth="1.5" fill="none" />
    {/* Frets */}
    <Line x1="4" y1="6" x2="20" y2="6" stroke={fill} strokeWidth="1" />
    <Line x1="4" y1="10" x2="20" y2="10" stroke={fill} strokeWidth="1" />
    <Line x1="4" y1="14" x2="20" y2="14" stroke={fill} strokeWidth="1" />
    <Line x1="4" y1="18" x2="20" y2="18" stroke={fill} strokeWidth="1" />
    {/* Strings */}
    <Line x1="7" y1="2" x2="7" y2="22" stroke={fill} strokeWidth="0.75" />
    <Line x1="10" y1="2" x2="10" y2="22" stroke={fill} strokeWidth="0.75" />
    <Line x1="14" y1="2" x2="14" y2="22" stroke={fill} strokeWidth="0.75" />
    <Line x1="17" y1="2" x2="17" y2="22" stroke={fill} strokeWidth="0.75" />
    {/* Fret markers */}
    <Circle cx="12" cy="8" r="1.5" fill={fill} />
    <Circle cx="12" cy="16" r="1.5" fill={fill} />
  </Svg>
);

/**
 * InstrumentToggle - Tab toggle between Piano and Guitar views
 *
 * @param {Object} props
 * @param {string} props.activeInstrument - 'piano' | 'guitar'
 * @param {Function} props.onToggle - Callback when instrument changes
 * @param {string} props.variant - 'default' | 'compact' - toggle style
 */
const InstrumentToggle = ({
  activeInstrument = 'piano',
  onToggle,
  variant = 'default',
}) => {
  const isCompact = variant === 'compact';

  const handlePianoPress = () => {
    if (activeInstrument !== 'piano') {
      onToggle?.('piano');
    }
  };

  const handleGuitarPress = () => {
    if (activeInstrument !== 'guitar') {
      onToggle?.('guitar');
    }
  };

  if (isCompact) {
    return (
      <View style={styles.compactContainer}>
        <TouchableOpacity
          style={[
            styles.compactTab,
            activeInstrument === 'piano' && styles.compactTabActive,
          ]}
          onPress={handlePianoPress}
          activeOpacity={0.7}
        >
          <PianoIcon
            size={16}
            fill={activeInstrument === 'piano' ? colors.purple700 : colors.grey400}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.compactTab,
            activeInstrument === 'guitar' && styles.compactTabActive,
          ]}
          onPress={handleGuitarPress}
          activeOpacity={0.7}
        >
          <GuitarIcon
            size={16}
            fill={activeInstrument === 'guitar' ? colors.purple700 : colors.grey400}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tab,
          activeInstrument === 'piano' && styles.tabActive,
        ]}
        onPress={handlePianoPress}
        activeOpacity={0.7}
      >
        <PianoIcon
          size={20}
          fill={activeInstrument === 'piano' ? colors.purple700 : colors.grey500}
        />
        <Text
          style={[
            styles.tabText,
            activeInstrument === 'piano' && styles.tabTextActive,
          ]}
        >
          Piano
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeInstrument === 'guitar' && styles.tabActive,
        ]}
        onPress={handleGuitarPress}
        activeOpacity={0.7}
      >
        <GuitarIcon
          size={20}
          fill={activeInstrument === 'guitar' ? colors.purple700 : colors.grey500}
        />
        <Text
          style={[
            styles.tabText,
            activeInstrument === 'guitar' && styles.tabTextActive,
          ]}
        >
          Guitar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.grey100,
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 6,
  },
  tabActive: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    ...typography.caption,
    fontWeight: '600',
    color: colors.grey500,
  },
  tabTextActive: {
    color: colors.purple700,
  },
  // Compact styles
  compactContainer: {
    flexDirection: 'row',
    backgroundColor: colors.grey100,
    borderRadius: 8,
    padding: 2,
    gap: 2,
  },
  compactTab: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 6,
  },
  compactTabActive: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
});

export default InstrumentToggle;
