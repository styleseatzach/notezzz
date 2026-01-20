// Guitar Chord Voicings Database
// Multiple voicings per chord, ordered by position (open chords first, then barre chords up the neck)
// Format: array of fret numbers for each string [E, A, D, G, B, e]
// -1 = muted (X), 0 = open string (O)
// Finger numbers: 1 = index, 2 = middle, 3 = ring, 4 = pinky, T = thumb
// Barre: { fret, startString, endString }

export const CHORD_VOICINGS = {
  // ============ MAJOR CHORDS ============
  'C': [
    // Open C (most common)
    { frets: [-1, 3, 2, 0, 1, 0], fingers: [null, 3, 2, null, 1, null], baseFret: 1, name: 'Open C' },
    // C barre (A shape) at 3rd fret
    { frets: [-1, 3, 5, 5, 5, 3], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 3, startString: 1, endString: 5 }, baseFret: 3, name: 'A Shape - 3rd Fret' },
    // C barre (E shape) at 8th fret
    { frets: [8, 10, 10, 9, 8, 8], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 8, startString: 0, endString: 5 }, baseFret: 8, name: 'E Shape - 8th Fret' },
    // C/G (first inversion)
    { frets: [3, 3, 2, 0, 1, 0], fingers: [3, 4, 2, null, 1, null], baseFret: 1, name: 'C/G' },
  ],
  'C#': [
    { frets: [-1, 4, 6, 6, 6, 4], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 4, startString: 1, endString: 5 }, baseFret: 4, name: 'A Shape - 4th Fret' },
    { frets: [9, 11, 11, 10, 9, 9], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 9, startString: 0, endString: 5 }, baseFret: 9, name: 'E Shape - 9th Fret' },
    { frets: [-1, 4, 3, 1, 2, 1], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 1, startString: 2, endString: 5 }, baseFret: 1, name: 'C Shape - 1st Fret' },
  ],
  'Db': [
    { frets: [-1, 4, 6, 6, 6, 4], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 4, startString: 1, endString: 5 }, baseFret: 4, name: 'A Shape - 4th Fret' },
    { frets: [9, 11, 11, 10, 9, 9], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 9, startString: 0, endString: 5 }, baseFret: 9, name: 'E Shape - 9th Fret' },
  ],
  'D': [
    // Open D
    { frets: [-1, -1, 0, 2, 3, 2], fingers: [null, null, null, 1, 3, 2], baseFret: 1, name: 'Open D' },
    // D barre (A shape) at 5th fret
    { frets: [-1, 5, 7, 7, 7, 5], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 5, startString: 1, endString: 5 }, baseFret: 5, name: 'A Shape - 5th Fret' },
    // D barre (E shape) at 10th fret
    { frets: [10, 12, 12, 11, 10, 10], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 10, startString: 0, endString: 5 }, baseFret: 10, name: 'E Shape - 10th Fret' },
    // D/F# (first inversion)
    { frets: [2, -1, 0, 2, 3, 2], fingers: [1, null, null, 2, 4, 3], baseFret: 1, name: 'D/F#' },
  ],
  'D#': [
    { frets: [-1, 6, 8, 8, 8, 6], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 6, startString: 1, endString: 5 }, baseFret: 6, name: 'A Shape - 6th Fret' },
    { frets: [-1, -1, 1, 3, 4, 3], fingers: [null, null, 1, 2, 4, 3], baseFret: 1, name: 'D Shape - 1st Fret' },
  ],
  'Eb': [
    { frets: [-1, 6, 8, 8, 8, 6], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 6, startString: 1, endString: 5 }, baseFret: 6, name: 'A Shape - 6th Fret' },
    { frets: [-1, -1, 1, 3, 4, 3], fingers: [null, null, 1, 2, 4, 3], baseFret: 1, name: 'D Shape - 1st Fret' },
  ],
  'E': [
    // Open E (most common)
    { frets: [0, 2, 2, 1, 0, 0], fingers: [null, 2, 3, 1, null, null], baseFret: 1, name: 'Open E' },
    // E barre (A shape) at 7th fret
    { frets: [-1, 7, 9, 9, 9, 7], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 7, startString: 1, endString: 5 }, baseFret: 7, name: 'A Shape - 7th Fret' },
    // E at 12th fret (octave)
    { frets: [12, 14, 14, 13, 12, 12], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 12, startString: 0, endString: 5 }, baseFret: 12, name: 'E Shape - 12th Fret' },
  ],
  'F': [
    // F barre (E shape) at 1st fret - most common
    { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 1, startString: 0, endString: 5 }, baseFret: 1, name: 'E Shape Barre' },
    // Partial F (no barre, easier)
    { frets: [-1, -1, 3, 2, 1, 1], fingers: [null, null, 3, 2, 1, 1], barre: { fret: 1, startString: 4, endString: 5 }, baseFret: 1, name: 'Easy F (4 strings)' },
    // F barre (A shape) at 8th fret
    { frets: [-1, 8, 10, 10, 10, 8], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 8, startString: 1, endString: 5 }, baseFret: 8, name: 'A Shape - 8th Fret' },
  ],
  'F#': [
    { frets: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 2, startString: 0, endString: 5 }, baseFret: 2, name: 'E Shape - 2nd Fret' },
    { frets: [-1, 9, 11, 11, 11, 9], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 9, startString: 1, endString: 5 }, baseFret: 9, name: 'A Shape - 9th Fret' },
  ],
  'Gb': [
    { frets: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 2, startString: 0, endString: 5 }, baseFret: 2, name: 'E Shape - 2nd Fret' },
  ],
  'G': [
    // Open G (most common)
    { frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, null, null, null, 3], baseFret: 1, name: 'Open G' },
    // Open G (4-finger version)
    { frets: [3, 2, 0, 0, 3, 3], fingers: [2, 1, null, null, 3, 4], baseFret: 1, name: 'Open G (4-finger)' },
    // G barre (E shape) at 3rd fret
    { frets: [3, 5, 5, 4, 3, 3], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 3, startString: 0, endString: 5 }, baseFret: 3, name: 'E Shape - 3rd Fret' },
    // G barre (A shape) at 10th fret
    { frets: [-1, 10, 12, 12, 12, 10], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 10, startString: 1, endString: 5 }, baseFret: 10, name: 'A Shape - 10th Fret' },
  ],
  'G#': [
    { frets: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 4, startString: 0, endString: 5 }, baseFret: 4, name: 'E Shape - 4th Fret' },
    { frets: [-1, 11, 13, 13, 13, 11], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 11, startString: 1, endString: 5 }, baseFret: 11, name: 'A Shape - 11th Fret' },
  ],
  'Ab': [
    { frets: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 4, startString: 0, endString: 5 }, baseFret: 4, name: 'E Shape - 4th Fret' },
  ],
  'A': [
    // Open A (most common)
    { frets: [-1, 0, 2, 2, 2, 0], fingers: [null, null, 1, 2, 3, null], baseFret: 1, name: 'Open A' },
    // A barre (E shape) at 5th fret
    { frets: [5, 7, 7, 6, 5, 5], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 5, startString: 0, endString: 5 }, baseFret: 5, name: 'E Shape - 5th Fret' },
    // A barre (A shape) at 12th fret
    { frets: [-1, 12, 14, 14, 14, 12], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 12, startString: 1, endString: 5 }, baseFret: 12, name: 'A Shape - 12th Fret' },
  ],
  'A#': [
    { frets: [-1, 1, 3, 3, 3, 1], fingers: [null, 1, 2, 3, 4, 1], barre: { fret: 1, startString: 1, endString: 5 }, baseFret: 1, name: 'A Shape - 1st Fret' },
    { frets: [6, 8, 8, 7, 6, 6], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 6, startString: 0, endString: 5 }, baseFret: 6, name: 'E Shape - 6th Fret' },
  ],
  'Bb': [
    { frets: [-1, 1, 3, 3, 3, 1], fingers: [null, 1, 2, 3, 4, 1], barre: { fret: 1, startString: 1, endString: 5 }, baseFret: 1, name: 'A Shape - 1st Fret' },
    { frets: [6, 8, 8, 7, 6, 6], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 6, startString: 0, endString: 5 }, baseFret: 6, name: 'E Shape - 6th Fret' },
  ],
  'B': [
    { frets: [-1, 2, 4, 4, 4, 2], fingers: [null, 1, 2, 3, 4, 1], barre: { fret: 2, startString: 1, endString: 5 }, baseFret: 2, name: 'A Shape - 2nd Fret' },
    { frets: [7, 9, 9, 8, 7, 7], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 7, startString: 0, endString: 5 }, baseFret: 7, name: 'E Shape - 7th Fret' },
  ],

  // ============ MINOR CHORDS ============
  'Cm': [
    // Cm barre (Am shape) at 3rd fret
    { frets: [-1, 3, 5, 5, 4, 3], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 3, startString: 1, endString: 5 }, baseFret: 3, name: 'Am Shape - 3rd Fret' },
    // Cm barre (Em shape) at 8th fret
    { frets: [8, 10, 10, 8, 8, 8], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 8, startString: 0, endString: 5 }, baseFret: 8, name: 'Em Shape - 8th Fret' },
    // Partial Cm
    { frets: [-1, 3, 1, 0, 1, -1], fingers: [null, 3, 1, null, 2, null], baseFret: 1, name: 'Partial Cm' },
  ],
  'C#m': [
    { frets: [-1, 4, 6, 6, 5, 4], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 4, startString: 1, endString: 5 }, baseFret: 4, name: 'Am Shape - 4th Fret' },
    { frets: [9, 11, 11, 9, 9, 9], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 9, startString: 0, endString: 5 }, baseFret: 9, name: 'Em Shape - 9th Fret' },
  ],
  'Dbm': [
    { frets: [-1, 4, 6, 6, 5, 4], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 4, startString: 1, endString: 5 }, baseFret: 4, name: 'Am Shape - 4th Fret' },
  ],
  'Dm': [
    // Open Dm (most common)
    { frets: [-1, -1, 0, 2, 3, 1], fingers: [null, null, null, 2, 3, 1], baseFret: 1, name: 'Open Dm' },
    // Dm barre (Am shape) at 5th fret
    { frets: [-1, 5, 7, 7, 6, 5], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 5, startString: 1, endString: 5 }, baseFret: 5, name: 'Am Shape - 5th Fret' },
    // Dm barre (Em shape) at 10th fret
    { frets: [10, 12, 12, 10, 10, 10], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 10, startString: 0, endString: 5 }, baseFret: 10, name: 'Em Shape - 10th Fret' },
  ],
  'D#m': [
    { frets: [-1, 6, 8, 8, 7, 6], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 6, startString: 1, endString: 5 }, baseFret: 6, name: 'Am Shape - 6th Fret' },
    { frets: [-1, -1, 1, 3, 4, 2], fingers: [null, null, 1, 3, 4, 2], baseFret: 1, name: 'Dm Shape - 1st Fret' },
  ],
  'Ebm': [
    { frets: [-1, 6, 8, 8, 7, 6], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 6, startString: 1, endString: 5 }, baseFret: 6, name: 'Am Shape - 6th Fret' },
  ],
  'Em': [
    // Open Em (most common - easiest chord!)
    { frets: [0, 2, 2, 0, 0, 0], fingers: [null, 2, 3, null, null, null], baseFret: 1, name: 'Open Em' },
    // Em barre (Am shape) at 7th fret
    { frets: [-1, 7, 9, 9, 8, 7], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 7, startString: 1, endString: 5 }, baseFret: 7, name: 'Am Shape - 7th Fret' },
    // Em at 12th fret
    { frets: [12, 14, 14, 12, 12, 12], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 12, startString: 0, endString: 5 }, baseFret: 12, name: 'Em Shape - 12th Fret' },
  ],
  'Fm': [
    // Fm barre (Em shape) at 1st fret
    { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 1, startString: 0, endString: 5 }, baseFret: 1, name: 'Em Shape Barre' },
    // Fm barre (Am shape) at 8th fret
    { frets: [-1, 8, 10, 10, 9, 8], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 8, startString: 1, endString: 5 }, baseFret: 8, name: 'Am Shape - 8th Fret' },
  ],
  'F#m': [
    { frets: [2, 4, 4, 2, 2, 2], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 2, startString: 0, endString: 5 }, baseFret: 2, name: 'Em Shape - 2nd Fret' },
    { frets: [-1, 9, 11, 11, 10, 9], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 9, startString: 1, endString: 5 }, baseFret: 9, name: 'Am Shape - 9th Fret' },
  ],
  'Gbm': [
    { frets: [2, 4, 4, 2, 2, 2], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 2, startString: 0, endString: 5 }, baseFret: 2, name: 'Em Shape - 2nd Fret' },
  ],
  'Gm': [
    // Gm barre (Em shape) at 3rd fret
    { frets: [3, 5, 5, 3, 3, 3], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 3, startString: 0, endString: 5 }, baseFret: 3, name: 'Em Shape - 3rd Fret' },
    // Gm barre (Am shape) at 10th fret
    { frets: [-1, 10, 12, 12, 11, 10], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 10, startString: 1, endString: 5 }, baseFret: 10, name: 'Am Shape - 10th Fret' },
    // Partial Gm (easier)
    { frets: [-1, -1, 5, 3, 3, 3], fingers: [null, null, 4, 1, 1, 1], barre: { fret: 3, startString: 3, endString: 5 }, baseFret: 3, name: 'Partial Gm' },
  ],
  'G#m': [
    { frets: [4, 6, 6, 4, 4, 4], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 4, startString: 0, endString: 5 }, baseFret: 4, name: 'Em Shape - 4th Fret' },
    { frets: [-1, 11, 13, 13, 12, 11], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 11, startString: 1, endString: 5 }, baseFret: 11, name: 'Am Shape - 11th Fret' },
  ],
  'Abm': [
    { frets: [4, 6, 6, 4, 4, 4], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 4, startString: 0, endString: 5 }, baseFret: 4, name: 'Em Shape - 4th Fret' },
  ],
  'Am': [
    // Open Am (most common)
    { frets: [-1, 0, 2, 2, 1, 0], fingers: [null, null, 2, 3, 1, null], baseFret: 1, name: 'Open Am' },
    // Am barre (Em shape) at 5th fret
    { frets: [5, 7, 7, 5, 5, 5], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 5, startString: 0, endString: 5 }, baseFret: 5, name: 'Em Shape - 5th Fret' },
    // Am at 12th fret
    { frets: [-1, 12, 14, 14, 13, 12], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 12, startString: 1, endString: 5 }, baseFret: 12, name: 'Am Shape - 12th Fret' },
  ],
  'A#m': [
    { frets: [-1, 1, 3, 3, 2, 1], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 1, startString: 1, endString: 5 }, baseFret: 1, name: 'Am Shape - 1st Fret' },
    { frets: [6, 8, 8, 6, 6, 6], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 6, startString: 0, endString: 5 }, baseFret: 6, name: 'Em Shape - 6th Fret' },
  ],
  'Bbm': [
    { frets: [-1, 1, 3, 3, 2, 1], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 1, startString: 1, endString: 5 }, baseFret: 1, name: 'Am Shape - 1st Fret' },
    { frets: [6, 8, 8, 6, 6, 6], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 6, startString: 0, endString: 5 }, baseFret: 6, name: 'Em Shape - 6th Fret' },
  ],
  'Bm': [
    // Bm barre (Am shape) at 2nd fret
    { frets: [-1, 2, 4, 4, 3, 2], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 2, startString: 1, endString: 5 }, baseFret: 2, name: 'Am Shape - 2nd Fret' },
    // Bm barre (Em shape) at 7th fret
    { frets: [7, 9, 9, 7, 7, 7], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 7, startString: 0, endString: 5 }, baseFret: 7, name: 'Em Shape - 7th Fret' },
  ],

  // ============ DIMINISHED CHORDS ============
  'Cdim': [
    { frets: [-1, 3, 4, 2, 4, 2], fingers: [null, 2, 3, 1, 4, 1], baseFret: 1, name: 'Standard' },
    { frets: [8, -1, 10, 8, 10, -1], fingers: [1, null, 3, 1, 4, null], baseFret: 8, name: 'Higher Position' },
  ],
  'Ddim': [
    { frets: [-1, -1, 0, 1, 0, 1], fingers: [null, null, null, 1, null, 2], baseFret: 1, name: 'Open Ddim' },
    { frets: [-1, 5, 6, 4, 6, 4], fingers: [null, 2, 3, 1, 4, 1], baseFret: 4, name: 'Higher Position' },
  ],
  'Edim': [
    { frets: [0, 1, 2, 0, 2, 0], fingers: [null, 1, 2, null, 3, null], baseFret: 1, name: 'Open Edim' },
    { frets: [-1, 7, 8, 6, 8, 6], fingers: [null, 2, 3, 1, 4, 1], baseFret: 6, name: 'Higher Position' },
  ],
  'Fdim': [
    { frets: [-1, -1, 3, 4, 3, 4], fingers: [null, null, 1, 2, 1, 3], baseFret: 1, name: 'Standard' },
    { frets: [1, 2, 3, 1, 3, 1], fingers: [1, 2, 3, 1, 4, 1], barre: { fret: 1, startString: 0, endString: 5 }, baseFret: 1, name: 'Full Barre' },
  ],
  'Gdim': [
    { frets: [-1, -1, 5, 6, 5, 6], fingers: [null, null, 1, 2, 1, 3], baseFret: 5, name: 'Standard' },
    { frets: [3, 4, 5, 3, 5, 3], fingers: [1, 2, 3, 1, 4, 1], barre: { fret: 3, startString: 0, endString: 5 }, baseFret: 3, name: 'Full Barre' },
  ],
  'Adim': [
    { frets: [-1, 0, 1, 2, 1, 2], fingers: [null, null, 1, 3, 2, 4], baseFret: 1, name: 'Open Adim' },
    { frets: [5, 6, 7, 5, 7, 5], fingers: [1, 2, 3, 1, 4, 1], barre: { fret: 5, startString: 0, endString: 5 }, baseFret: 5, name: 'Full Barre' },
  ],
  'Bdim': [
    { frets: [-1, 2, 3, 4, 3, -1], fingers: [null, 1, 2, 4, 3, null], baseFret: 1, name: 'Standard' },
    { frets: [7, 8, 9, 7, 9, 7], fingers: [1, 2, 3, 1, 4, 1], barre: { fret: 7, startString: 0, endString: 5 }, baseFret: 7, name: 'Full Barre' },
  ],

  // ============ MAJOR 7TH CHORDS ============
  'Cmaj7': [
    { frets: [-1, 3, 2, 0, 0, 0], fingers: [null, 3, 2, null, null, null], baseFret: 1, name: 'Open Cmaj7' },
    { frets: [-1, 3, 5, 4, 5, 3], fingers: [null, 1, 3, 2, 4, 1], barre: { fret: 3, startString: 1, endString: 5 }, baseFret: 3, name: 'A Shape - 3rd Fret' },
    { frets: [8, 10, 9, 9, 8, -1], fingers: [1, 4, 2, 3, 1, null], baseFret: 8, name: 'E Shape - 8th Fret' },
  ],
  'Dmaj7': [
    { frets: [-1, -1, 0, 2, 2, 2], fingers: [null, null, null, 1, 2, 3], baseFret: 1, name: 'Open Dmaj7' },
    { frets: [-1, 5, 7, 6, 7, 5], fingers: [null, 1, 3, 2, 4, 1], barre: { fret: 5, startString: 1, endString: 5 }, baseFret: 5, name: 'A Shape - 5th Fret' },
  ],
  'Emaj7': [
    { frets: [0, 2, 1, 1, 0, 0], fingers: [null, 3, 1, 2, null, null], baseFret: 1, name: 'Open Emaj7' },
    { frets: [-1, 7, 9, 8, 9, 7], fingers: [null, 1, 3, 2, 4, 1], barre: { fret: 7, startString: 1, endString: 5 }, baseFret: 7, name: 'A Shape - 7th Fret' },
  ],
  'Fmaj7': [
    { frets: [-1, -1, 3, 2, 1, 0], fingers: [null, null, 3, 2, 1, null], baseFret: 1, name: 'Easy Fmaj7' },
    { frets: [1, -1, 2, 2, 1, 0], fingers: [1, null, 3, 4, 2, null], baseFret: 1, name: 'Root Position' },
    { frets: [-1, 8, 10, 9, 10, 8], fingers: [null, 1, 3, 2, 4, 1], barre: { fret: 8, startString: 1, endString: 5 }, baseFret: 8, name: 'A Shape - 8th Fret' },
  ],
  'Gmaj7': [
    { frets: [3, 2, 0, 0, 0, 2], fingers: [3, 1, null, null, null, 2], baseFret: 1, name: 'Open Gmaj7' },
    { frets: [3, -1, 4, 4, 3, -1], fingers: [1, null, 3, 4, 2, null], baseFret: 3, name: 'Compact' },
  ],
  'Amaj7': [
    { frets: [-1, 0, 2, 1, 2, 0], fingers: [null, null, 2, 1, 3, null], baseFret: 1, name: 'Open Amaj7' },
    { frets: [5, 7, 6, 6, 5, -1], fingers: [1, 4, 2, 3, 1, null], baseFret: 5, name: 'E Shape - 5th Fret' },
  ],
  'Bmaj7': [
    { frets: [-1, 2, 4, 3, 4, 2], fingers: [null, 1, 3, 2, 4, 1], barre: { fret: 2, startString: 1, endString: 5 }, baseFret: 2, name: 'A Shape - 2nd Fret' },
    { frets: [7, 9, 8, 8, 7, -1], fingers: [1, 4, 2, 3, 1, null], baseFret: 7, name: 'E Shape - 7th Fret' },
  ],

  // ============ MINOR 7TH CHORDS ============
  'Cm7': [
    { frets: [-1, 3, 5, 3, 4, 3], fingers: [null, 1, 3, 1, 2, 1], barre: { fret: 3, startString: 1, endString: 5 }, baseFret: 3, name: 'Am7 Shape - 3rd Fret' },
    { frets: [8, 10, 8, 8, 8, 8], fingers: [1, 3, 1, 1, 1, 1], barre: { fret: 8, startString: 0, endString: 5 }, baseFret: 8, name: 'Em7 Shape - 8th Fret' },
  ],
  'Dm7': [
    { frets: [-1, -1, 0, 2, 1, 1], fingers: [null, null, null, 2, 1, 1], baseFret: 1, name: 'Open Dm7' },
    { frets: [-1, 5, 7, 5, 6, 5], fingers: [null, 1, 3, 1, 2, 1], barre: { fret: 5, startString: 1, endString: 5 }, baseFret: 5, name: 'Am7 Shape - 5th Fret' },
  ],
  'Em7': [
    { frets: [0, 2, 0, 0, 0, 0], fingers: [null, 2, null, null, null, null], baseFret: 1, name: 'Open Em7' },
    { frets: [0, 2, 2, 0, 3, 0], fingers: [null, 1, 2, null, 3, null], baseFret: 1, name: 'Open Em7 (alt)' },
    { frets: [-1, 7, 9, 7, 8, 7], fingers: [null, 1, 3, 1, 2, 1], barre: { fret: 7, startString: 1, endString: 5 }, baseFret: 7, name: 'Am7 Shape - 7th Fret' },
  ],
  'Fm7': [
    { frets: [1, 3, 1, 1, 1, 1], fingers: [1, 3, 1, 1, 1, 1], barre: { fret: 1, startString: 0, endString: 5 }, baseFret: 1, name: 'Em7 Shape Barre' },
    { frets: [-1, 8, 10, 8, 9, 8], fingers: [null, 1, 3, 1, 2, 1], barre: { fret: 8, startString: 1, endString: 5 }, baseFret: 8, name: 'Am7 Shape - 8th Fret' },
  ],
  'Gm7': [
    { frets: [3, 5, 3, 3, 3, 3], fingers: [1, 3, 1, 1, 1, 1], barre: { fret: 3, startString: 0, endString: 5 }, baseFret: 3, name: 'Em7 Shape - 3rd Fret' },
    { frets: [-1, 10, 12, 10, 11, 10], fingers: [null, 1, 3, 1, 2, 1], barre: { fret: 10, startString: 1, endString: 5 }, baseFret: 10, name: 'Am7 Shape - 10th Fret' },
    { frets: [-1, -1, 3, 3, 3, 3], fingers: [null, null, 1, 1, 1, 1], barre: { fret: 3, startString: 2, endString: 5 }, baseFret: 3, name: 'Easy Gm7' },
  ],
  'Am7': [
    { frets: [-1, 0, 2, 0, 1, 0], fingers: [null, null, 2, null, 1, null], baseFret: 1, name: 'Open Am7' },
    { frets: [5, 7, 5, 5, 5, 5], fingers: [1, 3, 1, 1, 1, 1], barre: { fret: 5, startString: 0, endString: 5 }, baseFret: 5, name: 'Em7 Shape - 5th Fret' },
  ],
  'Bm7': [
    { frets: [-1, 2, 4, 2, 3, 2], fingers: [null, 1, 3, 1, 2, 1], barre: { fret: 2, startString: 1, endString: 5 }, baseFret: 2, name: 'Am7 Shape - 2nd Fret' },
    { frets: [7, 9, 7, 7, 7, 7], fingers: [1, 3, 1, 1, 1, 1], barre: { fret: 7, startString: 0, endString: 5 }, baseFret: 7, name: 'Em7 Shape - 7th Fret' },
    { frets: [-1, 2, 0, 2, 0, 2], fingers: [null, 1, null, 2, null, 3], baseFret: 1, name: 'Open Bm7 (partial)' },
  ],

  // ============ DOMINANT 7TH CHORDS ============
  'C7': [
    { frets: [-1, 3, 2, 3, 1, 0], fingers: [null, 3, 2, 4, 1, null], baseFret: 1, name: 'Open C7' },
    { frets: [8, 10, 8, 9, 8, 8], fingers: [1, 3, 1, 2, 1, 1], barre: { fret: 8, startString: 0, endString: 5 }, baseFret: 8, name: 'E7 Shape - 8th Fret' },
    { frets: [-1, 3, 5, 3, 5, 3], fingers: [null, 1, 2, 1, 3, 1], barre: { fret: 3, startString: 1, endString: 5 }, baseFret: 3, name: 'A7 Shape - 3rd Fret' },
  ],
  'D7': [
    { frets: [-1, -1, 0, 2, 1, 2], fingers: [null, null, null, 2, 1, 3], baseFret: 1, name: 'Open D7' },
    { frets: [-1, 5, 7, 5, 7, 5], fingers: [null, 1, 2, 1, 3, 1], barre: { fret: 5, startString: 1, endString: 5 }, baseFret: 5, name: 'A7 Shape - 5th Fret' },
  ],
  'E7': [
    { frets: [0, 2, 0, 1, 0, 0], fingers: [null, 2, null, 1, null, null], baseFret: 1, name: 'Open E7' },
    { frets: [0, 2, 2, 1, 3, 0], fingers: [null, 1, 2, 1, 3, null], baseFret: 1, name: 'Open E7 (alt)' },
    { frets: [-1, 7, 9, 7, 9, 7], fingers: [null, 1, 2, 1, 3, 1], barre: { fret: 7, startString: 1, endString: 5 }, baseFret: 7, name: 'A7 Shape - 7th Fret' },
  ],
  'F7': [
    { frets: [1, 3, 1, 2, 1, 1], fingers: [1, 3, 1, 2, 1, 1], barre: { fret: 1, startString: 0, endString: 5 }, baseFret: 1, name: 'E7 Shape Barre' },
    { frets: [-1, 8, 10, 8, 10, 8], fingers: [null, 1, 2, 1, 3, 1], barre: { fret: 8, startString: 1, endString: 5 }, baseFret: 8, name: 'A7 Shape - 8th Fret' },
  ],
  'G7': [
    { frets: [3, 2, 0, 0, 0, 1], fingers: [3, 2, null, null, null, 1], baseFret: 1, name: 'Open G7' },
    { frets: [3, 5, 3, 4, 3, 3], fingers: [1, 3, 1, 2, 1, 1], barre: { fret: 3, startString: 0, endString: 5 }, baseFret: 3, name: 'E7 Shape - 3rd Fret' },
    { frets: [-1, 10, 12, 10, 12, 10], fingers: [null, 1, 2, 1, 3, 1], barre: { fret: 10, startString: 1, endString: 5 }, baseFret: 10, name: 'A7 Shape - 10th Fret' },
  ],
  'A7': [
    { frets: [-1, 0, 2, 0, 2, 0], fingers: [null, null, 1, null, 2, null], baseFret: 1, name: 'Open A7' },
    { frets: [5, 7, 5, 6, 5, 5], fingers: [1, 3, 1, 2, 1, 1], barre: { fret: 5, startString: 0, endString: 5 }, baseFret: 5, name: 'E7 Shape - 5th Fret' },
  ],
  'B7': [
    { frets: [-1, 2, 1, 2, 0, 2], fingers: [null, 2, 1, 3, null, 4], baseFret: 1, name: 'Open B7' },
    { frets: [-1, 2, 4, 2, 4, 2], fingers: [null, 1, 2, 1, 3, 1], barre: { fret: 2, startString: 1, endString: 5 }, baseFret: 2, name: 'A7 Shape - 2nd Fret' },
    { frets: [7, 9, 7, 8, 7, 7], fingers: [1, 3, 1, 2, 1, 1], barre: { fret: 7, startString: 0, endString: 5 }, baseFret: 7, name: 'E7 Shape - 7th Fret' },
  ],
};

