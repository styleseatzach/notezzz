import React from 'react';
import KeyDetailScreen from '../../../components/screens/KeyDetailScreen';
import keysData from '../../../data/keys.json';

// Get all key names for the dropdown
const keyNames = Object.keys(keysData);

export default {
  title: 'Screens/KeyDetailScreen',
  component: KeyDetailScreen,
  argTypes: {
    selectedKey: {
      control: { type: 'select' },
      options: keyNames,
      description: 'Select a musical key to display',
      defaultValue: 'C Major',
    },
  },
  parameters: {
    notes: `
# KeyDetailScreen

Full-screen view for a musical key showing:
- Header with key name, Camelot number, and relative key
- Large piano roll showing scale notes (2 octaves)
- All 7 chords in the key, each with:
  - Chord number (1-7)
  - Chord name
  - 2-octave piano roll with chord notes highlighted (one instance each, root going up)

## Design Notes
- Header background uses Camelot "light" color
- Piano highlights use Camelot "mid" color (darker/more saturated)
- ALL chords in the same key use the SAME highlight color
    `,
  },
};

const Template = (args) => {
  const keyData = keysData[args.selectedKey];
  return (
    <KeyDetailScreen
      keyData={keyData}
      onBack={() => console.log('Back pressed')}
      onCamelotWheelPress={() => console.log('Camelot wheel pressed')}
    />
  );
};

export const KeyDetail = Template.bind({});
KeyDetail.args = {
  selectedKey: 'C Major',
};
