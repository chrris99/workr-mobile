import { Text as T, TextProps as TP } from 'react-native';
import { fonts, TextType } from './fonts'
import { Color, colors } from '../colors/colors'

interface TextProps extends TP {
  type?: TextType;
  color?: Color;
}

const Text = (props: TextProps) => {
  return (
    <T
      {...props}
      style={[
        props.style,
        fonts[props.type || 'body-S-regular'],
        { color: colors[props.color || 'gray-900'] }
      ]}>
      {props.children}
    </T>
  );
};

export default Text;