/**
 * Get all chord voicings for a given chord
 * @param {string} root - Root note (e.g., 'C', 'F#')
 * @param {string} chordType - Type of chord ('major', 'minor', 'diminished', 'major7', 'minor7', 'dominant7')
 * @returns {Array} Array of voicing data or empty array if not found
 */
export function getChordVoicings(root, chordType) {
  let chordKey = root;

  // Map chord types to suffixes
  const suffixMap = {
    'major': '',
    'minor': 'm',
    'diminished': 'dim',
    'major7': 'maj7',
    'minor7': 'm7',
    'dominant7': '7',
  };

  const suffix = suffixMap[chordType] || '';
  chordKey = root + suffix;

  // Try the chord key directly
  if (CHORD_VOICINGS[chordKey]) {
    return CHORD_VOICINGS[chordKey];
  }

  // Try enharmonic equivalents
  const enharmonics = {
    'C#': 'Db', 'Db': 'C#',
    'D#': 'Eb', 'Eb': 'D#',
    'F#': 'Gb', 'Gb': 'F#',
    'G#': 'Ab', 'Ab': 'G#',
    'A#': 'Bb', 'Bb': 'A#',
  };

  if (enharmonics[root]) {
    const altKey = enharmonics[root] + suffix;
    if (CHORD_VOICINGS[altKey]) {
      return CHORD_VOICINGS[altKey];
    }
  }

  return [];
}

