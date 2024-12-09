import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bestSellerTagContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    zIndex: 10,
    top: 32,
  },
  bestSellerTextContainer: {
    backgroundColor: '#E44A4A',
    padding: 5,
    opacity: 0.94,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bestSellerTopTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 40,
    borderTopWidth: 40,
    borderRightColor: 'transparent',
    borderTopColor: '#E44A4A',
    opacity: 0.9,
  },
  triangleCornerBottomLeft: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 40,
    borderTopWidth: 40,
    borderRightColor: 'transparent',
    borderTopColor: '#B24040',
    transform: [{rotate: '270deg'}],
    position: 'absolute',
    right: 0,
    zIndex: -1,
  },
  bestSellerTagText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 12,
    color: '#FFF',
  },
});
