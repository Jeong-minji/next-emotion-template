export interface ThemeType {
  figure: number;
  theme: "light" | "dark";

  typography: {
    display_2xl: any;
    display_xl: any;
    display_lg: any;
    display_md: any;
    display_sm: any;
    display_xs: any;
    text_xl: any;
    text_lg: any;
    text_md: any;
    text_sm: any;
    text_xs: any;
    weight: {
      light: number;
      regular: number;
      medium: number;
      bold: number;
      black: number;
    };
  };

  color: {
    background_color: string;

    white: string;
    black: string;

    gray_25: string;
    gray_50: string;
    gray_100: string;
    gray_200: string;
    gray_300: string;
    gray_400: string;
    gray_500: string;
    gray_600: string;
    gray_700: string;
    gray_800: string;
    gray_900: string;

    error_25: string;
    error_50: string;
    error_100: string;
    error_200: string;
    error_300: string;
    error_400: string;
    error_500: string;
    error_600: string;
    error_700: string;
    error_800: string;
    error_900: string;

    warning_25: string;
    warning_50: string;
    warning_100: string;
    warning_200: string;
    warning_300: string;
    warning_400: string;
    warning_500: string;
    warning_600: string;
    warning_700: string;
    warning_800: string;
    warning_900: string;

    success_25: string;
    success_50: string;
    success_100: string;
    success_200: string;
    success_300: string;
    success_400: string;
    success_500: string;
    success_600: string;
    success_700: string;
    success_800: string;
    success_900: string;

    information_25: string;
    information_50: string;
    information_100: string;
    information_200: string;
    information_300: string;
    information_400: string;
    information_500: string;
    information_600: string;
    information_700: string;
    information_800: string;
    information_900: string;
  };
}
