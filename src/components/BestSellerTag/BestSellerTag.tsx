import {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const BestSellerTag: FC = () => {
  return (
    <View style={styles.bestSellerTagContainer}>
      <View style={styles.bestSellerTextContainer}>
        <Text style={styles.bestSellerTagText}>Best Seller</Text>
      </View>

      <View style={styles.bestSellerTopTriangle} />
      <View style={styles.triangleCornerBottomLeft} />
    </View>
  );
};

export default BestSellerTag;
