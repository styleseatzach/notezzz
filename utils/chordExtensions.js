/**
 * Chord Extensions Utility
 * Returns appropriate chord types/extensions for each scale degree in a key
 */

/**
 * Get chord extensions that work for a given scale degree
 * @param {number} degree - Scale degree (1-7)
 * @param {string} scaleType - 'major' or 'minor'
 * @returns {Array} Array of chord type objects with {type, displayName}
 */
export function getChordExtensionsForDegree(degree, scaleType = 'major') {
  const extensions = {
    major: {
      1: [ // I - Tonic major
        { type: 'major', displayName: '' },
        { type: 'major7', displayName: 'maj7' },
        { type: 'dominant7', displayName: '6' }, // Using 7 voicings as 6 for now
        // { type: 'add9', displayName: 'add9' },
        // { type: 'maj9', displayName: 'maj9' },
      ],
      2: [ // ii - Supertonic minor
        { type: 'minor', displayName: 'm' },
        { type: 'minor7', displayName: 'm7' },
        // { type: 'm9', displayName: 'm9' },
        // { type: 'm11', displayName: 'm11' },
      ],
      3: [ // iii - Mediant minor
        { type: 'minor', displayName: 'm' },
        { type: 'minor7', displayName: 'm7' },
        // { type: 'm9', displayName: 'm9' },
      ],
      4: [ // IV - Subdominant major
        { type: 'major', displayName: '' },
        { type: 'major7', displayName: 'maj7' },
        { type: 'dominant7', displayName: '6' }, // Using 7 voicings as 6 for now
        // { type: 'maj9', displayName: 'maj9' },
      ],
      5: [ // V - Dominant
        { type: 'major', displayName: '' },
        { type: 'dominant7', displayName: '7' },
        // { type: '9', displayName: '9' },
        // { type: '13', displayName: '13' },
        // { type: 'sus4', displayName: 'sus4' },
      ],
      6: [ // vi - Submediant minor
        { type: 'minor', displayName: 'm' },
        { type: 'minor7', displayName: 'm7' },
        // { type: 'm9', displayName: 'm9' },
      ],
      7: [ // vii° - Leading tone diminished
        { type: 'diminished', displayName: 'dim' },
        { type: 'minor7', displayName: 'm7♭5' }, // half-diminished, using m7 for now
        // { type: 'dim7', displayName: 'dim7' },
      ],
    },
    minor: {
      1: [ // i - Tonic minor
        { type: 'minor', displayName: 'm' },
        { type: 'minor7', displayName: 'm7' },
        // { type: 'm9', displayName: 'm9' },
      ],
      2: [ // ii° - Supertonic diminished
        { type: 'diminished', displayName: 'dim' },
        { type: 'minor7', displayName: 'm7♭5' },
      ],
      3: [ // III - Mediant major
        { type: 'major', displayName: '' },
        { type: 'major7', displayName: 'maj7' },
      ],
      4: [ // iv - Subdominant minor
        { type: 'minor', displayName: 'm' },
        { type: 'minor7', displayName: 'm7' },
      ],
      5: [ // v - Dominant minor (or V7 in harmonic minor)
        { type: 'minor', displayName: 'm' },
        { type: 'dominant7', displayName: '7' }, // V7 from harmonic minor
      ],
      6: [ // VI - Submediant major
        { type: 'major', displayName: '' },
        { type: 'major7', displayName: 'maj7' },
      ],
      7: [ // VII - Subtonic major
        { type: 'major', displayName: '' },
        { type: 'dominant7', displayName: '7' },
      ],
    },
  };

  const scaleExtensions = extensions[scaleType] || extensions.major;
  return scaleExtensions[degree] || [{ type: 'major', displayName: '' }];
}

/**
 * Get display name for a chord
 * @param {string} root - Root note
 * @param {string} displayName - Chord extension display name
 * @returns {string} Full chord name
 */
export function getChordDisplayName(root, displayName) {
  return `${root}${displayName}`;
}
