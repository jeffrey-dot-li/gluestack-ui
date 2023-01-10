//@ts-nocheck

import { Text } from 'react-native';
import { styled } from 'dank-style';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        color: '$text50',
        fontWeight: '$normal',
        fontFamily: '$body',
        fontStyle: 'normal',
        fontSize: '$sm',
        letterSpacing: '$md',
        lineHeight: '$lg',
      },
      colorMode: {
        dark: {
          style: {
            color: '$text900',
          },
        },
      },
    },
    variants: {
      modalHeader: {
        style: {
          fontSize: '$md',
          fontWeight: '$semibold',
          lineHeight: '$sm',
        },
      },
    },
  },
  {}
);