/**
 * Get a single chord voicing (backwards compatible)
 * @param {string} root - Root note (e.g., 'C', 'F#')
 * @param {string} chordType - Type of chord
 * @param {number} voicingIndex - Index of voicing to return (default 0 = first/open)
 * @returns {Object|null} Voicing data or null if not found
 */
export function getChordVoicing(root, chordType, voicingIndex = 0) {
  const voicings = getChordVoicings(root, chordType);
  if (voicings.length > 0) {
    return voicings[Math.min(voicingIndex, voicings.length - 1)];
  }
  return null;
}

/**
 * Get display frets for rendering (normalize to show 4-5 frets)
 * @param {Object} voicing - Chord voicing data
 * @returns {Object} Display data with frets and positions
 */
export function getDisplayVoicing(voicing) {
  const { frets, fingers, barre, baseFret, name } = voicing;

  // Find the range of frets used (excluding open and muted)
  const playedFrets = frets.filter(f => f > 0);
  const minFret = playedFrets.length > 0 ? Math.min(...playedFrets) : 1;
  const maxFret = playedFrets.length > 0 ? Math.max(...playedFrets) : 1;

  // Determine if we need to show a position marker
  const showPosition = minFret > 1;
  const displayBaseFret = showPosition ? minFret : 1;

  // Normalize frets to display range
  const displayFrets = frets.map(f => {
    if (f <= 0) return f; // Keep muted (-1) and open (0)
    return f - displayBaseFret + 1;
  });

  return {
    frets: displayFrets,
    originalFrets: frets,
    fingers,
    barre: barre ? {
      ...barre,
      fret: barre.fret - displayBaseFret + 1,
    } : null,
    baseFret: displayBaseFret,
    showPosition,
    numFrets: Math.max(4, maxFret - minFret + 2),
    name: name || 'Standard',
  };
}

export default {
  CHORD_VOICINGS,
  getChordVoicings,
  getChordVoicing,
  getDisplayVoicing,
};
