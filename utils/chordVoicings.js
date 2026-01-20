// Guitar Chord Voicings Database - Comprehensive CAGED System Coverage
// Multiple voicings per chord covering all 5 CAGED positions across the neck
// Format: array of fret numbers for each string [E, A, D, G, B, e]
// -1 = muted (X), 0 = open string (O)
// Finger numbers: 1 = index, 2 = middle, 3 = ring, 4 = pinky, T = thumb
// Barre: { fret, startString, endString }
// Position: The fret number where the root note is located

export const CHORD_VOICINGS = {
  // ============ MAJOR CHORDS ============
  'C': [
    // C Shape - Open Position
    { frets: [-1, 3, 2, 0, 1, 0], fingers: [null, 3, 2, null, 1, null], baseFret: 1, name: 'C Shape - Open', position: 3 },
    // C/G (first inversion)
    { frets: [3, 3, 2, 0, 1, 0], fingers: [3, 4, 2, null, 1, null], baseFret: 1, name: 'C/G', position: 3 },
    // A Shape - 3rd Fret
    { frets: [-1, 3, 5, 5, 5, 3], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 3, startString: 1, endString: 5 }, baseFret: 3, name: 'A Shape - 3rd Fret', position: 3 },
    // Partial C - 3rd Fret (easy)
    { frets: [-1, 3, 5, 5, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 3, name: 'Partial C - 3rd Fret', position: 3 },
    // G Shape - 5th Fret
    { frets: [-1, -1, 5, 5, 5, 8], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 5, startString: 2, endString: 4 }, baseFret: 5, name: 'G Shape - 5th Fret', position: 5 },
    // Partial C - 5th Fret
    { frets: [-1, -1, 5, 5, 6, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 5, name: 'Partial C - 5th Fret', position: 5 },
    // E Shape - 8th Fret
    { frets: [8, 10, 10, 9, 8, 8], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 8, startString: 0, endString: 5 }, baseFret: 8, name: 'E Shape - 8th Fret', position: 8 },
    // Partial E - 8th Fret
    { frets: [8, 10, 10, 9, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 8, name: 'Partial E - 8th Fret', position: 8 },
    // D Shape - 10th Fret
    { frets: [-1, -1, 10, 12, 13, 12], fingers: [null, null, 1, 3, 4, 2], baseFret: 10, name: 'D Shape - 10th Fret', position: 10 },
    // Partial D - 10th Fret
    { frets: [-1, -1, 10, 12, 13, -1], fingers: [null, null, 1, 3, 4, null], baseFret: 10, name: 'Partial D - 10th Fret', position: 10 },
    // C Shape - 12th Fret (octave)
    { frets: [-1, 15, 14, 12, 13, 12], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 12, startString: 3, endString: 5 }, baseFret: 12, name: 'C Shape - 12th Fret', position: 15 },
    // Partial C - 13th Fret
    { frets: [-1, -1, -1, 12, 13, 12], fingers: [null, null, null, 1, 3, 2], baseFret: 12, name: 'Partial C - 13th Fret', position: 15 },
    // High A Shape - 15th Fret
    { frets: [-1, 15, -1, -1, -1, 15], fingers: [null, 1, null, null, null, 1], baseFret: 15, name: 'High A Shape - 15th Fret', position: 15 },
  ],
  'C#': [
    // C Shape - 1st Fret
    { frets: [-1, 4, 3, 1, 2, 1], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 1, startString: 3, endString: 5 }, baseFret: 1, name: 'C Shape - 1st Fret', position: 4 },
    // Partial C - 1st Fret
    { frets: [-1, -1, 3, 1, 2, 1], fingers: [null, null, 3, 1, 2, 1], baseFret: 1, name: 'Partial C - 1st Fret', position: 4 },
    // A Shape - 4th Fret
    { frets: [-1, 4, 6, 6, 6, 4], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 4, startString: 1, endString: 5 }, baseFret: 4, name: 'A Shape - 4th Fret', position: 4 },
    // Partial A - 4th Fret
    { frets: [-1, 4, 6, 6, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 4, name: 'Partial A - 4th Fret', position: 4 },
    // G Shape - 6th Fret
    { frets: [-1, -1, 6, 6, 6, 9], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 6, startString: 2, endString: 4 }, baseFret: 6, name: 'G Shape - 6th Fret', position: 6 },
    // Partial G - 6th Fret
    { frets: [-1, -1, 6, 6, 7, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 6, name: 'Partial G - 6th Fret', position: 6 },
    // E Shape - 9th Fret
    { frets: [9, 11, 11, 10, 9, 9], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 9, startString: 0, endString: 5 }, baseFret: 9, name: 'E Shape - 9th Fret', position: 9 },
    // Partial E - 9th Fret
    { frets: [9, 11, 11, 10, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 9, name: 'Partial E - 9th Fret', position: 9 },
    // D Shape - 11th Fret
    { frets: [-1, -1, 11, 13, 14, 13], fingers: [null, null, 1, 3, 4, 2], baseFret: 11, name: 'D Shape - 11th Fret', position: 11 },
    // Partial D - 11th Fret
    { frets: [-1, -1, 11, 13, 14, -1], fingers: [null, null, 1, 3, 4, null], baseFret: 11, name: 'Partial D - 11th Fret', position: 11 },
    // C Shape - 13th Fret
    { frets: [-1, -1, 15, 13, 14, 13], fingers: [null, null, 3, 1, 2, 1], barre: { fret: 13, startString: 3, endString: 5 }, baseFret: 13, name: 'C Shape - 13th Fret', position: 16 },
  ],
  'Db': [
    // C Shape - 1st Fret
    { frets: [-1, 4, 3, 1, 2, 1], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 1, startString: 3, endString: 5 }, baseFret: 1, name: 'C Shape - 1st Fret', position: 4 },
    // Partial C - 1st Fret
    { frets: [-1, -1, 3, 1, 2, 1], fingers: [null, null, 3, 1, 2, 1], baseFret: 1, name: 'Partial C - 1st Fret', position: 4 },
    // A Shape - 4th Fret
    { frets: [-1, 4, 6, 6, 6, 4], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 4, startString: 1, endString: 5 }, baseFret: 4, name: 'A Shape - 4th Fret', position: 4 },
    // Partial A - 4th Fret
    { frets: [-1, 4, 6, 6, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 4, name: 'Partial A - 4th Fret', position: 4 },
    // G Shape - 6th Fret
    { frets: [-1, -1, 6, 6, 6, 9], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 6, startString: 2, endString: 4 }, baseFret: 6, name: 'G Shape - 6th Fret', position: 6 },
    // Partial G - 6th Fret
    { frets: [-1, -1, 6, 6, 7, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 6, name: 'Partial G - 6th Fret', position: 6 },
    // E Shape - 9th Fret
    { frets: [9, 11, 11, 10, 9, 9], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 9, startString: 0, endString: 5 }, baseFret: 9, name: 'E Shape - 9th Fret', position: 9 },
    // Partial E - 9th Fret
    { frets: [9, 11, 11, 10, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 9, name: 'Partial E - 9th Fret', position: 9 },
    // D Shape - 11th Fret
    { frets: [-1, -1, 11, 13, 14, 13], fingers: [null, null, 1, 3, 4, 2], baseFret: 11, name: 'D Shape - 11th Fret', position: 11 },
    // Partial D - 11th Fret
    { frets: [-1, -1, 11, 13, 14, -1], fingers: [null, null, 1, 3, 4, null], baseFret: 11, name: 'Partial D - 11th Fret', position: 11 },
    // C Shape - 13th Fret
    { frets: [-1, -1, 15, 13, 14, 13], fingers: [null, null, 3, 1, 2, 1], barre: { fret: 13, startString: 3, endString: 5 }, baseFret: 13, name: 'C Shape - 13th Fret', position: 16 },
  ],
  'D': [
    // Open D
    { frets: [-1, -1, 0, 2, 3, 2], fingers: [null, null, null, 1, 3, 2], baseFret: 1, name: 'Open D', position: 5 },
    // D/F# (first inversion)
    { frets: [2, -1, 0, 2, 3, 2], fingers: [1, null, null, 2, 4, 3], baseFret: 1, name: 'D/F#', position: 2 },
    // C Shape - 2nd Fret
    { frets: [-1, 5, 4, 2, 3, 2], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 2, startString: 3, endString: 5 }, baseFret: 2, name: 'C Shape - 2nd Fret', position: 5 },
    // Partial C - 2nd Fret
    { frets: [-1, -1, 4, 2, 3, 2], fingers: [null, null, 3, 1, 2, 1], baseFret: 2, name: 'Partial C - 2nd Fret', position: 5 },
    // A Shape - 5th Fret
    { frets: [-1, 5, 7, 7, 7, 5], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 5, startString: 1, endString: 5 }, baseFret: 5, name: 'A Shape - 5th Fret', position: 5 },
    // Partial A - 5th Fret
    { frets: [-1, 5, 7, 7, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 5, name: 'Partial A - 5th Fret', position: 5 },
    // G Shape - 7th Fret
    { frets: [-1, -1, 7, 7, 7, 10], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 7, startString: 2, endString: 4 }, baseFret: 7, name: 'G Shape - 7th Fret', position: 7 },
    // Partial G - 7th Fret
    { frets: [-1, -1, 7, 7, 8, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 7, name: 'Partial G - 7th Fret', position: 7 },
    // E Shape - 10th Fret
    { frets: [10, 12, 12, 11, 10, 10], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 10, startString: 0, endString: 5 }, baseFret: 10, name: 'E Shape - 10th Fret', position: 10 },
    // Partial E - 10th Fret
    { frets: [10, 12, 12, 11, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 10, name: 'Partial E - 10th Fret', position: 10 },
    // D Shape - 12th Fret
    { frets: [-1, -1, 12, 14, 15, 14], fingers: [null, null, 1, 3, 4, 2], baseFret: 12, name: 'D Shape - 12th Fret', position: 12 },
    // Partial D - 12th Fret
    { frets: [-1, -1, 12, 14, 15, -1], fingers: [null, null, 1, 3, 4, null], baseFret: 12, name: 'Partial D - 12th Fret', position: 12 },
    // C Shape - 14th Fret
    { frets: [-1, -1, -1, 14, 15, 14], fingers: [null, null, null, 1, 3, 2], baseFret: 14, name: 'C Shape - 14th Fret', position: 17 },
  ],
  'D#': [
    // D Shape - 1st Fret
    { frets: [-1, -1, 1, 3, 4, 3], fingers: [null, null, 1, 2, 4, 3], baseFret: 1, name: 'D Shape - 1st Fret', position: 1 },
    // C Shape - 3rd Fret
    { frets: [-1, 6, 5, 3, 4, 3], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 3, startString: 3, endString: 5 }, baseFret: 3, name: 'C Shape - 3rd Fret', position: 6 },
    // Partial C - 3rd Fret
    { frets: [-1, -1, 5, 3, 4, 3], fingers: [null, null, 3, 1, 2, 1], baseFret: 3, name: 'Partial C - 3rd Fret', position: 6 },
    // A Shape - 6th Fret
    { frets: [-1, 6, 8, 8, 8, 6], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 6, startString: 1, endString: 5 }, baseFret: 6, name: 'A Shape - 6th Fret', position: 6 },
    // Partial A - 6th Fret
    { frets: [-1, 6, 8, 8, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 6, name: 'Partial A - 6th Fret', position: 6 },
    // G Shape - 8th Fret
    { frets: [-1, -1, 8, 8, 8, 11], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 8, startString: 2, endString: 4 }, baseFret: 8, name: 'G Shape - 8th Fret', position: 8 },
    // Partial G - 8th Fret
    { frets: [-1, -1, 8, 8, 9, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 8, name: 'Partial G - 8th Fret', position: 8 },
    // E Shape - 11th Fret
    { frets: [11, 13, 13, 12, 11, 11], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 11, startString: 0, endString: 5 }, baseFret: 11, name: 'E Shape - 11th Fret', position: 11 },
    // Partial E - 11th Fret
    { frets: [11, 13, 13, 12, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 11, name: 'Partial E - 11th Fret', position: 11 },
    // D Shape - 13th Fret
    { frets: [-1, -1, 13, 15, -1, -1], fingers: [null, null, 1, 3, null, null], baseFret: 13, name: 'Partial D - 13th Fret', position: 13 },
  ],
  'Eb': [
    // D Shape - 1st Fret
    { frets: [-1, -1, 1, 3, 4, 3], fingers: [null, null, 1, 2, 4, 3], baseFret: 1, name: 'D Shape - 1st Fret', position: 1 },
    // C Shape - 3rd Fret
    { frets: [-1, 6, 5, 3, 4, 3], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 3, startString: 3, endString: 5 }, baseFret: 3, name: 'C Shape - 3rd Fret', position: 6 },
    // Partial C - 3rd Fret
    { frets: [-1, -1, 5, 3, 4, 3], fingers: [null, null, 3, 1, 2, 1], baseFret: 3, name: 'Partial C - 3rd Fret', position: 6 },
    // A Shape - 6th Fret
    { frets: [-1, 6, 8, 8, 8, 6], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 6, startString: 1, endString: 5 }, baseFret: 6, name: 'A Shape - 6th Fret', position: 6 },
    // Partial A - 6th Fret
    { frets: [-1, 6, 8, 8, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 6, name: 'Partial A - 6th Fret', position: 6 },
    // G Shape - 8th Fret
    { frets: [-1, -1, 8, 8, 8, 11], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 8, startString: 2, endString: 4 }, baseFret: 8, name: 'G Shape - 8th Fret', position: 8 },
    // Partial G - 8th Fret
    { frets: [-1, -1, 8, 8, 9, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 8, name: 'Partial G - 8th Fret', position: 8 },
    // E Shape - 11th Fret
    { frets: [11, 13, 13, 12, 11, 11], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 11, startString: 0, endString: 5 }, baseFret: 11, name: 'E Shape - 11th Fret', position: 11 },
    // Partial E - 11th Fret
    { frets: [11, 13, 13, 12, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 11, name: 'Partial E - 11th Fret', position: 11 },
    // D Shape - 13th Fret
    { frets: [-1, -1, 13, 15, -1, -1], fingers: [null, null, 1, 3, null, null], baseFret: 13, name: 'Partial D - 13th Fret', position: 13 },
  ],
  'E': [
    // Open E (most common)
    { frets: [0, 2, 2, 1, 0, 0], fingers: [null, 2, 3, 1, null, null], baseFret: 1, name: 'Open E', position: 0 },
    // D Shape - 2nd Fret
    { frets: [-1, -1, 2, 4, 5, 4], fingers: [null, null, 1, 2, 4, 3], baseFret: 2, name: 'D Shape - 2nd Fret', position: 2 },
    // C Shape - 4th Fret
    { frets: [-1, 7, 6, 4, 5, 4], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 4, startString: 3, endString: 5 }, baseFret: 4, name: 'C Shape - 4th Fret', position: 7 },
    // Partial C - 4th Fret
    { frets: [-1, -1, 6, 4, 5, 4], fingers: [null, null, 3, 1, 2, 1], baseFret: 4, name: 'Partial C - 4th Fret', position: 7 },
    // A Shape - 7th Fret
    { frets: [-1, 7, 9, 9, 9, 7], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 7, startString: 1, endString: 5 }, baseFret: 7, name: 'A Shape - 7th Fret', position: 7 },
    // Partial A - 7th Fret
    { frets: [-1, 7, 9, 9, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 7, name: 'Partial A - 7th Fret', position: 7 },
    // G Shape - 9th Fret
    { frets: [-1, -1, 9, 9, 9, 12], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 9, startString: 2, endString: 4 }, baseFret: 9, name: 'G Shape - 9th Fret', position: 9 },
    // Partial G - 9th Fret
    { frets: [-1, -1, 9, 9, 10, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 9, name: 'Partial G - 9th Fret', position: 9 },
    // E Shape - 12th Fret (octave)
    { frets: [12, 14, 14, 13, 12, 12], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 12, startString: 0, endString: 5 }, baseFret: 12, name: 'E Shape - 12th Fret', position: 12 },
    // Partial E - 12th Fret
    { frets: [12, 14, 14, 13, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 12, name: 'Partial E - 12th Fret', position: 12 },
    // D Shape - 14th Fret
    { frets: [-1, -1, 14, -1, -1, -1], fingers: [null, null, 1, null, null, null], baseFret: 14, name: 'Partial D - 14th Fret', position: 14 },
  ],
  'F': [
    // F barre (E shape) at 1st fret - most common
    { frets: [1, 3, 3, 2, 1, 1], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 1, startString: 0, endString: 5 }, baseFret: 1, name: 'E Shape Barre', position: 1 },
    // Partial F (no barre, easier)
    { frets: [-1, -1, 3, 2, 1, 1], fingers: [null, null, 3, 2, 1, 1], barre: { fret: 1, startString: 4, endString: 5 }, baseFret: 1, name: 'Easy F (4 strings)', position: 1 },
    // D Shape - 3rd Fret
    { frets: [-1, -1, 3, 5, 6, 5], fingers: [null, null, 1, 2, 4, 3], baseFret: 3, name: 'D Shape - 3rd Fret', position: 3 },
    // C Shape - 5th Fret
    { frets: [-1, 8, 7, 5, 6, 5], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 5, startString: 3, endString: 5 }, baseFret: 5, name: 'C Shape - 5th Fret', position: 8 },
    // Partial C - 5th Fret
    { frets: [-1, -1, 7, 5, 6, 5], fingers: [null, null, 3, 1, 2, 1], baseFret: 5, name: 'Partial C - 5th Fret', position: 8 },
    // A Shape - 8th Fret
    { frets: [-1, 8, 10, 10, 10, 8], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 8, startString: 1, endString: 5 }, baseFret: 8, name: 'A Shape - 8th Fret', position: 8 },
    // Partial A - 8th Fret
    { frets: [-1, 8, 10, 10, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 8, name: 'Partial A - 8th Fret', position: 8 },
    // G Shape - 10th Fret
    { frets: [-1, -1, 10, 10, 10, 13], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 10, startString: 2, endString: 4 }, baseFret: 10, name: 'G Shape - 10th Fret', position: 10 },
    // Partial G - 10th Fret
    { frets: [-1, -1, 10, 10, 11, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 10, name: 'Partial G - 10th Fret', position: 10 },
    // E Shape - 13th Fret
    { frets: [13, 15, 15, 14, 13, 13], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 13, startString: 0, endString: 5 }, baseFret: 13, name: 'E Shape - 13th Fret', position: 13 },
    // Partial E - 13th Fret
    { frets: [13, 15, 15, 14, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 13, name: 'Partial E - 13th Fret', position: 13 },
  ],
  'F#': [
    // E Shape - 2nd Fret
    { frets: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 2, startString: 0, endString: 5 }, baseFret: 2, name: 'E Shape - 2nd Fret', position: 2 },
    // Partial E - 2nd Fret
    { frets: [2, 4, 4, 3, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 2, name: 'Partial E - 2nd Fret', position: 2 },
    // D Shape - 4th Fret
    { frets: [-1, -1, 4, 6, 7, 6], fingers: [null, null, 1, 2, 4, 3], baseFret: 4, name: 'D Shape - 4th Fret', position: 4 },
    // C Shape - 6th Fret
    { frets: [-1, 9, 8, 6, 7, 6], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 6, startString: 3, endString: 5 }, baseFret: 6, name: 'C Shape - 6th Fret', position: 9 },
    // Partial C - 6th Fret
    { frets: [-1, -1, 8, 6, 7, 6], fingers: [null, null, 3, 1, 2, 1], baseFret: 6, name: 'Partial C - 6th Fret', position: 9 },
    // A Shape - 9th Fret
    { frets: [-1, 9, 11, 11, 11, 9], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 9, startString: 1, endString: 5 }, baseFret: 9, name: 'A Shape - 9th Fret', position: 9 },
    // Partial A - 9th Fret
    { frets: [-1, 9, 11, 11, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 9, name: 'Partial A - 9th Fret', position: 9 },
    // G Shape - 11th Fret
    { frets: [-1, -1, 11, 11, 11, 14], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 11, startString: 2, endString: 4 }, baseFret: 11, name: 'G Shape - 11th Fret', position: 11 },
    // Partial G - 11th Fret
    { frets: [-1, -1, 11, 11, 12, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 11, name: 'Partial G - 11th Fret', position: 11 },
    // E Shape - 14th Fret
    { frets: [14, -1, -1, -1, -1, 14], fingers: [1, null, null, null, null, 1], baseFret: 14, name: 'Partial E - 14th Fret', position: 14 },
  ],
  'Gb': [
    // E Shape - 2nd Fret
    { frets: [2, 4, 4, 3, 2, 2], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 2, startString: 0, endString: 5 }, baseFret: 2, name: 'E Shape - 2nd Fret', position: 2 },
    // Partial E - 2nd Fret
    { frets: [2, 4, 4, 3, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 2, name: 'Partial E - 2nd Fret', position: 2 },
    // D Shape - 4th Fret
    { frets: [-1, -1, 4, 6, 7, 6], fingers: [null, null, 1, 2, 4, 3], baseFret: 4, name: 'D Shape - 4th Fret', position: 4 },
    // C Shape - 6th Fret
    { frets: [-1, 9, 8, 6, 7, 6], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 6, startString: 3, endString: 5 }, baseFret: 6, name: 'C Shape - 6th Fret', position: 9 },
    // Partial C - 6th Fret
    { frets: [-1, -1, 8, 6, 7, 6], fingers: [null, null, 3, 1, 2, 1], baseFret: 6, name: 'Partial C - 6th Fret', position: 9 },
    // A Shape - 9th Fret
    { frets: [-1, 9, 11, 11, 11, 9], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 9, startString: 1, endString: 5 }, baseFret: 9, name: 'A Shape - 9th Fret', position: 9 },
    // Partial A - 9th Fret
    { frets: [-1, 9, 11, 11, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 9, name: 'Partial A - 9th Fret', position: 9 },
    // G Shape - 11th Fret
    { frets: [-1, -1, 11, 11, 11, 14], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 11, startString: 2, endString: 4 }, baseFret: 11, name: 'G Shape - 11th Fret', position: 11 },
    // Partial G - 11th Fret
    { frets: [-1, -1, 11, 11, 12, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 11, name: 'Partial G - 11th Fret', position: 11 },
  ],
  'G': [
    // Open G (most common)
    { frets: [3, 2, 0, 0, 0, 3], fingers: [2, 1, null, null, null, 3], baseFret: 1, name: 'Open G', position: 3 },
    // Open G (4-finger version)
    { frets: [3, 2, 0, 0, 3, 3], fingers: [2, 1, null, null, 3, 4], baseFret: 1, name: 'Open G (4-finger)', position: 3 },
    // E Shape - 3rd Fret
    { frets: [3, 5, 5, 4, 3, 3], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 3, startString: 0, endString: 5 }, baseFret: 3, name: 'E Shape - 3rd Fret', position: 3 },
    // Partial E - 3rd Fret
    { frets: [3, 5, 5, 4, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 3, name: 'Partial E - 3rd Fret', position: 3 },
    // D Shape - 5th Fret
    { frets: [-1, -1, 5, 7, 8, 7], fingers: [null, null, 1, 2, 4, 3], baseFret: 5, name: 'D Shape - 5th Fret', position: 5 },
    // C Shape - 7th Fret
    { frets: [-1, 10, 9, 7, 8, 7], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 7, startString: 3, endString: 5 }, baseFret: 7, name: 'C Shape - 7th Fret', position: 10 },
    // Partial C - 7th Fret
    { frets: [-1, -1, 9, 7, 8, 7], fingers: [null, null, 3, 1, 2, 1], baseFret: 7, name: 'Partial C - 7th Fret', position: 10 },
    // A Shape - 10th Fret
    { frets: [-1, 10, 12, 12, 12, 10], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 10, startString: 1, endString: 5 }, baseFret: 10, name: 'A Shape - 10th Fret', position: 10 },
    // Partial A - 10th Fret
    { frets: [-1, 10, 12, 12, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 10, name: 'Partial A - 10th Fret', position: 10 },
    // G Shape - 12th Fret
    { frets: [-1, -1, 12, 12, 12, 15], fingers: [null, null, 1, 1, 1, 4], barre: { fret: 12, startString: 2, endString: 4 }, baseFret: 12, name: 'G Shape - 12th Fret', position: 12 },
    // Partial G - 12th Fret
    { frets: [-1, -1, 12, 12, 13, -1], fingers: [null, null, 1, 1, 2, null], baseFret: 12, name: 'Partial G - 12th Fret', position: 12 },
    // E Shape - 15th Fret
    { frets: [15, -1, -1, -1, 15, 15], fingers: [1, null, null, null, 2, 3], baseFret: 15, name: 'Partial E - 15th Fret', position: 15 },
  ],
  'G#': [
    // E Shape - 4th Fret
    { frets: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 4, startString: 0, endString: 5 }, baseFret: 4, name: 'E Shape - 4th Fret', position: 4 },
    // Partial E - 4th Fret
    { frets: [4, 6, 6, 5, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 4, name: 'Partial E - 4th Fret', position: 4 },
    // D Shape - 6th Fret
    { frets: [-1, -1, 6, 8, 9, 8], fingers: [null, null, 1, 2, 4, 3], baseFret: 6, name: 'D Shape - 6th Fret', position: 6 },
    // C Shape - 8th Fret
    { frets: [-1, 11, 10, 8, 9, 8], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 8, startString: 3, endString: 5 }, baseFret: 8, name: 'C Shape - 8th Fret', position: 11 },
    // Partial C - 8th Fret
    { frets: [-1, -1, 10, 8, 9, 8], fingers: [null, null, 3, 1, 2, 1], baseFret: 8, name: 'Partial C - 8th Fret', position: 11 },
    // A Shape - 11th Fret
    { frets: [-1, 11, 13, 13, 13, 11], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 11, startString: 1, endString: 5 }, baseFret: 11, name: 'A Shape - 11th Fret', position: 11 },
    // Partial A - 11th Fret
    { frets: [-1, 11, 13, 13, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 11, name: 'Partial A - 11th Fret', position: 11 },
    // G Shape - 13th Fret
    { frets: [-1, -1, 13, 13, 13, -1], fingers: [null, null, 1, 1, 1, null], barre: { fret: 13, startString: 2, endString: 4 }, baseFret: 13, name: 'Partial G - 13th Fret', position: 13 },
  ],
  'Ab': [
    // E Shape - 4th Fret
    { frets: [4, 6, 6, 5, 4, 4], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 4, startString: 0, endString: 5 }, baseFret: 4, name: 'E Shape - 4th Fret', position: 4 },
    // Partial E - 4th Fret
    { frets: [4, 6, 6, 5, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 4, name: 'Partial E - 4th Fret', position: 4 },
    // D Shape - 6th Fret
    { frets: [-1, -1, 6, 8, 9, 8], fingers: [null, null, 1, 2, 4, 3], baseFret: 6, name: 'D Shape - 6th Fret', position: 6 },
    // C Shape - 8th Fret
    { frets: [-1, 11, 10, 8, 9, 8], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 8, startString: 3, endString: 5 }, baseFret: 8, name: 'C Shape - 8th Fret', position: 11 },
    // Partial C - 8th Fret
    { frets: [-1, -1, 10, 8, 9, 8], fingers: [null, null, 3, 1, 2, 1], baseFret: 8, name: 'Partial C - 8th Fret', position: 11 },
    // A Shape - 11th Fret
    { frets: [-1, 11, 13, 13, 13, 11], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 11, startString: 1, endString: 5 }, baseFret: 11, name: 'A Shape - 11th Fret', position: 11 },
    // Partial A - 11th Fret
    { frets: [-1, 11, 13, 13, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 11, name: 'Partial A - 11th Fret', position: 11 },
    // G Shape - 13th Fret
    { frets: [-1, -1, 13, 13, 13, -1], fingers: [null, null, 1, 1, 1, null], barre: { fret: 13, startString: 2, endString: 4 }, baseFret: 13, name: 'Partial G - 13th Fret', position: 13 },
  ],
  'A': [
    // Open A (most common)
    { frets: [-1, 0, 2, 2, 2, 0], fingers: [null, null, 1, 2, 3, null], baseFret: 1, name: 'Open A', position: 0 },
    // E Shape - 5th Fret
    { frets: [5, 7, 7, 6, 5, 5], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 5, startString: 0, endString: 5 }, baseFret: 5, name: 'E Shape - 5th Fret', position: 5 },
    // Partial E - 5th Fret
    { frets: [5, 7, 7, 6, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 5, name: 'Partial E - 5th Fret', position: 5 },
    // D Shape - 7th Fret
    { frets: [-1, -1, 7, 9, 10, 9], fingers: [null, null, 1, 2, 4, 3], baseFret: 7, name: 'D Shape - 7th Fret', position: 7 },
    // C Shape - 9th Fret
    { frets: [-1, 12, 11, 9, 10, 9], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 9, startString: 3, endString: 5 }, baseFret: 9, name: 'C Shape - 9th Fret', position: 12 },
    // Partial C - 9th Fret
    { frets: [-1, -1, 11, 9, 10, 9], fingers: [null, null, 3, 1, 2, 1], baseFret: 9, name: 'Partial C - 9th Fret', position: 12 },
    // A Shape - 12th Fret (octave)
    { frets: [-1, 12, 14, 14, 14, 12], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 12, startString: 1, endString: 5 }, baseFret: 12, name: 'A Shape - 12th Fret', position: 12 },
    // Partial A - 12th Fret
    { frets: [-1, 12, 14, 14, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 12, name: 'Partial A - 12th Fret', position: 12 },
    // G Shape - 14th Fret
    { frets: [-1, -1, 14, 14, 14, -1], fingers: [null, null, 1, 1, 1, null], barre: { fret: 14, startString: 2, endString: 4 }, baseFret: 14, name: 'Partial G - 14th Fret', position: 14 },
  ],
  'A#': [
    // A Shape - 1st Fret
    { frets: [-1, 1, 3, 3, 3, 1], fingers: [null, 1, 2, 3, 4, 1], barre: { fret: 1, startString: 1, endString: 5 }, baseFret: 1, name: 'A Shape - 1st Fret', position: 1 },
    // Partial A - 1st Fret
    { frets: [-1, 1, 3, 3, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 1, name: 'Partial A - 1st Fret', position: 1 },
    // E Shape - 6th Fret
    { frets: [6, 8, 8, 7, 6, 6], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 6, startString: 0, endString: 5 }, baseFret: 6, name: 'E Shape - 6th Fret', position: 6 },
    // Partial E - 6th Fret
    { frets: [6, 8, 8, 7, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 6, name: 'Partial E - 6th Fret', position: 6 },
    // D Shape - 8th Fret
    { frets: [-1, -1, 8, 10, 11, 10], fingers: [null, null, 1, 2, 4, 3], baseFret: 8, name: 'D Shape - 8th Fret', position: 8 },
    // C Shape - 10th Fret
    { frets: [-1, 13, 12, 10, 11, 10], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 10, startString: 3, endString: 5 }, baseFret: 10, name: 'C Shape - 10th Fret', position: 13 },
    // Partial C - 10th Fret
    { frets: [-1, -1, 12, 10, 11, 10], fingers: [null, null, 3, 1, 2, 1], baseFret: 10, name: 'Partial C - 10th Fret', position: 13 },
    // A Shape - 13th Fret
    { frets: [-1, 13, 15, 15, 15, 13], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 13, startString: 1, endString: 5 }, baseFret: 13, name: 'A Shape - 13th Fret', position: 13 },
    // Partial A - 13th Fret
    { frets: [-1, 13, 15, 15, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 13, name: 'Partial A - 13th Fret', position: 13 },
  ],
  'Bb': [
    // A Shape - 1st Fret
    { frets: [-1, 1, 3, 3, 3, 1], fingers: [null, 1, 2, 3, 4, 1], barre: { fret: 1, startString: 1, endString: 5 }, baseFret: 1, name: 'A Shape - 1st Fret', position: 1 },
    // Partial A - 1st Fret
    { frets: [-1, 1, 3, 3, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 1, name: 'Partial A - 1st Fret', position: 1 },
    // E Shape - 6th Fret
    { frets: [6, 8, 8, 7, 6, 6], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 6, startString: 0, endString: 5 }, baseFret: 6, name: 'E Shape - 6th Fret', position: 6 },
    // Partial E - 6th Fret
    { frets: [6, 8, 8, 7, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 6, name: 'Partial E - 6th Fret', position: 6 },
    // D Shape - 8th Fret
    { frets: [-1, -1, 8, 10, 11, 10], fingers: [null, null, 1, 2, 4, 3], baseFret: 8, name: 'D Shape - 8th Fret', position: 8 },
    // C Shape - 10th Fret
    { frets: [-1, 13, 12, 10, 11, 10], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 10, startString: 3, endString: 5 }, baseFret: 10, name: 'C Shape - 10th Fret', position: 13 },
    // Partial C - 10th Fret
    { frets: [-1, -1, 12, 10, 11, 10], fingers: [null, null, 3, 1, 2, 1], baseFret: 10, name: 'Partial C - 10th Fret', position: 13 },
    // A Shape - 13th Fret
    { frets: [-1, 13, 15, 15, 15, 13], fingers: [null, 1, 3, 3, 3, 1], barre: { fret: 13, startString: 1, endString: 5 }, baseFret: 13, name: 'A Shape - 13th Fret', position: 13 },
    // Partial A - 13th Fret
    { frets: [-1, 13, 15, 15, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 13, name: 'Partial A - 13th Fret', position: 13 },
  ],
  'B': [
    // A Shape - 2nd Fret
    { frets: [-1, 2, 4, 4, 4, 2], fingers: [null, 1, 2, 3, 4, 1], barre: { fret: 2, startString: 1, endString: 5 }, baseFret: 2, name: 'A Shape - 2nd Fret', position: 2 },
    // Partial A - 2nd Fret
    { frets: [-1, 2, 4, 4, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 2, name: 'Partial A - 2nd Fret', position: 2 },
    // E Shape - 7th Fret
    { frets: [7, 9, 9, 8, 7, 7], fingers: [1, 3, 4, 2, 1, 1], barre: { fret: 7, startString: 0, endString: 5 }, baseFret: 7, name: 'E Shape - 7th Fret', position: 7 },
    // Partial E - 7th Fret
    { frets: [7, 9, 9, 8, -1, -1], fingers: [1, 3, 4, 2, null, null], baseFret: 7, name: 'Partial E - 7th Fret', position: 7 },
    // D Shape - 9th Fret
    { frets: [-1, -1, 9, 11, 12, 11], fingers: [null, null, 1, 2, 4, 3], baseFret: 9, name: 'D Shape - 9th Fret', position: 9 },
    // C Shape - 11th Fret
    { frets: [-1, 14, 13, 11, 12, 11], fingers: [null, 4, 3, 1, 2, 1], barre: { fret: 11, startString: 3, endString: 5 }, baseFret: 11, name: 'C Shape - 11th Fret', position: 14 },
    // Partial C - 11th Fret
    { frets: [-1, -1, 13, 11, 12, 11], fingers: [null, null, 3, 1, 2, 1], baseFret: 11, name: 'Partial C - 11th Fret', position: 14 },
    // A Shape - 14th Fret
    { frets: [-1, 14, -1, -1, -1, 14], fingers: [null, 1, null, null, null, 1], baseFret: 14, name: 'Partial A - 14th Fret', position: 14 },
  ],

  // ============ MINOR CHORDS ============
  'Cm': [
    // Partial Cm - Open
    { frets: [-1, 3, 1, 0, 1, -1], fingers: [null, 3, 1, null, 2, null], baseFret: 1, name: 'Partial Cm - Open', position: 3 },
    // Am Shape - 3rd Fret
    { frets: [-1, 3, 5, 5, 4, 3], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 3, startString: 1, endString: 5 }, baseFret: 3, name: 'Am Shape - 3rd Fret', position: 3 },
    // Partial Am - 3rd Fret
    { frets: [-1, 3, 5, 5, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 3, name: 'Partial Am - 3rd Fret', position: 3 },
    // Em Shape - 8th Fret
    { frets: [8, 10, 10, 8, 8, 8], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 8, startString: 0, endString: 5 }, baseFret: 8, name: 'Em Shape - 8th Fret', position: 8 },
    // Partial Em - 8th Fret
    { frets: [8, 10, 10, 8, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 8, name: 'Partial Em - 8th Fret', position: 8 },
    // Dm Shape - 10th Fret
    { frets: [-1, -1, 10, 12, 13, 11], fingers: [null, null, 1, 3, 4, 2], baseFret: 10, name: 'Dm Shape - 10th Fret', position: 10 },
    // Am Shape - 15th Fret
    { frets: [-1, 15, -1, -1, -1, 15], fingers: [null, 1, null, null, null, 1], baseFret: 15, name: 'Partial Am - 15th Fret', position: 15 },
  ],
  'C#m': [
    // Am Shape - 4th Fret
    { frets: [-1, 4, 6, 6, 5, 4], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 4, startString: 1, endString: 5 }, baseFret: 4, name: 'Am Shape - 4th Fret', position: 4 },
    // Partial Am - 4th Fret
    { frets: [-1, 4, 6, 6, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 4, name: 'Partial Am - 4th Fret', position: 4 },
    // Em Shape - 9th Fret
    { frets: [9, 11, 11, 9, 9, 9], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 9, startString: 0, endString: 5 }, baseFret: 9, name: 'Em Shape - 9th Fret', position: 9 },
    // Partial Em - 9th Fret
    { frets: [9, 11, 11, 9, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 9, name: 'Partial Em - 9th Fret', position: 9 },
    // Dm Shape - 11th Fret
    { frets: [-1, -1, 11, 13, 14, 12], fingers: [null, null, 1, 3, 4, 2], baseFret: 11, name: 'Dm Shape - 11th Fret', position: 11 },
  ],
  'Dbm': [
    // Am Shape - 4th Fret
    { frets: [-1, 4, 6, 6, 5, 4], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 4, startString: 1, endString: 5 }, baseFret: 4, name: 'Am Shape - 4th Fret', position: 4 },
    // Partial Am - 4th Fret
    { frets: [-1, 4, 6, 6, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 4, name: 'Partial Am - 4th Fret', position: 4 },
    // Em Shape - 9th Fret
    { frets: [9, 11, 11, 9, 9, 9], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 9, startString: 0, endString: 5 }, baseFret: 9, name: 'Em Shape - 9th Fret', position: 9 },
    // Partial Em - 9th Fret
    { frets: [9, 11, 11, 9, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 9, name: 'Partial Em - 9th Fret', position: 9 },
    // Dm Shape - 11th Fret
    { frets: [-1, -1, 11, 13, 14, 12], fingers: [null, null, 1, 3, 4, 2], baseFret: 11, name: 'Dm Shape - 11th Fret', position: 11 },
  ],
  'Dm': [
    // Open Dm (most common)
    { frets: [-1, -1, 0, 2, 3, 1], fingers: [null, null, null, 2, 3, 1], baseFret: 1, name: 'Open Dm', position: 5 },
    // Dm Shape - 1st Fret
    { frets: [-1, -1, 1, 3, 4, 2], fingers: [null, null, 1, 3, 4, 2], baseFret: 1, name: 'Dm Shape - 1st Fret', position: 5 },
    // Am Shape - 5th Fret
    { frets: [-1, 5, 7, 7, 6, 5], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 5, startString: 1, endString: 5 }, baseFret: 5, name: 'Am Shape - 5th Fret', position: 5 },
    // Partial Am - 5th Fret
    { frets: [-1, 5, 7, 7, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 5, name: 'Partial Am - 5th Fret', position: 5 },
    // Em Shape - 10th Fret
    { frets: [10, 12, 12, 10, 10, 10], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 10, startString: 0, endString: 5 }, baseFret: 10, name: 'Em Shape - 10th Fret', position: 10 },
    // Partial Em - 10th Fret
    { frets: [10, 12, 12, 10, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 10, name: 'Partial Em - 10th Fret', position: 10 },
    // Dm Shape - 12th Fret
    { frets: [-1, -1, 12, 14, 15, 13], fingers: [null, null, 1, 3, 4, 2], baseFret: 12, name: 'Dm Shape - 12th Fret', position: 12 },
  ],
  'D#m': [
    // Dm Shape - 1st Fret
    { frets: [-1, -1, 1, 3, 4, 2], fingers: [null, null, 1, 3, 4, 2], baseFret: 1, name: 'Dm Shape - 1st Fret', position: 1 },
    // Am Shape - 6th Fret
    { frets: [-1, 6, 8, 8, 7, 6], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 6, startString: 1, endString: 5 }, baseFret: 6, name: 'Am Shape - 6th Fret', position: 6 },
    // Partial Am - 6th Fret
    { frets: [-1, 6, 8, 8, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 6, name: 'Partial Am - 6th Fret', position: 6 },
    // Em Shape - 11th Fret
    { frets: [11, 13, 13, 11, 11, 11], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 11, startString: 0, endString: 5 }, baseFret: 11, name: 'Em Shape - 11th Fret', position: 11 },
    // Partial Em - 11th Fret
    { frets: [11, 13, 13, 11, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 11, name: 'Partial Em - 11th Fret', position: 11 },
    // Dm Shape - 13th Fret
    { frets: [-1, -1, 13, 15, -1, -1], fingers: [null, null, 1, 3, null, null], baseFret: 13, name: 'Partial Dm - 13th Fret', position: 13 },
  ],
  'Ebm': [
    // Dm Shape - 1st Fret
    { frets: [-1, -1, 1, 3, 4, 2], fingers: [null, null, 1, 3, 4, 2], baseFret: 1, name: 'Dm Shape - 1st Fret', position: 1 },
    // Am Shape - 6th Fret
    { frets: [-1, 6, 8, 8, 7, 6], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 6, startString: 1, endString: 5 }, baseFret: 6, name: 'Am Shape - 6th Fret', position: 6 },
    // Partial Am - 6th Fret
    { frets: [-1, 6, 8, 8, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 6, name: 'Partial Am - 6th Fret', position: 6 },
    // Em Shape - 11th Fret
    { frets: [11, 13, 13, 11, 11, 11], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 11, startString: 0, endString: 5 }, baseFret: 11, name: 'Em Shape - 11th Fret', position: 11 },
    // Partial Em - 11th Fret
    { frets: [11, 13, 13, 11, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 11, name: 'Partial Em - 11th Fret', position: 11 },
    // Dm Shape - 13th Fret
    { frets: [-1, -1, 13, 15, -1, -1], fingers: [null, null, 1, 3, null, null], baseFret: 13, name: 'Partial Dm - 13th Fret', position: 13 },
  ],
  'Em': [
    // Open Em (most common - easiest chord!)
    { frets: [0, 2, 2, 0, 0, 0], fingers: [null, 2, 3, null, null, null], baseFret: 1, name: 'Open Em', position: 0 },
    // Dm Shape - 2nd Fret
    { frets: [-1, -1, 2, 4, 5, 3], fingers: [null, null, 1, 3, 4, 2], baseFret: 2, name: 'Dm Shape - 2nd Fret', position: 2 },
    // Am Shape - 7th Fret
    { frets: [-1, 7, 9, 9, 8, 7], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 7, startString: 1, endString: 5 }, baseFret: 7, name: 'Am Shape - 7th Fret', position: 7 },
    // Partial Am - 7th Fret
    { frets: [-1, 7, 9, 9, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 7, name: 'Partial Am - 7th Fret', position: 7 },
    // Em Shape - 12th Fret (octave)
    { frets: [12, 14, 14, 12, 12, 12], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 12, startString: 0, endString: 5 }, baseFret: 12, name: 'Em Shape - 12th Fret', position: 12 },
    // Partial Em - 12th Fret
    { frets: [12, 14, 14, 12, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 12, name: 'Partial Em - 12th Fret', position: 12 },
    // Dm Shape - 14th Fret
    { frets: [-1, -1, 14, -1, -1, -1], fingers: [null, null, 1, null, null, null], baseFret: 14, name: 'Partial Dm - 14th Fret', position: 14 },
  ],
  'Fm': [
    // Em Shape - 1st Fret
    { frets: [1, 3, 3, 1, 1, 1], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 1, startString: 0, endString: 5 }, baseFret: 1, name: 'Em Shape Barre', position: 1 },
    // Partial Em - 1st Fret
    { frets: [1, 3, 3, 1, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 1, name: 'Partial Em - 1st Fret', position: 1 },
    // Dm Shape - 3rd Fret
    { frets: [-1, -1, 3, 5, 6, 4], fingers: [null, null, 1, 3, 4, 2], baseFret: 3, name: 'Dm Shape - 3rd Fret', position: 3 },
    // Am Shape - 8th Fret
    { frets: [-1, 8, 10, 10, 9, 8], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 8, startString: 1, endString: 5 }, baseFret: 8, name: 'Am Shape - 8th Fret', position: 8 },
    // Partial Am - 8th Fret
    { frets: [-1, 8, 10, 10, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 8, name: 'Partial Am - 8th Fret', position: 8 },
    // Em Shape - 13th Fret
    { frets: [13, 15, 15, 13, 13, 13], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 13, startString: 0, endString: 5 }, baseFret: 13, name: 'Em Shape - 13th Fret', position: 13 },
    // Partial Em - 13th Fret
    { frets: [13, 15, 15, 13, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 13, name: 'Partial Em - 13th Fret', position: 13 },
  ],
  'F#m': [
    // Em Shape - 2nd Fret
    { frets: [2, 4, 4, 2, 2, 2], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 2, startString: 0, endString: 5 }, baseFret: 2, name: 'Em Shape - 2nd Fret', position: 2 },
    // Partial Em - 2nd Fret
    { frets: [2, 4, 4, 2, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 2, name: 'Partial Em - 2nd Fret', position: 2 },
    // Dm Shape - 4th Fret
    { frets: [-1, -1, 4, 6, 7, 5], fingers: [null, null, 1, 3, 4, 2], baseFret: 4, name: 'Dm Shape - 4th Fret', position: 4 },
    // Am Shape - 9th Fret
    { frets: [-1, 9, 11, 11, 10, 9], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 9, startString: 1, endString: 5 }, baseFret: 9, name: 'Am Shape - 9th Fret', position: 9 },
    // Partial Am - 9th Fret
    { frets: [-1, 9, 11, 11, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 9, name: 'Partial Am - 9th Fret', position: 9 },
    // Em Shape - 14th Fret
    { frets: [14, -1, -1, -1, -1, 14], fingers: [1, null, null, null, null, 1], baseFret: 14, name: 'Partial Em - 14th Fret', position: 14 },
  ],
  'Gbm': [
    // Em Shape - 2nd Fret
    { frets: [2, 4, 4, 2, 2, 2], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 2, startString: 0, endString: 5 }, baseFret: 2, name: 'Em Shape - 2nd Fret', position: 2 },
    // Partial Em - 2nd Fret
    { frets: [2, 4, 4, 2, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 2, name: 'Partial Em - 2nd Fret', position: 2 },
    // Dm Shape - 4th Fret
    { frets: [-1, -1, 4, 6, 7, 5], fingers: [null, null, 1, 3, 4, 2], baseFret: 4, name: 'Dm Shape - 4th Fret', position: 4 },
    // Am Shape - 9th Fret
    { frets: [-1, 9, 11, 11, 10, 9], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 9, startString: 1, endString: 5 }, baseFret: 9, name: 'Am Shape - 9th Fret', position: 9 },
    // Partial Am - 9th Fret
    { frets: [-1, 9, 11, 11, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 9, name: 'Partial Am - 9th Fret', position: 9 },
  ],
  'Gm': [
    // Em Shape - 3rd Fret
    { frets: [3, 5, 5, 3, 3, 3], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 3, startString: 0, endString: 5 }, baseFret: 3, name: 'Em Shape - 3rd Fret', position: 3 },
    // Partial Em - 3rd Fret
    { frets: [3, 5, 5, 3, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 3, name: 'Partial Em - 3rd Fret', position: 3 },
    // Partial Gm (easier)
    { frets: [-1, -1, 5, 3, 3, 3], fingers: [null, null, 4, 1, 1, 1], barre: { fret: 3, startString: 3, endString: 5 }, baseFret: 3, name: 'Partial Gm', position: 3 },
    // Dm Shape - 5th Fret
    { frets: [-1, -1, 5, 7, 8, 6], fingers: [null, null, 1, 3, 4, 2], baseFret: 5, name: 'Dm Shape - 5th Fret', position: 5 },
    // Am Shape - 10th Fret
    { frets: [-1, 10, 12, 12, 11, 10], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 10, startString: 1, endString: 5 }, baseFret: 10, name: 'Am Shape - 10th Fret', position: 10 },
    // Partial Am - 10th Fret
    { frets: [-1, 10, 12, 12, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 10, name: 'Partial Am - 10th Fret', position: 10 },
    // Em Shape - 15th Fret
    { frets: [15, -1, -1, -1, 15, 15], fingers: [1, null, null, null, 2, 3], baseFret: 15, name: 'Partial Em - 15th Fret', position: 15 },
  ],
  'G#m': [
    // Em Shape - 4th Fret
    { frets: [4, 6, 6, 4, 4, 4], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 4, startString: 0, endString: 5 }, baseFret: 4, name: 'Em Shape - 4th Fret', position: 4 },
    // Partial Em - 4th Fret
    { frets: [4, 6, 6, 4, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 4, name: 'Partial Em - 4th Fret', position: 4 },
    // Dm Shape - 6th Fret
    { frets: [-1, -1, 6, 8, 9, 7], fingers: [null, null, 1, 3, 4, 2], baseFret: 6, name: 'Dm Shape - 6th Fret', position: 6 },
    // Am Shape - 11th Fret
    { frets: [-1, 11, 13, 13, 12, 11], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 11, startString: 1, endString: 5 }, baseFret: 11, name: 'Am Shape - 11th Fret', position: 11 },
    // Partial Am - 11th Fret
    { frets: [-1, 11, 13, 13, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 11, name: 'Partial Am - 11th Fret', position: 11 },
  ],
  'Abm': [
    // Em Shape - 4th Fret
    { frets: [4, 6, 6, 4, 4, 4], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 4, startString: 0, endString: 5 }, baseFret: 4, name: 'Em Shape - 4th Fret', position: 4 },
    // Partial Em - 4th Fret
    { frets: [4, 6, 6, 4, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 4, name: 'Partial Em - 4th Fret', position: 4 },
    // Dm Shape - 6th Fret
    { frets: [-1, -1, 6, 8, 9, 7], fingers: [null, null, 1, 3, 4, 2], baseFret: 6, name: 'Dm Shape - 6th Fret', position: 6 },
    // Am Shape - 11th Fret
    { frets: [-1, 11, 13, 13, 12, 11], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 11, startString: 1, endString: 5 }, baseFret: 11, name: 'Am Shape - 11th Fret', position: 11 },
    // Partial Am - 11th Fret
    { frets: [-1, 11, 13, 13, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 11, name: 'Partial Am - 11th Fret', position: 11 },
  ],
  'Am': [
    // Open Am (most common)
    { frets: [-1, 0, 2, 2, 1, 0], fingers: [null, null, 2, 3, 1, null], baseFret: 1, name: 'Open Am', position: 0 },
    // Em Shape - 5th Fret
    { frets: [5, 7, 7, 5, 5, 5], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 5, startString: 0, endString: 5 }, baseFret: 5, name: 'Em Shape - 5th Fret', position: 5 },
    // Partial Em - 5th Fret
    { frets: [5, 7, 7, 5, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 5, name: 'Partial Em - 5th Fret', position: 5 },
    // Dm Shape - 7th Fret
    { frets: [-1, -1, 7, 9, 10, 8], fingers: [null, null, 1, 3, 4, 2], baseFret: 7, name: 'Dm Shape - 7th Fret', position: 7 },
    // Am Shape - 12th Fret (octave)
    { frets: [-1, 12, 14, 14, 13, 12], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 12, startString: 1, endString: 5 }, baseFret: 12, name: 'Am Shape - 12th Fret', position: 12 },
    // Partial Am - 12th Fret
    { frets: [-1, 12, 14, 14, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 12, name: 'Partial Am - 12th Fret', position: 12 },
  ],
  'A#m': [
    // Am Shape - 1st Fret
    { frets: [-1, 1, 3, 3, 2, 1], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 1, startString: 1, endString: 5 }, baseFret: 1, name: 'Am Shape - 1st Fret', position: 1 },
    // Partial Am - 1st Fret
    { frets: [-1, 1, 3, 3, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 1, name: 'Partial Am - 1st Fret', position: 1 },
    // Em Shape - 6th Fret
    { frets: [6, 8, 8, 6, 6, 6], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 6, startString: 0, endString: 5 }, baseFret: 6, name: 'Em Shape - 6th Fret', position: 6 },
    // Partial Em - 6th Fret
    { frets: [6, 8, 8, 6, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 6, name: 'Partial Em - 6th Fret', position: 6 },
    // Dm Shape - 8th Fret
    { frets: [-1, -1, 8, 10, 11, 9], fingers: [null, null, 1, 3, 4, 2], baseFret: 8, name: 'Dm Shape - 8th Fret', position: 8 },
    // Am Shape - 13th Fret
    { frets: [-1, 13, 15, 15, 14, 13], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 13, startString: 1, endString: 5 }, baseFret: 13, name: 'Am Shape - 13th Fret', position: 13 },
    // Partial Am - 13th Fret
    { frets: [-1, 13, 15, 15, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 13, name: 'Partial Am - 13th Fret', position: 13 },
  ],
  'Bbm': [
    // Am Shape - 1st Fret
    { frets: [-1, 1, 3, 3, 2, 1], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 1, startString: 1, endString: 5 }, baseFret: 1, name: 'Am Shape - 1st Fret', position: 1 },
    // Partial Am - 1st Fret
    { frets: [-1, 1, 3, 3, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 1, name: 'Partial Am - 1st Fret', position: 1 },
    // Em Shape - 6th Fret
    { frets: [6, 8, 8, 6, 6, 6], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 6, startString: 0, endString: 5 }, baseFret: 6, name: 'Em Shape - 6th Fret', position: 6 },
    // Partial Em - 6th Fret
    { frets: [6, 8, 8, 6, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 6, name: 'Partial Em - 6th Fret', position: 6 },
    // Dm Shape - 8th Fret
    { frets: [-1, -1, 8, 10, 11, 9], fingers: [null, null, 1, 3, 4, 2], baseFret: 8, name: 'Dm Shape - 8th Fret', position: 8 },
    // Am Shape - 13th Fret
    { frets: [-1, 13, 15, 15, 14, 13], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 13, startString: 1, endString: 5 }, baseFret: 13, name: 'Am Shape - 13th Fret', position: 13 },
    // Partial Am - 13th Fret
    { frets: [-1, 13, 15, 15, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 13, name: 'Partial Am - 13th Fret', position: 13 },
  ],
  'Bm': [
    // Am Shape - 2nd Fret
    { frets: [-1, 2, 4, 4, 3, 2], fingers: [null, 1, 3, 4, 2, 1], barre: { fret: 2, startString: 1, endString: 5 }, baseFret: 2, name: 'Am Shape - 2nd Fret', position: 2 },
    // Partial Am - 2nd Fret
    { frets: [-1, 2, 4, 4, -1, -1], fingers: [null, 1, 3, 4, null, null], baseFret: 2, name: 'Partial Am - 2nd Fret', position: 2 },
    // Em Shape - 7th Fret
    { frets: [7, 9, 9, 7, 7, 7], fingers: [1, 3, 4, 1, 1, 1], barre: { fret: 7, startString: 0, endString: 5 }, baseFret: 7, name: 'Em Shape - 7th Fret', position: 7 },
    // Partial Em - 7th Fret
    { frets: [7, 9, 9, 7, -1, -1], fingers: [1, 3, 4, 1, null, null], baseFret: 7, name: 'Partial Em - 7th Fret', position: 7 },
    // Dm Shape - 9th Fret
    { frets: [-1, -1, 9, 11, 12, 10], fingers: [null, null, 1, 3, 4, 2], baseFret: 9, name: 'Dm Shape - 9th Fret', position: 9 },
    // Am Shape - 14th Fret
    { frets: [-1, 14, -1, -1, -1, 14], fingers: [null, 1, null, null, null, 1], baseFret: 14, name: 'Partial Am - 14th Fret', position: 14 },
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
