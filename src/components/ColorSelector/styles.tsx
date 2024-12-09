import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  menuWrapper: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  colorBox: {
    minHeight: 36,
    minWidth: 36,
    borderRadius: 6,
  },
  container: {
    padding: 8,
    width: '47%',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 8,
    gap: 8,
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedContainer: {
    borderColor: '#156651',
  },
  colorNameText: {
    fontSize: 14,
    color: '#404040',
    fontFamily: 'Manrope-Regular',
  },
});
