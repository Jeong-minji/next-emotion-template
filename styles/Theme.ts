import { ThemeType } from "./types";

const figure = 8;

const typography = {
  display_2xl: {
    fontSize: "4.5rem",
    lineHeight: "5.625rem",
  },
  display_xl: {
    fontSize: "3.75rem",
    lineHeight: "4.625rem",
  },
  display_lg: {
    fontSize: "3rem",
    lineHeight: "3.75rem",
  },
  display_md: {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
  },
  display_sm: {
    fontSize: "1.875rem",
    lineHeight: "2.375rem",
  },
  display_xs: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  text_xl: {
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
  },
  text_lg: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  },
  text_md: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  text_sm: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  text_xs: {
    fontSize: "0.75rem",
    lineHeight: "1.125rem",
  },
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
};

const lightColor = {
  background_color: "#FFFFFF",

  white: "#FFFFFF",
  black: "#000000",

  gray_25: "#FCFCFC",
  gray_50: "#FBFBFB",
  gray_100: "#F5F5F5",
  gray_200: "#E6E6E6",
  gray_300: "#CFCFCF",
  gray_400: "#9E9E9E",
  gray_500: "#7A7A7A",
  gray_600: "#676767",
  gray_700: "#545454",
  gray_800: "#393939",
  gray_900: "#1A1A1A",

  error_25: "#FFFBFA",
  error_50: "#FEF3F2",
  error_100: "#FEE4E2",
  error_200: "#FECDCA",
  error_300: "#FDA29B",
  error_400: "#F97066",
  error_500: "#F04438",
  error_600: "#D92D20",
  error_700: "#B42318",
  error_800: "#912018",
  error_900: "#7A271A",

  warning_25: "#FFFCF5",
  warning_50: "#FFFAEB",
  warning_100: "#FEF0C7",
  warning_200: "#FEDF89",
  warning_300: "#FEC84B",
  warning_400: "#FDB022",
  warning_500: "#F79009",
  warning_600: "#DC6803",
  warning_700: "#B54708",
  warning_800: "#93370D",
  warning_900: "#7A2E0E",

  success_25: "#F6FEF9",
  success_50: "#ECFDF3",
  success_100: "#D1FADF",
  success_200: "#A6F4C5",
  success_300: "#6CE9A6",
  success_400: "#32D583",
  success_500: "#12B76A",
  success_600: "#039855",
  success_700: "#027A48",
  success_800: "#05603A",
  success_900: "#054F31",

  information_25: "#F5FAFF",
  information_50: "#EFF8FF",
  information_100: "#D1E9FF",
  information_200: "#B2DDFF",
  information_300: "#84CAFF",
  information_400: "#53B1FD",
  information_500: "#2E90FA",
  information_600: "#1570EF",
  information_700: "#175CD3",
  information_800: "#1849A9",
  information_900: "#194185",
};

const darkColor = {
  background_color: "#050505",

  white: "#FFFFFF",
  black: "#000000",

  gray_25: "#1A1A1A",
  gray_50: "#393939",
  gray_100: "#545454",
  gray_200: "#676767",
  gray_300: "#7A7A7A",
  gray_400: "#9E9E9E",
  gray_500: "#CFCFCF",
  gray_600: "#E6E6E6",
  gray_700: "#F5F5F5",
  gray_800: "#FBFBFB",
  gray_900: "#FCFCFC",

  error_25: "#7A271A",
  error_50: "#912018",
  error_100: "#B42318",
  error_200: "#D92D20",
  error_300: "#F04438",
  error_400: "#F97066",
  error_500: "#FDA29B",
  error_600: "#FECDCA",
  error_700: "#FEE4E2",
  error_800: "#FEF3F2",
  error_900: "#FFFBFA",

  warning_25: "#7A2E0E",
  warning_50: "#93370D",
  warning_100: "#B54708",
  warning_200: "#DC6803",
  warning_300: "#F79009",
  warning_400: "#FDB022",
  warning_500: "#FEC84B",
  warning_600: "#FEDF89",
  warning_700: "#FEF0C7",
  warning_800: "#FFFAEB",
  warning_900: "#FFFCF5",

  success_25: "#054F31",
  success_50: "#05603A",
  success_100: "#027A48",
  success_200: "#039855",
  success_300: "#12B76A",
  success_400: "#32D583",
  success_500: "#6CE9A6",
  success_600: "#A6F4C5",
  success_700: "#D1FADF",
  success_800: "#ECFDF3",
  success_900: "#F6FEF9",

  information_25: "#194185",
  information_50: "#1849A9",
  information_100: "#175CD3",
  information_200: "#1570EF",
  information_300: "#2E90FA",
  information_400: "#53B1FD",
  information_500: "#84CAFF",
  information_600: "#B2DDFF",
  information_700: "#D1E9FF",
  information_800: "#EFF8FF",
  information_900: "#F5FAFF",
};

const defalutTheme = {
  typography,
  figure,
};

export const lightTheme: ThemeType = {
  ...defalutTheme,
  theme: "light",
  color: lightColor,
};

export const darkTheme: ThemeType = {
  ...defalutTheme,
  theme: "dark",
  color: darkColor,
};
