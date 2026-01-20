import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../styles/colors';
import { typography, fontFamilies } from '../../styles/typography';
import { spacing } from '../../styles/spacing';
import PianoRoll from '../piano/PianoRoll';
import { ChordBox } from '../guitar';
import {
  getChordNotes,
  getChordName,
  getAvailableExtensions,
  getAvailableInversions,
  keyPrefersFlats,
} from '../../utils/musicTheory';

const ChordDetailCard = ({
  chord,
  index,
  keyColor,
  keyName,
  highlightColor,
  highlightColorBlack,
  camelotNumber,
  instrument = 'piano', // 'piano' | 'guitar'
}) => {
  const [selectedExtension, setSelectedExtension] = useState(chord.type);
  const [selectedInversion, setSelectedInversion] = useState(0);
  const [showExtensionDropdown, setShowExtensionDropdown] = useState(false);
  const [showInversionDropdown, setShowInversionDropdown] = useState(false);

  // Get the root note from the chord (e.g., "C" from "C Major")
  const rootNote = chord.notes[0];
  const scaleDegree = index + 1;
  const preferFlats = keyPrefersFlats(keyName);

  // Get available extensions and inversions
  const extensions = getAvailableExtensions(chord.type, scaleDegree);
  const inversions = getAvailableInversions(selectedExtension);

  // Calculate current chord notes based on extension and inversion
  const currentNotes = getChordNotes(rootNote, selectedExtension, selectedInversion, preferFlats);
  const currentChordName = getChordName(rootNote, selectedExtension);

  // Get display labels
  const selectedExtensionLabel = extensions.find(e => e.value === selectedExtension)?.label || 'Triad';
  const selectedInversionLabel = inversions.find(i => i.value === selectedInversion)?.label || 'Root Position';

  // Map extension to chord type for ChordBox
  const getChordTypeForBox = () => {
    if (selectedExtension === 'major' || selectedExtension === 'minor' || selectedExtension === 'diminished') {
      return selectedExtension;
    }
    if (selectedExtension.includes('maj7') || selectedExtension === 'major7') {
      return 'major7';
    }
    if (selectedExtension.includes('m7') || selectedExtension === 'minor7') {
      return 'minor7';
    }
    if (selectedExtension === 'dominant7' || selectedExtension === '7') {
      return 'dominant7';
    }
    // Default to base type
    return chord.type;
  };

  const handleExtensionSelect = (value) => {
    setSelectedExtension(value);
    setSelectedInversion(0); // Reset inversion when extension changes
    setShowExtensionDropdown(false);
  };

  const handleInversionSelect = (value) => {
    setSelectedInversion(value);
    setShowInversionDropdown(false);
  };

  return (
    <View style={[styles.chordCard, (showExtensionDropdown || showInversionDropdown) && styles.chordCardExpanded]}>
      {/* Chord Number and Name */}
      <View style={styles.chordHeader}>
        <View style={[styles.chordNumber, { backgroundColor: keyColor }]}>
          <Text style={styles.chordNumberText}>{index + 1}</Text>
        </View>
        <Text style={styles.chordName}>{currentChordName}</Text>
      </View>

      {/* Instrument Visualization */}
      <View style={styles.instrumentContainer}>
        {instrument === 'piano' ? (
          <PianoRoll
            highlightedNotes={currentNotes}
            highlightColor={highlightColor}
            highlightColorBlack={highlightColorBlack}
            showLabels={true}
            showBlackKeyLabels={true}
            octaveRange={2}
            highlightMode="scale"
          />
        ) : (
          <View style={styles.chordBoxContainer}>
            <ChordBox
              chordName={currentChordName}
              root={rootNote}
              chordType={getChordTypeForBox()}
              camelotNumber={camelotNumber?.toString()}
              width={120}
              height={140}
              showTitle={false}
            />
          </View>
        )}
      </View>

      {/* Dropdowns Row - Only show for piano mode since guitar has fixed voicings */}
      {instrument === 'piano' && (
        <View style={styles.dropdownsRow}>
          {/* Extension Dropdown */}
          <View style={[styles.dropdownContainer, showExtensionDropdown && styles.dropdownContainerActive]}>
            <Text style={styles.dropdownLabel}>Extension</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => {
                setShowExtensionDropdown(!showExtensionDropdown);
                setShowInversionDropdown(false);
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.dropdownButtonText} numberOfLines={1}>
                {selectedExtensionLabel}
              </Text>
              <Text style={styles.dropdownArrow}>{showExtensionDropdown ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {showExtensionDropdown && (
              <View style={styles.dropdownMenu}>
                {extensions.map((ext) => (
                  <TouchableOpacity
                    key={ext.value}
                    style={[
                      styles.dropdownItem,
                      selectedExtension === ext.value && styles.dropdownItemSelected,
                    ]}
                    onPress={() => handleExtensionSelect(ext.value)}
                  >
                    <Text
                      style={[
                        styles.dropdownItemText,
                        selectedExtension === ext.value && styles.dropdownItemTextSelected,
                      ]}
                    >
                      {ext.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Inversion Dropdown */}
          <View style={[styles.dropdownContainer, showInversionDropdown && styles.dropdownContainerActive]}>
            <Text style={styles.dropdownLabel}>Inversion</Text>
            <TouchableOpacity
              style={styles.dropdownButton}
              onPress={() => {
                setShowInversionDropdown(!showInversionDropdown);
                setShowExtensionDropdown(false);
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.dropdownButtonText} numberOfLines={1}>
                {selectedInversionLabel}
              </Text>
              <Text style={styles.dropdownArrow}>{showInversionDropdown ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {showInversionDropdown && (
              <View style={styles.dropdownMenu}>
                {inversions.map((inv) => (
                  <TouchableOpacity
                    key={inv.value}
                    style={[
                      styles.dropdownItem,
                      selectedInversion === inv.value && styles.dropdownItemSelected,
                    ]}
                    onPress={() => handleInversionSelect(inv.value)}
                  >
                    <Text
                      style={[
                        styles.dropdownItemText,
                        selectedInversion === inv.value && styles.dropdownItemTextSelected,
                      ]}
                    >
                      {inv.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      )}

      {/* Extension selector for guitar - simplified */}
      {instrument === 'guitar' && (
        <View style={styles.guitarExtensionRow}>
          <TouchableOpacity
            style={[
              styles.extensionChip,
              selectedExtension === chord.type && styles.extensionChipActive,
            ]}
            onPress={() => setSelectedExtension(chord.type)}
          >
            <Text style={[
              styles.extensionChipText,
              selectedExtension === chord.type && styles.extensionChipTextActive,
            ]}>
              Triad
            </Text>
          </TouchableOpacity>
          {chord.type === 'major' && (
            <TouchableOpacity
              style={[
                styles.extensionChip,
                selectedExtension === 'major7' && styles.extensionChipActive,
              ]}
              onPress={() => setSelectedExtension('major7')}
            >
              <Text style={[
                styles.extensionChipText,
                selectedExtension === 'major7' && styles.extensionChipTextActive,
              ]}>
                Maj7
              </Text>
            </TouchableOpacity>
          )}
          {chord.type === 'minor' && (
            <TouchableOpacity
              style={[
                styles.extensionChip,
                selectedExtension === 'minor7' && styles.extensionChipActive,
              ]}
              onPress={() => setSelectedExtension('minor7')}
            >
              <Text style={[
                styles.extensionChipText,
                selectedExtension === 'minor7' && styles.extensionChipTextActive,
              ]}>
                m7
              </Text>
            </TouchableOpacity>
          )}
          {scaleDegree === 5 && chord.type === 'major' && (
            <TouchableOpacity
              style={[
                styles.extensionChip,
                selectedExtension === 'dominant7' && styles.extensionChipActive,
              ]}
              onPress={() => setSelectedExtension('dominant7')}
            >
              <Text style={[
                styles.extensionChipText,
                selectedExtension === 'dominant7' && styles.extensionChipTextActive,
              ]}>
                7
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chordCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3.488,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10.464,
    elevation: 2,
    zIndex: 1,
  },
  chordCardExpanded: {
    zIndex: 100,
  },
  chordHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  chordNumber: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  chordNumberText: {
    fontFamily: fontFamilies.body,
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
  },
  chordName: {
    fontFamily: fontFamilies.display,
    fontSize: 18,
    color: colors.black,
    flex: 1,
  },
  instrumentContainer: {
    marginBottom: 12,
  },
  chordBoxContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  dropdownContainer: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
  dropdownContainerActive: {
    zIndex: 100,
  },
  dropdownLabel: {
    fontFamily: fontFamilies.body,
    fontSize: 12,
    color: colors.grey500,
    marginBottom: 4,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.grey100,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.grey200,
  },
  dropdownButtonText: {
    fontFamily: fontFamilies.body,
    fontSize: 14,
    color: colors.grey800,
    flex: 1,
  },
  dropdownArrow: {
    fontSize: 10,
    color: colors.grey500,
    marginLeft: 8,
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginTop: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 1000,
    maxHeight: 200,
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey100,
  },
  dropdownItemSelected: {
    backgroundColor: colors.purple100,
  },
  dropdownItemText: {
    fontFamily: fontFamilies.body,
    fontSize: 14,
    color: colors.grey800,
  },
  dropdownItemTextSelected: {
    color: colors.purple700,
    fontWeight: '600',
  },
  // Guitar extension chips
  guitarExtensionRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  extensionChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.grey100,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.grey200,
  },
  extensionChipActive: {
    backgroundColor: colors.purple100,
    borderColor: colors.purple700,
  },
  extensionChipText: {
    fontFamily: fontFamilies.body,
    fontSize: 12,
    color: colors.grey600,
  },
  extensionChipTextActive: {
    color: colors.purple700,
    fontWeight: '600',
  },
});

export default ChordDetailCard;
