import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    _text: {
      'fontWeight': '$normal',
      'color': '$info600',
      ':hover': {
        textDecorationLine: 'underline',
        color: '$info600',
      },
      ':active': {
        textDecorationLine: 'underline',
        color: '$info700',
      },
      ':pressed': {
        textDecorationLine: 'underline',
        color: '$info700',
      },
      '_dark': {
        'color': '$info300',
        ':hover': {
          textDecorationLine: 'underline',
          color: '$info300',
        },
        ':active': {
          textDecorationLine: 'underline',
          color: '$info200',
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
