export type Color = `${ColorName}-${Contrast}` | 'white';

type ColorName = 'primary' | 'secondary' | 'gray' | 'error';
type Contrast = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

const primary: Record<Contrast, string> = {
  50: '#F9F5FF',
  100: '#F4EBFF',
  200: '#E9D7FE',
  300: '#D6BBFB',
  400: '#B692F6',
  500: '#9E77ED',
  600: '#7F56D9',
  700: '#6941C6',
  800: '#53389E',
  900: '#42307D'
};

const secondary: Record<Contrast, string> = {
  50: '#FFEAD5',
  100: '#FFEAD5',
  200: '#FDDCAB',
  300: '#FEB273',
  400: '#FD853A',
  500: '#FB6514',
  600: '#EC4A0A',
  700: '#C4320A',
  800: '#9C2A10',
  900: '#7E2410'
};

const gray: Record<Contrast, string> = {
  50: '#F9FAFB',
  100: '#F2F4F7',
  200: '#EAECF0',
  300: '#D0D5DD',
  400: '#98A2B3',
  500: '#667085',
  600: '#475467',
  700: '#344054',
  800: '#1D2939',
  900: '#101828'
};

const error: Record<Contrast, string> = {
  50: '#FEF3F2',
  100: "#FEE4E2",
  200: "#FECDCA",
  300: "#FDA29B",
  400: "#F97066",
  500: "#F04438",
  600: "#D92D20",
  700: "#B42318",
  800: "#912018",
  900: "#7A271A"
}

export const colors: Record<Color, string> = {
  'white': '#FFFFFF',
  'primary-50': primary[50],
  'primary-100': primary[100],
  'primary-200': primary[200],
  'primary-300': primary[300],
  'primary-400': primary[400],
  'primary-500': primary[500],
  'primary-600': primary[600],
  'primary-700': primary[700],
  'primary-800': primary[800],
  'primary-900': primary[900],
  'secondary-50': secondary[50],
  'secondary-100': secondary[100],
  'secondary-200': secondary[200],
  'secondary-300': secondary[300],
  'secondary-400': secondary[400],
  'secondary-500': secondary[500],
  'secondary-600': secondary[600],
  'secondary-700': secondary[700],
  'secondary-800': secondary[800],
  'secondary-900': secondary[900],
  'gray-50': gray[50],
  'gray-100': gray[100],
  'gray-200': gray[200],
  'gray-300': gray[300],
  'gray-400': gray[400],
  'gray-500': gray[500],
  'gray-600': gray[600],
  'gray-700': gray[700],
  'gray-800': gray[800],
  'gray-900': gray[900],
  'error-50': error[50],
  "error-100": error[100],
  "error-200": error[200],
  "error-300": error[300],
  "error-400": error[400],
  "error-500": error[500],
  "error-600": error[600],
  "error-700": error[700],
  "error-800": error[800],
  "error-900": error[900]
};