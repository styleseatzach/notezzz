import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { typography, colors } from '../../styles';
import CirclePlusIcon from '../icons/CirclePlusIcon';

export default function ProfileAvatar({
  imageUri,
  onChangePhoto,
  size = 120,
  editable = true,
  displayName = '',
}) {
  const fileInputRef = useRef(null);

  const handlePickImage = () => {
    if (!editable) return;

    if (Platform.OS === 'web') {
      fileInputRef.current?.click();
    } else {
      // For native, we'd use expo-image-picker
      console.warn('Native image picker not implemented yet');
    }
  };

  const handleFileChange = (event) => {
    if (Platform.OS === 'web') {
      const file = event.target.files[0];
      if (file) {
        // Create object URL for preview and pass the file blob
        const objectUrl = URL.createObjectURL(file);
        console.log('File selected:', file.name, file.type, file.size);
        onChangePhoto && onChangePhoto(objectUrl);
      }
    }
  };

  // Get initials for placeholder
  const getInitials = () => {
    if (!displayName) return '?';
    const names = displayName.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.avatarContainer, { width: size, height: size }]}
        onPress={handlePickImage}
        activeOpacity={editable ? 0.8 : 1}
        disabled={!editable}
      >
        {imageUri ? (
          // Show profile image
          <Image
            source={{ uri: imageUri }}
            style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
          />
        ) : (
          // Show initials placeholder
          <View
            style={[
              styles.placeholder,
              { width: size, height: size, borderRadius: size / 2 },
            ]}
          >
            <Text style={[styles.initials, { fontSize: size * 0.4 }]}>
              {getInitials()}
            </Text>
          </View>
        )}

        {/* Edit icon overlay */}
        {editable && (
          <View style={styles.editIconContainer}>
            <View style={styles.editIconBackground}>
              <CirclePlusIcon
                width={28}
                height={28}
                fill={colors.purple900}
              />
            </View>
          </View>
        )}
      </TouchableOpacity>

      {editable && (
        <Text style={styles.helperText}>Tap to change photo</Text>
      )}

      {/* Hidden file input for web */}
      {Platform.OS === 'web' && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    backgroundColor: colors.purple50,
    borderWidth: 2,
    borderColor: colors.grey200,
  },
  placeholder: {
    backgroundColor: colors.purple900,
    borderWidth: 2,
    borderColor: colors.purple900,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    ...typography.sectionTitle,
    color: colors.purple50,
    fontWeight: '600',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  editIconBackground: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.purple50,
    padding: 2,
  },
  helperText: {
    ...typography.caption,
    color: colors.grey600,
    marginTop: 8,
  },
});
