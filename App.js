import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import KeysAndChordsMainScreen from './components/screens/KeysAndChordsMainScreen';
import KeyDetailScreen from './components/screens/KeyDetailScreen';
import LessonsMainScreen from './components/screens/LessonsMainScreen';
import CamelotWheelScreen from './components/screens/CamelotWheelScreen';
import keysData from './data/keys.json';
import { colors } from './styles/colors';
import { typography } from './styles/typography';

// Empty state component for screens that don't exist yet
const EmptyStateScreen = ({ screenName, onBack }) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyTitle}>Coming Soon</Text>
    <Text style={styles.emptySubtitle}>{screenName} is not available yet.</Text>
    <TouchableOpacity style={styles.backButton} onPress={onBack}>
      <Text style={styles.backButtonText}>Go Back</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('keys-chords');
  const [previousScreen, setPreviousScreen] = useState('keys-chords');
  const [selectedKey, setSelectedKey] = useState(null);
  const [showCamelotWheel, setShowCamelotWheel] = useState(false);

  // Load Google Fonts for web
  useEffect(() => {
    if (Platform.OS === 'web') {
      // Load Inter font from Google Fonts
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  const handleKeySelect = (key) => {
    setSelectedKey(key);
    setPreviousScreen(currentScreen);
    setCurrentScreen('key-detail');
  };

  const handleBack = () => {
    setCurrentScreen(previousScreen);
    setSelectedKey(null);
  };

  const handleNavigate = (tab) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(tab);
  };

  const handleCamelotWheelPress = () => {
    setShowCamelotWheel(true);
  };

  const handleCamelotWheelClose = () => {
    setShowCamelotWheel(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Keys & Chords Main Screen */}
      {currentScreen === 'keys-chords' && (
        <KeysAndChordsMainScreen
          activeTab="keys-chords"
          onNavigate={handleNavigate}
          onRecipeSelect={handleKeySelect}
        />
      )}

      {/* Key Detail Screen */}
      {currentScreen === 'key-detail' && selectedKey && (
        <KeyDetailScreen
          keyData={selectedKey}
          onBack={handleBack}
          onCamelotWheelPress={handleCamelotWheelPress}
        />
      )}

      {/* Lessons Main Screen */}
      {currentScreen === 'lessons' && (
        <LessonsMainScreen
          activeTab="lessons"
          onNavigate={handleNavigate}
        />
      )}

      {/* Empty state for unknown screens */}
      {!['keys-chords', 'key-detail', 'lessons'].includes(currentScreen) && (
        <EmptyStateScreen
          screenName={currentScreen}
          onBack={() => setCurrentScreen('keys-chords')}
        />
      )}

      {/* Camelot Wheel Modal Overlay */}
      {showCamelotWheel && (
        <View style={styles.modalOverlay}>
          <CamelotWheelScreen
            onClose={handleCamelotWheelClose}
            onSegmentPress={(camelotKey, keyName) => {
              // Find the matching key in keysData by camelotKey
              const matchingKey = Object.values(keysData).find(
                key => key.camelotKey === camelotKey
              );

              if (matchingKey) {
                setShowCamelotWheel(false);
                setSelectedKey(matchingKey);
                setPreviousScreen('keys-chords'); // Always go back to main screen from Camelot wheel
                setCurrentScreen('key-detail');
              }
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  emptyTitle: {
    ...typography.hero,
    color: colors.purple900,
    marginBottom: 8,
  },
  emptySubtitle: {
    ...typography.bodyMedium,
    color: colors.grey500,
    textAlign: 'center',
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: colors.purple700,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 100,
  },
  backButtonText: {
    ...typography.bodyMedium,
    color: colors.white,
    fontWeight: '600',
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
  },
});
