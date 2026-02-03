// Font Families
// Using system fonts with proper fallbacks for cross-platform consistency
export const fontFamilies = {
  display: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  special: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  camelot: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

// Typography Styles
export const typography = {
  // Hero / H1 - Main page titles (56px)
  hero: {
    fontFamily: fontFamilies.display,
    fontSize: 56,
    lineHeight: 56,
    letterSpacing: 1.12,
    fontWeight: '400',
  },

  // Title / H2 - Page headers (32px)
  title: {
    fontFamily: fontFamilies.display,
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0.64,
    fontWeight: '400',
  },

  // Section Title / H3 - Section headers (24px)
  sectionTitle: {
    fontFamily: fontFamilies.display,
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0,
    fontWeight: '400',
  },

  // Small Header / H4 - Nav labels (14px, uppercase)
  smallHeader: {
    fontFamily: fontFamilies.display,
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.42,
    fontWeight: '400',
    textTransform: 'uppercase',
  },

  // Body - Main content (16px)
  body: {
    fontFamily: fontFamilies.body,
    fontSize: 16,
    lineHeight: 22.4, // 140%
    letterSpacing: 0.16,
    fontWeight: '400',
  },

  // Body Medium - Emphasized body
  bodyMedium: {
    fontFamily: fontFamilies.body,
    fontSize: 16,
    lineHeight: 22.4,
    letterSpacing: 0.16,
    fontWeight: '500',
  },

  // Caption - Metadata (12px)
  caption: {
    fontFamily: fontFamilies.body,
    fontSize: 12,
    lineHeight: 16.8,
    letterSpacing: 0.12,
    fontWeight: '400',
  },

  // Small Caption (10px)
  smallCaption: {
    fontFamily: fontFamilies.body,
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: 0.1,
    fontWeight: '400',
  },

  // Camelot Wheel Labels
  camelotKey: {
    fontFamily: fontFamilies.camelot,
    fontSize: 16,      // B labels (major keys)
    fontWeight: '700',
  },

  camelotKeySmall: {
    fontFamily: fontFamilies.camelot,
    fontSize: 14,      // A labels (minor keys)
    fontWeight: '700',
  },

  camelotKeyName: {
    fontFamily: fontFamilies.camelot,
    fontSize: 11,      // Key names on outer ring
    fontWeight: '400',
  },

  camelotKeyNameSmall: {
    fontFamily: fontFamilies.camelot,
    fontSize: 9,       // Key names on inner ring
    fontWeight: '400',
  },
};
