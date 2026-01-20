// Chair System Utility for Guitar Fretboard Visualization
// Based on the Musical Chair System for mapping scales across the fretboard

import { normalizeNote, getNoteIndex, transposeNote } from './musicTheory';

// Standard guitar tuning (low to high string)
export const STANDARD_TUNING = ['E', 'A', 'D', 'G', 'B', 'E'];

// String indices (0 = low E, 5 = high E)
export const STRING_NAMES = {
  0: 'E (low)',
  1: 'A',
  2: 'D',
  3: 'G',
  4: 'B',
  5: 'E (high)',
};

// Fret marker positions (standard guitar dots)
export const FRET_MARKERS = {
  single: [3, 5, 7, 9, 15, 17, 19, 21],
  double: [12, 24],
};

// Chromatic notes for reference
const CHROMATIC_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Scale intervals (semitones from root)
export const SCALE_INTERVALS = {
  // Pentatonic scales (5 notes)
  majorPentatonic: [0, 2, 4, 7, 9],      // 1, 2, 3, 5, 6
  minorPentatonic: [0, 3, 5, 7, 10],     // 1, b3, 4, 5, b7

  // Diatonic scales (7 notes)
  major: [0, 2, 4, 5, 7, 9, 11],         // 1, 2, 3, 4, 5, 6, 7
  minor: [0, 2, 3, 5, 7, 8, 10],         // 1, 2, b3, 4, 5, b6, b7 (natural minor)
};

// Chair system color mapping for scale degrees
// These map to the visual "chair" pattern from the PDF
export const CHAIR_COLORS = {
  // Pentatonic major: 1, 2, 3, 5, 6
  majorPentatonic: {
    0: 'root',      // 1 - Root (forms chair back top)
    2: 'second',    // 2 - 2nd degree
    4: 'third',     // 3 - 3rd degree (forms seat)
    7: 'fifth',     // 5 - 5th degree (forms front leg bottom)
    9: 'sixth',     // 6 - 6th degree
  },
  // Pentatonic minor: 1, b3, 4, 5, b7
  minorPentatonic: {
    0: 'root',      // 1 - Minor root
    3: 'third',     // b3 - Minor 3rd (forms seat)
    5: 'fourth',    // 4 - 4th degree
    7: 'fifth',     // 5 - 5th degree
    10: 'seventh',  // b7 - Minor 7th (relative minor root)
  },
  // Diatonic additions
  major: {
    5: 'fourth',    // 4 - Added for diatonic
    11: 'seventh',  // 7 - Added for diatonic
  },
  minor: {
    2: 'second',    // 2 - Added for diatonic
    8: 'sixth',     // b6 - Added for diatonic
  },
};

// Chair shape roles - determines visual styling
export const CHAIR_ROLES = {
  root: { color: 'green', role: 'Major Root / Chair Back Top' },
  second: { color: 'red', role: '2nd' },
  third: { color: 'purple', role: '3rd / Seat' },
  fourth: { color: 'black', role: '4th (diatonic)' },
  fifth: { color: 'blue', role: '5th / Front Leg' },
  sixth: { color: 'orange', role: '6th' },
  seventh: { color: 'black', role: '7th (diatonic)' },
  minorRoot: { color: 'green', role: 'Relative Minor Root' },
};

// Interval names for display
export const INTERVAL_NAMES = {
  major: {
    0: '1', 2: '2', 4: '3', 5: '4', 7: '5', 9: '6', 11: '7',
  },
  minor: {
    0: '1', 2: '2', 3: '♭3', 5: '4', 7: '5', 8: '♭6', 10: '♭7',
  },
  majorPentatonic: {
    0: '1', 2: '2', 4: '3', 7: '5', 9: '6',
  },
  minorPentatonic: {
    0: '1', 3: '♭3', 5: '4', 7: '5', 10: '♭7',
  },
};

/**
 * Get the note at a specific fret on a specific string
 * @param {number} stringIndex - 0 = low E, 5 = high E
 * @param {number} fret - Fret number (0 = open string)
 * @param {boolean} preferFlats - Whether to use flat notation
 * @returns {string} Note name
 */
export function getNoteAtFret(stringIndex, fret, preferFlats = false) {
  const openNote = STANDARD_TUNING[stringIndex];
  return transposeNote(openNote, fret, preferFlats);
}

/**
 * Find all positions of a specific note on the fretboard
 * @param {string} note - Note name (e.g., 'G', 'C#')
 * @param {number} startFret - Starting fret to search from
 * @param {number} endFret - Ending fret to search to
 * @returns {Array} Array of {string, fret} objects
 */
export function findNotePositions(note, startFret = 0, endFret = 24) {
  const positions = [];
  const normalizedNote = normalizeNote(note);

  for (let string = 0; string < 6; string++) {
    for (let fret = startFret; fret <= endFret; fret++) {
      const fretNote = getNoteAtFret(string, fret);
      if (normalizeNote(fretNote) === normalizedNote) {
        positions.push({ string, fret });
      }
    }
  }

  return positions;
}

/**
 * Get scale notes for a given root and scale type
 * @param {string} root - Root note
 * @param {string} scaleType - 'major', 'minor', 'majorPentatonic', 'minorPentatonic'
 * @param {boolean} preferFlats - Whether to use flat notation
 * @returns {Array} Array of note names in the scale
 */
export function getScaleNotes(root, scaleType, preferFlats = false) {
  const intervals = SCALE_INTERVALS[scaleType];
  if (!intervals) return [];

  return intervals.map(interval => transposeNote(root, interval, preferFlats));
}

/**
 * Get the interval (semitones from root) for a note in a scale
 * @param {string} note - Note to check
 * @param {string} root - Root note of the scale
 * @returns {number} Interval in semitones, or -1 if not found
 */
