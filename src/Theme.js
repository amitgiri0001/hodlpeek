import {configureFonts, DefaultTheme} from 'react-native-paper';
import customFonts from './Fonts';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#344955',
    accent: '#F9AA33',
    background: '#FFF',
    primaryFontColor: '#000',
    primaryFontColorDark: '#FFF',
    secondaryFontColor: '#757575',
  },
  widget: {
    titleImage: {
      width: 40,
      height: 40,
    },
  },
};

export default theme;
