import { colors, camelotColors } from './colors';

// Semantic Color Tokens
export const colorTokens = {
  // Primary Brand
  primary: colors.purple900,              // #050C46 - Dark Blue
  primaryHover: colors.purple700,
  primaryLight: colors.purple100,
  primaryLightest: colors.purple50,       // #F0EDFF

  // Text
  textPrimary: colors.black,              // #15151A
  textSecondary: colors.grey800,          // #3B3B3B
  textTertiary: colors.grey500,           // #737272
  textInverse: colors.white,

  // Backgrounds
  backgroundPrimary: colors.white,
  backgroundSecondary: colors.purple50,   // #F0EDFF - Purple tint
  backgroundTertiary: colors.grey100,

  // Interactive States
  interactive: colors.purple900,
  interactiveHover: colors.purple700,
  interactiveDisabled: colors.grey300,

  // Navigation
  navActive: colors.purple900,            // Selected state
  navInactive: colors.grey600,            // Unselected state
  navBackground: colors.white,

  // Piano Roll
  pianoKeyWhite: colors.white,
  pianoKeyBlack: colors.grey900,          // #272830
  pianoKeyHighlight: camelotColors.camelot8Mid, // Varies by key
  pianoKeyBorder: colors.grey200,         // #D7D7D7
  pianoKeyLabel: colors.black,
};
