// Music Theory Utility
// Handles chord computation from intervals, transposition, inversions, and extensions

// All 12 chromatic notes with enharmonic equivalents
const CHROMATIC_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Map enharmonic notes to their chromatic equivalents for consistency
const ENHARMONIC_TO_CHROMATIC = {
  // Flats to sharps
  'Db': 'C#',
  'Eb': 'D#',
  'Fb': 'E',
  'Gb': 'F#',
  'Ab': 'G#',
  'Bb': 'A#',
  'Cb': 'B',
  // Sharps that equal naturals
  'E#': 'F',
  'B#': 'C',
  // Double sharps (rare but used in theory)
  'C##': 'D',
  'D##': 'E',
  'F##': 'G',
  'G##': 'A',
  'A##': 'B',
};

// Map sharp notes to flat equivalents (for display in flat keys)
const SHARP_TO_FLAT = {
  'C#': 'Db',
  'D#': 'Eb',
  'E#': 'F',
  'F#': 'Gb',
  'G#': 'Ab',
  'A#': 'Bb',
  'B#': 'C',
};

// Keys that prefer flats
const FLAT_KEYS = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm', 'Ebm'];

// Chord type definitions with intervals (semitones from root)
export const CHORD_TYPES = {
  // Triads
  major: { intervals: [0, 4, 7], symbol: '', name: 'Major' },
  minor: { intervals: [0, 3, 7], symbol: 'm', name: 'Minor' },
  diminished: { intervals: [0, 3, 6], symbol: 'dim', name: 'Diminished' },
  augmented: { intervals: [0, 4, 8], symbol: 'aug', name: 'Augmented' },

  // Seventh chords
  major7: { intervals: [0, 4, 7, 11], symbol: 'maj7', name: 'Major 7th' },
  minor7: { intervals: [0, 3, 7, 10], symbol: 'm7', name: 'Minor 7th' },
  dominant7: { intervals: [0, 4, 7, 10], symbol: '7', name: 'Dominant 7th' },
  diminished7: { intervals: [0, 3, 6, 9], symbol: 'dim7', name: 'Diminished 7th' },
  halfDiminished7: { intervals: [0, 3, 6, 10], symbol: 'm7b5', name: 'Half-Diminished 7th' },
  minorMajor7: { intervals: [0, 3, 7, 11], symbol: 'mMaj7', name: 'Minor Major 7th' },
  augmented7: { intervals: [0, 4, 8, 10], symbol: 'aug7', name: 'Augmented 7th' },
  augmentedMajor7: { intervals: [0, 4, 8, 11], symbol: 'augMaj7', name: 'Augmented Major 7th' },

  // Sixth chords
  major6: { intervals: [0, 4, 7, 9], symbol: '6', name: 'Major 6th' },
  minor6: { intervals: [0, 3, 7, 9], symbol: 'm6', name: 'Minor 6th' },

  // Suspended chords
  sus2: { intervals: [0, 2, 7], symbol: 'sus2', name: 'Suspended 2nd' },
  sus4: { intervals: [0, 5, 7], symbol: 'sus4', name: 'Suspended 4th' },

  // Add chords
  add9: { intervals: [0, 4, 7, 14], symbol: 'add9', name: 'Add 9' },
  minorAdd9: { intervals: [0, 3, 7, 14], symbol: 'madd9', name: 'Minor Add 9' },

  // Extended chords (9th, 11th, 13th)
  dominant9: { intervals: [0, 4, 7, 10, 14], symbol: '9', name: 'Dominant 9th' },
  major9: { intervals: [0, 4, 7, 11, 14], symbol: 'maj9', name: 'Major 9th' },
  minor9: { intervals: [0, 3, 7, 10, 14], symbol: 'm9', name: 'Minor 9th' },

  dominant11: { intervals: [0, 4, 7, 10, 14, 17], symbol: '11', name: 'Dominant 11th' },
  major11: { intervals: [0, 4, 7, 11, 14, 17], symbol: 'maj11', name: 'Major 11th' },
  minor11: { intervals: [0, 3, 7, 10, 14, 17], symbol: 'm11', name: 'Minor 11th' },

  dominant13: { intervals: [0, 4, 7, 10, 14, 17, 21], symbol: '13', name: 'Dominant 13th' },
  major13: { intervals: [0, 4, 7, 11, 14, 17, 21], symbol: 'maj13', name: 'Major 13th' },
  minor13: { intervals: [0, 3, 7, 10, 14, 17, 21], symbol: 'm13', name: 'Minor 13th' },
};

