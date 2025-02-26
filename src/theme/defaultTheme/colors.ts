const primary = {
  // Buttons & Interactive Elements: 500 paired with 50 or 100 neutrals
  // Hover/Focus: 600 - 700
  // Text/Accents: 800 - 900
  light: {
    50: "#eff6ff", // Very light blue, ideal for soft backgrounds or hover states
    100: "#dbeafe", // Light, airy background tones
    200: "#bfdbfe", // Subtle surfaces or accents
    300: "#93c5fd", // Useful for borders or lighter highlights
    400: "#60a5fa", // Lighter accent for interactive states
    500: "#3b82f6", // Base primary color; great for buttons and active elements
    600: "#2563eb", // Darker variant for hover or focus effects
    700: "#1d4ed8", // Stronger emphasis for active or selected states
    800: "#1e40af", // Deep blue for contrast on light surfaces
    900: "#1e3a8a", // Darkest tone, useful for high contrast elements (e.g., text on light backgrounds)
  },
  // light: {
  //   50: "#E3F2FD",
  //   100: "#BBDEFB",
  //   200: "#90CAF9",
  //   300: "#64B5F6",
  //   400: "#42A5F5",
  //   500: "#2196F3",
  //   600: "#1E88E5",
  //   700: "#1976D2",
  //   800: "#1565C0",
  //   900: "#0D47A1",
  // },
  // 400 buttons, links

  dark: {
    50: "#0a1a33", // Ultra-deep shadow tones
    100: "#102a4c", // Darkest usable background tint
    200: "#133a66", // Surface color for subtle primary backgrounds
    300: "#17509b", // Borders, secondary elements
    400: "#1e6ee8", // **Main dark mode primary (buttons, links)**
    500: "#5393ff", // Hover states, emphasized text
    600: "#70a5ff", // Stronger emphasis, highlights
    700: "#9ac1ff", // Soft, accessible accent text
    800: "#c6ddff", // High-contrast elements (badges, focus rings)
    900: "#e3efff", // **Near-white for accessibility & highest contrast text**
  },
  // dark: {
  //   50: "#0A1929",
  //   100: "#102A43",
  //   200: "#173A5E",
  //   300: "#1C4D78",
  //   400: "#23648F",
  //   500: "#2974A2",
  //   600: "#3182B9",
  //   700: "#3772D1",
  //   800: "#4566D6",
  //   900: "#536AC9",
  // },
};

const secondary = {
  light: {
    50: "#fffbeb", // Very light, ideal for background tints
    100: "#fef3c7", // Soft, warm highlight
    200: "#fde68a", // Subtle background for badges, alerts
    300: "#fcd34d", // Light UI elements (hover states)
    400: "#fbbf24", // Secondary buttons, call-to-action backgrounds
    500: "#f59e0b", // **Main secondary (buttons, links, badges)**
    600: "#d97706", // Hover/focus for buttons
    700: "#b45309", // Stronger emphasis (active states)
    800: "#92400e", // High contrast text on light backgrounds
    900: "#78350f", // Deepest shade for bold accents
  },
  // light: {
  //   50: "#FFEBEE",
  //   100: "#FFCDD2",
  //   200: "#EF9A9A",
  //   300: "#E57373",
  //   400: "#EF5350",
  //   500: "#F44336",
  //   600: "#E53935",
  //   700: "#D32F2F",
  //   800: "#C62828",
  //   900: "#B71C1C",
  // },
  dark: {
    50: "#2a1b05", // Deepest background accent
    100: "#42250a", // Dark tint for secondary elements
    200: "#5b320d", // Muted background for contrast
    300: "#7c470e", // Borders, subtle UI
    400: "#9c5e0e", // **Main secondary color for dark mode (buttons, links)**
    500: "#c77d11", // Hover states, active highlights
    600: "#e69a14", // Stronger emphasis on dark surfaces
    700: "#f7b733", // **Primary text color for contrast**
    800: "#fcd577", // Lighter accents, focus rings
    900: "#ffecb3", // **Brightest for extreme contrast (text, icons, badges)**
  },
  // dark: {
  //   50: "#2D0A0A",
  //   100: "#4A1010",
  //   200: "#691919",
  //   300: "#8A2B2B",
  //   400: "#AC3B3B",
  //   500: "#CC4A4A",
  //   600: "#DD5151",
  //   700: "#EC6161",
  //   800: "#F27171",
  //   900: "#F48383",
  // },
};

const neutral = {
  // 200 - 400: Borders, Dividers & Shadows
  // 50 - 100: Backgrounds & Surfaces
  // 700 - 900: Typography & Icons
  light: {
    50: "#F9FAFB", // Very light, ideal for subtle backgrounds or highlights
    100: "#F3F4F6", // Light background or light borders
    200: "#E5E7EB", // Soft background shades
    300: "#D1D5DB", // Useful for light borders or shadows
    400: "#9CA3AF", // Mid-tone for inactive states or dividers
    500: "#6B7280", // Standard body text and default borders
    600: "#4B5563", // Slightly darker text for improved readability
    700: "#374151", // Primary typography on light backgrounds
    800: "#1F2937", // For high contrast text or emphasized UI elements
    900: "#111827", // Deep, nearly black for maximum contrast
  },
  // light: {
  //   50: "#FAFAFA",
  //   100: "#F5F5F5",
  //   200: "#EEEEEE",
  //   300: "#E0E0E0",
  //   400: "#BDBDBD",
  //   500: "#9E9E9E",
  //   600: "#757575",
  //   700: "#616161",
  //   800: "#424242",
  //   900: "#212121",
  // },
  // 300 - 500: Borders, Dividers & Shadows
  // 50 - 200: Backgrounds & Surfaces
  // 700 - 900: Typography & Icons
  dark: {
    50: "#0d0d0d", // Deep black, slightly lifted for true-dark mode
    100: "#161616", // Primary background for deep dark mode
    200: "#212121", // Slightly elevated surface backgrounds
    300: "#2d2d2d", // Secondary backgrounds (cards, modals)
    400: "#3c3c3c", // Dividers, subtle borders
    500: "#525252", // Midpoint, used for disabled text or icons
    600: "#717171", // Tertiary text, placeholder text
    700: "#a3a3a3", // Secondary text, muted UI elements
    800: "#d4d4d4", // Primary text, high contrast elements
    900: "#f0f0f0", // Brightest text for extreme contrast on dark
  },
  // dark: {
  //   50: "#121212",
  //   100: "#1E1E1E",
  //   200: "#2B2B2B",
  //   300: "#3A3A3A",
  //   400: "#525252",
  //   500: "#6E6E6E",
  //   600: "#8D8D8D",
  //   700: "#A4A4A4",
  //   800: "#C0C0C0",
  //   900: "#E0E0E0",
  // },
};

export default {
  primary,
  secondary,
  neutral,
};
