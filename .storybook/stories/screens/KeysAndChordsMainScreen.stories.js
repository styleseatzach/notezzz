import React from 'react';
import { View, StyleSheet } from 'react-native';
import KeysAndChordsMainScreen from '../../../components/screens/KeysAndChordsMainScreen';

export default {
  title: 'Screens/KeysAndChordsMainScreen',
  component: KeysAndChordsMainScreen,
};

const mockProfile = {
  display_name: 'Zach Baker',
  avatar_url: null,
};

export const Default = () => (
  <View style={styles.container}>
    <KeysAndChordsMainScreen
      activeTab="keys-chords"
      onNavigate={(tab) => console.log('Navigate to:', tab)}
      onProfilePress={() => console.log('Profile pressed')}
      onRecipeSelect={(key) => console.log('Key selected:', key.name)}
      userProfile={mockProfile}
    />
  </View>
);

export const LoggedOut = () => (
  <View style={styles.container}>
    <KeysAndChordsMainScreen
      activeTab="keys-chords"
      onNavigate={(tab) => console.log('Navigate to:', tab)}
      onProfilePress={() => console.log('Profile pressed')}
      onRecipeSelect={(key) => console.log('Key selected:', key.name)}
      userProfile={null}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh',
  },
});
