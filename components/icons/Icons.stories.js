import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

// Import all icons
import PianoIcon from './PianoIcon';
import SchoolIcon from './SchoolIcon';
import CloseIcon from './CloseIcon';
import ChevronLeftIcon from './ChevronLeftIcon';

export default {
  title: 'Icons/All Icons',
  component: null,
};

const IconShowcase = ({ IconComponent, name, size = 32, color }) => (
  <View style={styles.iconContainer}>
    <View style={styles.iconWrapper}>
      <IconComponent width={size} height={size} fill={color || colors.black} />
    </View>
    <Text style={styles.iconName}>{name}</Text>
  </View>
);

export const AllIcons = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Icon Library</Text>
    <Text style={styles.subtitle}>All available icons in the app</Text>

    <View style={styles.grid}>
      <IconShowcase IconComponent={PianoIcon} name="Piano" />
      <IconShowcase IconComponent={SchoolIcon} name="School" />
      <IconShowcase IconComponent={CloseIcon} name="Close" />
      <IconShowcase IconComponent={ChevronLeftIcon} name="ChevronLeft" />
    </View>
  </View>
);

export const IconSizes = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Icon Sizes</Text>

    <View style={styles.sizesContainer}>
      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>16px</Text>
        <PianoIcon width={16} height={16} fill={colors.black} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>20px</Text>
        <PianoIcon width={20} height={20} fill={colors.black} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>24px</Text>
        <PianoIcon width={24} height={24} fill={colors.black} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>32px</Text>
        <PianoIcon width={32} height={32} fill={colors.black} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>48px</Text>
        <PianoIcon width={48} height={48} fill={colors.black} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>64px</Text>
        <PianoIcon width={64} height={64} fill={colors.black} />
      </View>
    </View>
  </View>
);

export const IconColors = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Icon Colors</Text>

    <View style={styles.grid}>
      <IconShowcase IconComponent={SchoolIcon} name="Purple 900" color={colors.purple900} />
      <IconShowcase IconComponent={SchoolIcon} name="Purple 700" color={colors.purple700} />
      <IconShowcase IconComponent={SchoolIcon} name="Purple 500" color={colors.purple500} />
      <IconShowcase IconComponent={SchoolIcon} name="Black" color={colors.black} />
      <IconShowcase IconComponent={SchoolIcon} name="Grey 700" color={colors.grey700} />
      <IconShowcase IconComponent={SchoolIcon} name="Grey 600" color={colors.grey600} />
      <IconShowcase IconComponent={SchoolIcon} name="Grey 400" color={colors.grey400} />
      <IconShowcase IconComponent={SchoolIcon} name="White" color={colors.white} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.white,
  },
  title: {
    ...typography.hero,
    color: colors.black,
    marginBottom: 8,
  },
  subtitle: {
    ...typography.body,
    color: colors.grey600,
    marginBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  iconContainer: {
    alignItems: 'center',
    width: 100,
    marginBottom: 24,
  },
  iconWrapper: {
    width: 64,
    height: 64,
    backgroundColor: colors.grey100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.grey200,
  },
  iconName: {
    ...typography.caption,
    color: colors.grey700,
    textAlign: 'center',
  },
  sizesContainer: {
    gap: 24,
  },
  sizeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  sizeLabel: {
    ...typography.body,
    color: colors.grey700,
    width: 60,
  },
});
