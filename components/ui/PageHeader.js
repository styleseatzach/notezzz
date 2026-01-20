import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { typography, colors } from '../../styles';
import ProfileAvatar from './ProfileAvatar';
import ZMLogo from '../shapes/ZMLogo';
import BackgroundFillStarShape from '../shapes/BackgroundFillStarShape';

export default function PageHeader({
  title = "Page Title",
  subtitle = "",
  showLogo = true,
  onProfilePress,
  userAvatarUrl,
  userDisplayName,
  isLoggedIn = false,
  style = {},
  ...props
}) {
  return (
    <View style={[styles.container, style]} {...props}>
      {/* Background Pattern with stars */}
      <View style={styles.backgroundPattern}>
        {/* Large star top-right */}
        <View style={styles.starLarge}>
          <BackgroundFillStarShape width={428} height={428} stroke={colors.purple200} strokeWidth={32} />
        </View>
        {/* Medium star bottom-left */}
        <View style={styles.starMedium}>
          <BackgroundFillStarShape width={311} height={311} stroke={colors.purple200} strokeWidth={24} />
        </View>
      </View>

      {/* Top Row: Logo and Profile Avatar */}
      <View style={styles.topRow}>
        {/* Logo - Top Left */}
        {showLogo && (
          <View style={styles.logoContainer}>
            <ZMLogo width={100} height={33} fill={colors.grey800} />
          </View>
        )}

        {/* Profile Button - Top Right */}
        {onProfilePress && (
          <TouchableOpacity
            style={styles.profileButton}
            onPress={onProfilePress}
            activeOpacity={0.7}
          >
            <ProfileAvatar
              imageUri={userAvatarUrl}
              displayName={userDisplayName || 'Guest'}
              size={40}
              editable={false}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Centered Content Below */}
      <View style={styles.centeredContent}>
        {/* Title */}
        <Text style={styles.title}>
          {title}
        </Text>

        {/* Subtitle */}
        {subtitle && (
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple50,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 24,
    position: 'relative',
    overflow: 'hidden',
    minHeight: 335,
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.purple50,
    opacity: 0.25,
  },
  starLarge: {
    position: 'absolute',
    top: -182,
    right: -129,
    width: 428,
    height: 428,
  },
  starMedium: {
    position: 'absolute',
    bottom: -33,
    left: -125,
    width: 311,
    height: 311,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    zIndex: 2,
    marginBottom: 16,
  },
  logoContainer: {
    // Container for ZMLogo component
  },
  profileButton: {
    cursor: 'pointer',
  },
  centeredContent: {
    position: 'relative',
    zIndex: 1,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  title: {
    ...typography.hero,
    fontSize: 56,
    lineHeight: 56,
    letterSpacing: 1.12,
    color: colors.purple900,
    marginBottom: 8,
  },
  subtitle: {
    ...typography.body,
    fontWeight: '500',
    color: colors.grey800, // #3B3B3B to match Figma
    letterSpacing: 0.16,
    lineHeight: 22.4,
  },
});
