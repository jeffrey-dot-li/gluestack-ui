import { styled } from 'dank-style';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    baseStyle: {
      style: {
        //@ts-ignore
        fontSize: '$xs',
        color: '$error600',
        ml: '$1',
      },
      colorMode: {
        dark: {
          style: {
            color: '$error500',
          },
        },
      },
    },
  },
  {}
);
