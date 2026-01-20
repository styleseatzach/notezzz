import React from 'react';
import { View } from 'react-native';
import PageHeader from './PageHeader';

export default {
  title: 'UI/PageHeader',
  component: PageHeader,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: '#FFF' }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    notes: `
# Page Header

A reusable header component with decorative background stars, Z&M logo, profile avatar, title, and subtitle.

## Features
- Decorative background stars at 25% opacity
- Z&M's logo (optional)
- Profile avatar button (optional)
- Large title with subtitle
- Purple light background (#F0EDFF)

## Usage
Used in Keys and Chords main screen and Lessons main screen.
    `,
  },
};

export const KeysAndChords = {
  args: {
    title: 'Keys and Chords',
    subtitle: 'All of them except that one that David played that one time.',
    showLogo: true,
    onProfilePress: () => console.log('Profile pressed'),
    isLoggedIn: false,
  },
};

export const Lessons = {
  args: {
    title: 'Lessons',
    subtitle: 'Master music production and theory step by step',
    showLogo: true,
    onProfilePress: () => console.log('Profile pressed'),
    isLoggedIn: false,
  },
};

export const LoggedIn = {
  args: {
    title: 'Keys and Chords',
    subtitle: 'All of them except that one that David played that one time.',
    showLogo: true,
    onProfilePress: () => console.log('Profile pressed'),
    isLoggedIn: true,
    userDisplayName: 'John Doe',
  },
};

export const WithoutLogo = {
  args: {
    title: 'Custom Title',
    subtitle: 'Custom subtitle text goes here',
    showLogo: false,
    onProfilePress: () => console.log('Profile pressed'),
    isLoggedIn: false,
  },
};
