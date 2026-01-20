import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { spacing, spacingTokens } from './spacing';

export default {
  title: 'Design Tokens/Spacing',
};

const SpacingExample = ({ name, value }) => (
  <View style={styles.exampleContainer}>
    <Text style={styles.label}>{name}</Text>
    <View style={styles.spacingRow}>
      <View style={[styles.spacingBox, { width: value, height: value }]}>
        <Text style={styles.valueText}>{value}px</Text>
      </View>
      <Text style={styles.description}>{value}px</Text>
    </View>
  </View>
);

export const BaseSpacingScale = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.pageTitle}>Spacing Scale</Text>
    <Text style={styles.subtitle}>8px base increment system</Text>

    {Object.entries(spacing)
      .filter(([key]) => !isNaN(key))
      .map(([name, value]) => (
        <SpacingExample key={name} name={name} value={value} />
      ))}
  </ScrollView>
);

export const SemanticSpacing = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.pageTitle}>Semantic Spacing</Text>
    <Text style={styles.subtitle}>Named spacing values for common use cases</Text>

    <SpacingExample name="xs" value={spacing.xs} />
    <SpacingExample name="sm" value={spacing.sm} />
    <SpacingExample name="md" value={spacing.md} />
    <SpacingExample name="lg" value={spacing.lg} />
    <SpacingExample name="xl" value={spacing.xl} />
    <SpacingExample name="2xl" value={spacing['2xl']} />
    <SpacingExample name="3xl" value={spacing['3xl']} />
  </ScrollView>
);

export const SpacingTokens = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.pageTitle}>Spacing Tokens</Text>
    <Text style={styles.subtitle}>Component-specific spacing values</Text>

    <View style={styles.tokenContainer}>
      <Text style={styles.tokenTitle}>Container Padding</Text>
      <SpacingExample name="Mobile" value={spacingTokens.containerPaddingMobile} />
      <SpacingExample name="Desktop" value={spacingTokens.containerPaddingDesktop} />
    </View>

    <View style={styles.tokenContainer}>
      <Text style={styles.tokenTitle}>Card Padding</Text>
      <SpacingExample name="Small" value={spacingTokens.cardPaddingSmall} />
      <SpacingExample name="Default" value={spacingTokens.cardPadding} />
      <SpacingExample name="Large" value={spacingTokens.cardPaddingLarge} />
    </View>

    <View style={styles.tokenContainer}>
      <Text style={styles.tokenTitle}>Component Gaps</Text>
      <SpacingExample name="Gap" value={spacingTokens.gap} />
      <SpacingExample name="Gap Large" value={spacingTokens.gapLarge} />
    </View>

    <View style={styles.tokenContainer}>
      <Text style={styles.tokenTitle}>Navigation</Text>
      <SpacingExample name="Bottom Nav Height" value={spacingTokens.bottomNavHeight} />
      <SpacingExample name="Bottom Nav Padding" value={spacingTokens.bottomNavPadding} />
    </View>

    <View style={styles.tokenContainer}>
      <Text style={styles.tokenTitle}>Piano</Text>
      <SpacingExample name="Key Spacing" value={spacingTokens.pianoKeySpacing} />
      <SpacingExample name="Roll Padding" value={spacingTokens.pianoRollPadding} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#15151A',
  },
  subtitle: {
    fontSize: 16,
    color: '#737272',
    marginBottom: 24,
  },
  exampleContainer: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#15151A',
    marginBottom: 8,
  },
  spacingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacingBox: {
    backgroundColor: '#C0B4FA',
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 40,
    minHeight: 40,
  },
  valueText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#050C46',
  },
  description: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: '#737272',
  },
  tokenContainer: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
  },
  tokenTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#050C46',
    marginBottom: 16,
  },
});
