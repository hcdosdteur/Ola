import { createStitches } from '@stitches/react';

export const COLORS = {
  background: '#B5C2CA',
  grade1: '#fff',
  grade2: '#fbfbfb',
  grade3: '#dfdfdf',
  grade4: '#616C72',
  grade5: '#696969',
  grade6: '#081225',
  grade7: '#000',
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: COLORS,
  },
});
