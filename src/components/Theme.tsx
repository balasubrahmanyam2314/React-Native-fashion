import {BaseTheme, createText, createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
  title: '#0C0D34',
  text: 'rgba(12,13,52,0.7)',
  primary: '#2CB9B0',
  buttonBackground: 'rgba(12,13,52,0.05)',
};

const theme: BaseTheme = createTheme({
  colors: {
    primary: palette.primary,
    title: palette.title,
    text: palette.text,
    white: palette.white,
    buttonBackground: palette.buttonBackground,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontFamily: 'SFProText-Bold',
      color: 'white',
      textAlign: 'center',
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProText-Bold',
      color: 'title',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProText-Bold',
      color: 'title',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProText-Regular',
      color: 'text',
    },
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
