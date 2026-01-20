import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { typography } from '../../styles/typography';

export default {
  title: 'Design Tokens/Typography',
};

const TypographyExample = ({ name, style, exampleText }) => (
  <View style={styles.exampleContainer}>
    <Text style={styles.label}>{name}</Text>
    <Text style={[style, styles.example]}>{exampleText || 'The quick brown fox jumps over the lazy dog'}</Text>
    <View style={styles.specs}>
      <Text style={styles.specText}>Size: {style.fontSize}px</Text>
      <Text style={styles.specText}>Line Height: {style.lineHeight}</Text>
      <Text style={styles.specText}>Weight: {style.fontWeight}</Text>
      <Text style={styles.specText}>Letter Spacing: {style.letterSpacing}</Text>
    </View>
  </View>
);

export const AllTypographyStyles = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.pageTitle}>Typography System</Text>

    <TypographyExample
      name="Hero (H1)"
      style={typography.hero}
      exampleText="Keys and Chords"
    />

    <TypographyExample
      name="Title (H2)"
      style={typography.title}
      exampleText="C Major"
    />

    <TypographyExample
      name="Section Title (H3)"
      style={typography.sectionTitle}
      exampleText="Chords"
    />

    <TypographyExample
      name="Small Header (H4)"
      style={typography.smallHeader}
      exampleText="KEYS AND CHORDS"
    />

    <TypographyExample
      name="Body"
      style={typography.body}
      exampleText="All of them except that one that David played that one time. This is regular body text used for descriptions and paragraphs."
    />

    <TypographyExample
      name="Body Medium"
      style={typography.bodyMedium}
      exampleText="This is emphasized body text with medium weight for important information."
    />

    <TypographyExample
      name="Caption"
      style={typography.caption}
      exampleText="Lesson 1 • 70% Complete"
    />

    <TypographyExample
      name="Small Caption"
      style={typography.smallCaption}
      exampleText="Camelot: 8B • Relative Key: Am"
    />

    <Text style={styles.sectionHeader}>Camelot Wheel Typography</Text>

    <TypographyExample
      name="Camelot Key (Major)"
      style={typography.camelotKey}
      exampleText="8B"
    />

    <TypographyExample
      name="Camelot Key Small (Minor)"
      style={typography.camelotKeySmall}
      exampleText="8A"
    />

    <TypographyExample
      name="Camelot Key Name (Outer Ring)"
      style={typography.camelotKeyName}
      exampleText="C Major"
    />

    <TypographyExample
      name="Camelot Key Name Small (Inner Ring)"
      style={typography.camelotKeyNameSmall}
      exampleText="A Minor"
    />
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
    marginBottom: 24,
    color: '#15151A',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 16,
    color: '#15151A',
  },
  exampleContainer: {
    marginBottom: 32,
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5E4DB2',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  example: {
    marginBottom: 12,
    color: '#15151A',
  },
  specs: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#D7D7D7',
  },
  specText: {
    fontSize: 12,
    color: '#737272',
    marginBottom: 4,
    fontFamily: 'monospace',
  },
});