export function getIntervalFromRoot(note, root) {
  const rootIndex = getNoteIndex(root);
  const noteIndex = getNoteIndex(note);

  if (rootIndex === -1 || noteIndex === -1) return -1;

  return ((noteIndex - rootIndex) + 12) % 12;
}

/**
 * Get scale pattern data for the entire fretboard
 * @param {string} root - Root note
 * @param {string} scaleType - Scale type
 * @param {number} startFret - Starting fret
 * @param {number} endFret - Ending fret
 * @param {boolean} preferFlats - Whether to use flat notation
 * @returns {Array} Array of position objects with note, interval, role, and color info
 */
export function getScalePattern(root, scaleType, startFret = 0, endFret = 24, preferFlats = false) {
  const intervals = SCALE_INTERVALS[scaleType];
  if (!intervals) return [];

  const pattern = [];
  const scaleNotes = getScaleNotes(root, scaleType, preferFlats);

  // Determine if this is pentatonic or diatonic
  const isPentatonic = scaleType.includes('Pentatonic');
  const isMajor = scaleType.includes('major') || scaleType === 'major';

  for (let string = 0; string < 6; string++) {
    for (let fret = startFret; fret <= endFret; fret++) {
      const note = getNoteAtFret(string, fret, preferFlats);
      const interval = getIntervalFromRoot(note, root);

      // Check if this note is in the scale
      if (intervals.includes(interval)) {
        // Determine the chair role and color
        let role = null;
        let colorKey = null;

        if (isPentatonic) {
          const colorMap = isMajor ? CHAIR_COLORS.majorPentatonic : CHAIR_COLORS.minorPentatonic;
          colorKey = colorMap[interval];
        } else {
          // For diatonic, check pentatonic first, then diatonic additions
          const pentatonicMap = isMajor ? CHAIR_COLORS.majorPentatonic : CHAIR_COLORS.minorPentatonic;
          const diatonicMap = isMajor ? CHAIR_COLORS.major : CHAIR_COLORS.minor;

          colorKey = pentatonicMap[interval] || diatonicMap[interval];
        }

        if (colorKey) {
          role = CHAIR_ROLES[colorKey];
        }

        pattern.push({
          string,
          fret,
          note,
          interval,
          scaleDegree: getScaleDegree(interval, scaleType),
          colorKey: colorKey || 'default',
          role,
          isPentatonic: isPentatonic || !CHAIR_COLORS.major[interval] && !CHAIR_COLORS.minor[interval],
        });
      }
    }
  }

  return pattern;
}

/**
 * Get the scale degree label for an interval
 * @param {number} interval - Interval in semitones
 * @param {string} scaleType - Scale type for context
 * @returns {string} Scale degree label (e.g., '1', '♭3', '5')
 */
export function getScaleDegree(interval, scaleType) {
  const intervalMap = INTERVAL_NAMES[scaleType] || INTERVAL_NAMES.major;
  return intervalMap[interval] || '';
}

/**
 * Find the optimal starting fret for a root note position
 * @param {string} root - Root note
 * @returns {number} Recommended starting fret
 */
export function findRootPositionFret(root) {
  // Find the lowest position of the root note on the low E string (or A string)
  const positions = findNotePositions(root, 0, 12);

  // Prefer positions on the low E or A string for root
  const lowStringPositions = positions.filter(p => p.string === 0 || p.string === 1);

  if (lowStringPositions.length > 0) {
    // Return the lowest fret position
    return Math.min(...lowStringPositions.map(p => p.fret));
  }

  // Fallback to any position
  return positions.length > 0 ? positions[0].fret : 0;
}

/**
 * Get a single "chair" shape pattern (one position/box)
 * This represents one complete pentatonic pattern on the neck
 * @param {string} root - Root note
 * @param {string} scaleType - Scale type ('majorPentatonic' or 'minorPentatonic')
 * @param {number} startFret - Starting fret for this position
 * @returns {Array} Array of position objects for the chair shape
 */
export function getChairShape(root, scaleType, startFret) {
  // A chair shape spans about 4-5 frets
  const endFret = startFret + 5;
  return getScalePattern(root, scaleType, startFret, endFret, false);
}

/**
 * Generate chair diagram data showing interval relationships
 * @param {string} scaleType - 'major' or 'minor'
 * @returns {Object} Chair diagram structure
 */
export function getChairDiagramData(scaleType) {
  const isMajor = scaleType === 'major';

  return {
    majorChair: {
      top: { label: 'Major Root', interval: '1' },
      seat: { label: 'Seat', interval: '3' },
      backLeg: { label: '2nd', interval: '2' },
      frontLeg: { label: '5th', interval: '5' },
      bottom: { label: '6th', interval: '6' },
    },
    minorChair: {
      top: { label: '♭3rd', interval: '♭3' },
      seat: { label: 'Seat', interval: '4' },
      backLeg: { label: '♭7th', interval: '♭7' },
      frontLeg: { label: '5th', interval: '5' },
      bottom: { label: 'Minor Root', interval: '1' },
    },
    triad: isMajor
      ? { notes: ['1', '3', '5'], label: 'Major Triad' }
      : { notes: ['1', '♭3', '5'], label: 'Minor Triad' },
  };
}

export default {
  STANDARD_TUNING,
  STRING_NAMES,
  FRET_MARKERS,
  SCALE_INTERVALS,
  CHAIR_COLORS,
  CHAIR_ROLES,
  INTERVAL_NAMES,
  getNoteAtFret,
  findNotePositions,
  getScaleNotes,
  getIntervalFromRoot,
  getScalePattern,
  getScaleDegree,
  findRootPositionFret,
  getChairShape,
  getChairDiagramData,
};
