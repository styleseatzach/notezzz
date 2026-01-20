import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileAvatar from './ProfileAvatar';
import { colors } from '../../styles/colors';

export default {
  title: 'UI/ProfileAvatar',
  component: ProfileAvatar,
  parameters: {
    notes: 'Profile avatar component with image upload functionality',
  },
};

// Default avatar with no image (shows initials)
export const Default = () => {
  const [imageUri, setImageUri] = useState(null);

  return (
    <View style={styles.container}>
      <ProfileAvatar
        imageUri={imageUri}
        onChangePhoto={setImageUri}
        displayName="John Doe"
      />
    </View>
  );
};

// Avatar with image
export const WithImage = () => {
  const [imageUri, setImageUri] = useState(
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400'
  );

  return (
    <View style={styles.container}>
      <ProfileAvatar
        imageUri={imageUri}
        onChangePhoto={setImageUri}
        displayName="Jane Smith"
      />
    </View>
  );
};

// Non-editable avatar
export const NonEditable = () => {
  return (
    <View style={styles.container}>
      <ProfileAvatar
        imageUri="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
        displayName="Alice Johnson"
        editable={false}
      />
    </View>
  );
};

// Different sizes
export const Sizes = () => {
  const imageUri = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400';

  return (
    <View style={styles.sizesContainer}>
      <View style={styles.sizeExample}>
        <ProfileAvatar
          imageUri={imageUri}
          displayName="Small"
          size={60}
          editable={false}
        />
      </View>
      <View style={styles.sizeExample}>
        <ProfileAvatar
          imageUri={imageUri}
          displayName="Medium"
          size={100}
          editable={false}
        />
      </View>
      <View style={styles.sizeExample}>
        <ProfileAvatar
          imageUri={imageUri}
          displayName="Large"
          size={140}
          editable={false}
        />
      </View>
    </View>
  );
};

// Initial variations
export const InitialVariations = () => {
  return (
    <View style={styles.initialsContainer}>
      <View style={styles.initialsExample}>
        <ProfileAvatar
          imageUri={null}
          displayName="John Doe"
          size={100}
          editable={false}
        />
      </View>
      <View style={styles.initialsExample}>
        <ProfileAvatar
          imageUri={null}
          displayName="Sarah"
          size={100}
          editable={false}
        />
      </View>
      <View style={styles.initialsExample}>
        <ProfileAvatar
          imageUri={null}
          displayName="Bob Smith Johnson"
          size={100}
          editable={false}
        />
      </View>
      <View style={styles.initialsExample}>
        <ProfileAvatar
          imageUri={null}
          displayName=""
          size={100}
          editable={false}
        />
      </View>
    </View>
  );
};

// Interactive example
export const Interactive = () => {
  const [imageUri, setImageUri] = useState(null);
  const [displayName] = useState('Interactive User');

  const handlePhotoChange = (uri) => {
    console.log('Photo changed:', uri);
    setImageUri(uri);
  };

  return (
    <View style={styles.container}>
      <ProfileAvatar
        imageUri={imageUri}
        onChangePhoto={handlePhotoChange}
        displayName={displayName}
        size={120}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.white,
    minHeight: 300,
  },
  sizesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    padding: 40,
    backgroundColor: colors.white,
    minHeight: 300,
  },
  sizeExample: {
    alignItems: 'center',
  },
  initialsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    padding: 40,
    backgroundColor: colors.white,
    minHeight: 300,
  },
  initialsExample: {
    alignItems: 'center',
  },
});
