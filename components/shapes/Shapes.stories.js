import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

// Import all shapes
import SelectedNavItemBackgroundShape from './SelectedNavItemBackgroundShape';
import ZMLogo from './ZMLogo';
import BackgroundFillStarShape from './BackgroundFillStarShape';

export default {
  title: 'Shapes/Graphics',
  component: null,
};

export const AllShapes = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Shape Library</Text>
    <Text style={styles.subtitle}>All SVG shapes used in the app</Text>

    <View style={styles.shapesGrid}>
      {/* Background Fill Star */}
      <View style={styles.shapeContainer}>
        <View style={styles.shapeWrapper}>
          <BackgroundFillStarShape width={100} height={100} stroke={colors.purple50} strokeWidth={8} />
        </View>
        <Text style={styles.shapeName}>Background Fill Star</Text>
      </View>

      {/* Selected Nav Star */}
      <View style={styles.shapeContainer}>
        <View style={styles.shapeWrapper}>
          <SelectedNavItemBackgroundShape width={48} height={48} fill={colors.purple50} />
        </View>
        <Text style={styles.shapeName}>Selected Nav Background</Text>
      </View>

      {/* Z&M's Logo */}
      <View style={styles.shapeContainer}>
        <View style={styles.shapeWrapper}>
          <ZMLogo width={100} height={33} fill={colors.grey800} />
        </View>
        <Text style={styles.shapeName}>Z&M's Logo</Text>
      </View>
    </View>
  </View>
);

export const NavBackgroundSizes = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Navigation Background Sizes</Text>

    <View style={styles.sizesContainer}>
      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>Small (32px)</Text>
        <SelectedNavItemBackgroundShape width={32} height={32} fill={colors.purple50} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>Default (48px)</Text>
        <SelectedNavItemBackgroundShape width={48} height={48} fill={colors.purple50} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>Large (64px)</Text>
        <SelectedNavItemBackgroundShape width={64} height={64} fill={colors.purple50} />
      </View>
    </View>
  </View>
);

export const LogoVariants = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Z&M's Logo Variants</Text>

    <View style={styles.sizesContainer}>
      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>Default (100x33)</Text>
        <ZMLogo width={100} height={33} fill={colors.grey800} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>Small (80x26.4)</Text>
        <ZMLogo width={80} height={26.4} fill={colors.grey800} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>Large (120x39.6)</Text>
        <ZMLogo width={120} height={39.6} fill={colors.grey800} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>Black</Text>
        <ZMLogo width={100} height={33} fill={colors.black} />
      </View>

      <View style={styles.sizeRow}>
        <Text style={styles.sizeLabel}>Purple</Text>
        <ZMLogo width={100} height={33} fill={colors.purple900} />
      </View>
    </View>
  </View>
);

export const BackgroundStars = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Background Stars</Text>
    <Text style={styles.subtitle}>Decorative star shapes for headers and backgrounds</Text>

    <View style={styles.starsContainer}>
      <Text style={styles.sectionLabel}>Sizes</Text>
      <View style={styles.starsGrid}>
        <View style={styles.starWrapper}>
          <BackgroundFillStarShape width={150} height={150} stroke={colors.purple50} strokeWidth={12} />
          <Text style={styles.starLabel}>Small (150px)</Text>
        </View>
        <View style={styles.starWrapper}>
          <BackgroundFillStarShape width={250} height={250} stroke={colors.purple50} strokeWidth={18} />
          <Text style={styles.starLabel}>Medium (250px)</Text>
        </View>
        <View style={styles.starWrapper}>
          <BackgroundFillStarShape width={350} height={350} stroke={colors.purple50} strokeWidth={24} />
          <Text style={styles.starLabel}>Large (350px)</Text>
        </View>
      </View>

      <Text style={[styles.sectionLabel, { marginTop: 40 }]}>Colors</Text>
      <View style={styles.starsGrid}>
        <View style={styles.starWrapper}>
          <BackgroundFillStarShape width={200} height={200} stroke={colors.purple50} strokeWidth={16} />
          <Text style={styles.starLabel}>Purple Light</Text>
        </View>
        <View style={styles.starWrapper}>
          <BackgroundFillStarShape width={200} height={200} stroke={colors.purple100} strokeWidth={16} />
          <Text style={styles.starLabel}>Purple 100</Text>
        </View>
        <View style={styles.starWrapper}>
          <BackgroundFillStarShape width={200} height={200} stroke={colors.purple200} strokeWidth={16} />
          <Text style={styles.starLabel}>Purple 200</Text>
        </View>
      </View>
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
  shapesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
  },
  shapeContainer: {
    alignItems: 'center',
    width: 150,
  },
  shapeWrapper: {
    width: 120,
    height: 120,
    backgroundColor: colors.grey100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.grey200,
  },
  shapeName: {
    ...typography.body,
    color: colors.grey700,
    textAlign: 'center',
  },
  sizesContainer: {
    gap: 32,
  },
  sizeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
  sizeLabel: {
    ...typography.body,
    color: colors.grey700,
    width: 120,
  },
  starsContainer: {
    gap: 24,
  },
  starsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 32,
    alignItems: 'center',
  },
  starWrapper: {
    alignItems: 'center',
    gap: 12,
  },
  starLabel: {
    ...typography.caption,
    color: colors.grey700,
    textAlign: 'center',
  },
  sectionLabel: {
    ...typography.sectionTitle,
    color: colors.black,
    marginBottom: 16,
  },
});
