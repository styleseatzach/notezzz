import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Logo from './Logo';
import Avatar from './Avatar';

export default {
  title: 'Components/UI',
};

export const LogoSizes = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Logo Sizes</Text>
    <View style={styles.row}>
      <Logo size="small" />
      <View style={{ width: 16 }} />
      <Logo size="medium" />
      <View style={{ width: 16 }} />
      <Logo size="large" />
    </View>
  </View>
);

export const AvatarDefault = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Avatar (Default)</Text>
    <Avatar initial="Z" onPress={() => alert('Avatar pressed')} />
  </View>
);

export const AvatarCustomInitial = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Avatar (Custom Initials)</Text>
    <View style={styles.row}>
      <Avatar initial="Z" onPress={() => {}} />
      <View style={{ width: 16 }} />
      <Avatar initial="M" onPress={() => {}} />
      <View style={{ width: 16 }} />
      <Avatar initial="J" onPress={() => {}} />
    </View>
  </View>
);

export const HeaderExample = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Typical Header Layout</Text>
    <View style={[styles.header, { backgroundColor: '#F0EDFF' }]}>
      <Logo size="medium" />
      <Avatar initial="Z" onPress={() => {}} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
    color: '#5E4DB2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
});
