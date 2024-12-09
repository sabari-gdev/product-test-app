import {FC} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface IColorSelectorMenuProps {
  colors: Array<{name: string; hex: string}>;
  selectedColor: string;
  onSelect: (color: string) => void;
}

const ColorSelectorMenu: FC<IColorSelectorMenuProps> = ({
  colors,
  onSelect,
  selectedColor,
}) => {
  return (
    <View style={styles.menuWrapper}>
      {colors?.map(color => (
        <Pressable
          key={color.hex}
          onPress={() => onSelect(color.name)}
          style={[
            styles.container,
            selectedColor === color.name && styles.selectedContainer,
          ]}>
          <View style={[styles.colorBox, {backgroundColor: color.hex}]} />
          <Text style={styles.colorNameText}>{color?.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ColorSelectorMenu;
