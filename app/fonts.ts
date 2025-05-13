// app/fonts.ts
import localFont from 'next/font/local';

export const dancingScript = localFont({
    src: './fonts/DancingScript-Variable.ttf',
    display: 'swap',
    variable: '--font-dancing',
  });
// export const author = localFont({
//     src: './fonts/Author-Variable.ttf',
//     display: 'swap',
//     variable: '--font-author',
//   });
export const author = localFont({
    src: './fonts/SpaceMono-Regular.ttf',
    display: 'swap',
    variable: '--font-author',
  });
  
  export const newTitle = localFont({
    src:'./fonts/NewTitle-Variable.ttf',
    display: 'swap',
    variable: '--font-title',
  });
  export const pencerio = localFont({
    src:  './fonts/Pencerio-Hairline.otf',
    display: 'swap',
    variable: '--font-pencerio',
  });
  export const anton = localFont({
    src:  './fonts/Anton-Regular.otf',
    display: 'swap',
    variable: '--font-anton',
  });