// Extensions available for each base chord type
export const EXTENSIONS_FOR_CHORD_TYPE = {
  major: ['major7', 'major6', 'add9', 'major9', 'major11', 'major13', 'sus2', 'sus4'],
  minor: ['minor7', 'minor6', 'minorAdd9', 'minor9', 'minor11', 'minor13'],
  diminished: ['diminished7', 'halfDiminished7'],
  dominant: ['dominant7', 'dominant9', 'dominant11', 'dominant13'], // For V chord
};

/**
 * Normalize a note name to use sharps
 */
export function normalizeNote(note) {
  if (!note) return note;
  const baseNote = note.replace('m', ''); // Remove minor indicator if present
  return ENHARMONIC_TO_CHROMATIC[baseNote] || baseNote;
}

/**
 * Get the index of a note in the chromatic scale
 */
export function getNoteIndex(note) {
  const normalized = normalizeNote(note);
  return CHROMATIC_NOTES.indexOf(normalized);
}

/**
 * Transpose a note by a number of semitones
 */
export function transposeNote(note, semitones, preferFlats = false) {
  const index = getNoteIndex(note);
  if (index === -1) return note;

  const newIndex = ((index + semitones) % 12 + 12) % 12;
  const sharpNote = CHROMATIC_NOTES[newIndex];

  if (preferFlats && SHARP_TO_FLAT[sharpNote]) {
    return SHARP_TO_FLAT[sharpNote];
  }

  return sharpNote;
}

/**
 * Get chord notes from a root note and chord type
 */
export function getChordNotes(root, chordType, inversion = 0, preferFlats = false) {
  const chord = CHORD_TYPES[chordType];
  if (!chord) return [];

  // Calculate notes from intervals
  let notes = chord.intervals.map(interval => transposeNote(root, interval, preferFlats));

  // Apply inversion by rotating the array
  if (inversion > 0 && inversion < notes.length) {
    notes = [...notes.slice(inversion), ...notes.slice(0, inversion)];
  }

  return notes;
}

/**
 * Get the chord symbol (e.g., "Cmaj7", "Dm", "G7")
 */
export function getChordSymbol(root, chordType) {
  const chord = CHORD_TYPES[chordType];
  if (!chord) return root;
  return `${root}${chord.symbol}`;
}

/**
 * Get the full chord name (e.g., "C Major 7th", "D Minor")
 */
export function getChordName(root, chordType) {
  const chord = CHORD_TYPES[chordType];
  if (!chord) return root;
  return `${root} ${chord.name}`;
}

/**
 * Get inversion name
 */
export function getInversionName(inversion, totalNotes) {
  if (inversion === 0) return 'Root Position';
  if (inversion === 1) return '1st Inversion';
  if (inversion === 2) return '2nd Inversion';
  if (inversion === 3) return '3rd Inversion';
  return `${inversion}th Inversion`;
}

/**
 * Get available inversions for a chord type
 */
export function getAvailableInversions(chordType) {
  const chord = CHORD_TYPES[chordType];
  if (!chord) return [{ value: 0, label: 'Root Position' }];

  const numNotes = chord.intervals.length;
  const inversions = [];

  for (let i = 0; i < numNotes; i++) {
    inversions.push({
      value: i,
      label: getInversionName(i, numNotes),
    });
  }

  return inversions;
}

/**
 * Get available extensions for a chord based on its type and scale context
 * @param {string} baseType - 'major', 'minor', or 'diminished'
 * @param {number} scaleDegree - 1-7 scale degree (to determine if it's a dominant chord)
 */
export function getAvailableExtensions(baseType, scaleDegree = 1) {
  const extensions = [{ value: baseType, label: 'Triad (no extension)' }];

  // V chord in major scale can use dominant extensions
  if (scaleDegree === 5 && baseType === 'major') {
    EXTENSIONS_FOR_CHORD_TYPE.dominant.forEach(ext => {
      extensions.push({
        value: ext,
        label: CHORD_TYPES[ext].name,
      });
    });
  } else if (EXTENSIONS_FOR_CHORD_TYPE[baseType]) {
    EXTENSIONS_FOR_CHORD_TYPE[baseType].forEach(ext => {
      extensions.push({
        value: ext,
        label: CHORD_TYPES[ext].name,
      });
    });
  }

  return extensions;
}

/**
 * Determine if a key prefers flats
 */
export function keyPrefersFlats(keyName) {
  return FLAT_KEYS.some(k => keyName.includes(k));
}

export default {
  CHORD_TYPES,
  EXTENSIONS_FOR_CHORD_TYPE,
  normalizeNote,
  getNoteIndex,
  transposeNote,
  getChordNotes,
  getChordSymbol,
  getChordName,
  getInversionName,
  getAvailableInversions,
  getAvailableExtensions,
  keyPrefersFlats,
};
