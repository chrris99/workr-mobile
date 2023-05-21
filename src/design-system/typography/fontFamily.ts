export type FontWeight =
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'

type FontFamily =
  | 'Poppins_400Regular'
  | 'Poppins_500Medium'
  | 'Poppins_600SemiBold'
  | 'Poppins_700Bold'

export const fontFamily: Record<FontWeight, FontFamily> = {
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  semibold: 'Poppins_600SemiBold',
  bold: 'Poppins_700Bold'
}