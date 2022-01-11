import {configureFonts, DefaultTheme} from 'react-native-paper';
import customFonts from './Fonts';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFF',
    accent: '#FFE082',
    background: '#FFF',
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
