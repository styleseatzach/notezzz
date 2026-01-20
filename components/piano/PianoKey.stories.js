import React from 'react';
import { View } from 'react-native';
import PianoKey from './PianoKey';

export default {
  title: 'Components/Piano/PianoKey',
  component: PianoKey,
};

export const WhiteKey = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5', width: 100 }}>
    <PianoKey note="C" isBlackKey={false} showLabel={true} />
  </View>
);

export const BlackKey = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5', width: 60 }}>
    <PianoKey note="C#" isBlackKey={true} showLabel={false} />
  </View>
);

export const HighlightedWhiteKey = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5', width: 100 }}>
    <PianoKey
      note="E"
      isBlackKey={false}
      isHighlighted={true}
      highlightColor="#E4C478"
      showLabel={true}
    />
  </View>
);

export const HighlightedBlackKey = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5', width: 60 }}>
    <PianoKey
      note="F#"
      isBlackKey={true}
      isHighlighted={true}
      highlightColor="#78E4A9"
      showLabel={false}
    />
  </View>
);

export const DifferentWidths = () => (
  <View style={{ padding: 20, backgroundColor: '#f5f5f5', flexDirection: 'row', gap: 16 }}>
    <View style={{ alignItems: 'center', width: 40 }}>
      <PianoKey note="C" isBlackKey={false} showLabel={true} />
    </View>
    <View style={{ alignItems: 'center', width: 80 }}>
      <PianoKey note="D" isBlackKey={false} showLabel={true} />
    </View>
    <View style={{ alignItems: 'center', width: 120 }}>
      <PianoKey note="E" isBlackKey={false} showLabel={true} />
    </View>
  </View>
);
