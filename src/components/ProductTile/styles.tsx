import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    gap: 10,
    maxWidth: 150,
    marginRight: 16,
    marginBlock: 16,
  },
  discountPercentText: {
    paddingBlock: 3,
    paddingInline: 6,
    backgroundColor: '#e44a4a',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Manrope-Regular',
    width: 50,
    position: 'absolute',
    bottom: 8,
    left: 0,
  },
  imageLayer: {
    position: 'relative',
  },
  productBrandName: {
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: '#404040',
  },
  productPriceText: {
    fontSize: 20,
    fontFamily: 'Manrope-Bold',
    color: '#404040',
  },
  originalPriceText: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: '#404040',
    fontFamily: 'Manrope-Regular',
  },
});
