import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {Card} from 'react-native-paper';

interface IProductTileProps {
  image: string;
  brandName: string;
  discountPercent: number;
  sellingPrice: number;
  originalPrice: number;
  ratings: {
    rating: number;
    totalRatings: number;
  };
}

const ProductTile: FC<IProductTileProps> = ({
  image,
  discountPercent,
  brandName,
  sellingPrice,
  originalPrice,
}) => {
  return (
    <Card elevation={1} style={styles.container}>
      <View style={styles.imageLayer}>
        <Image source={{uri: image}} style={{width: 120, height: 100}} />
        <Text style={styles.discountPercentText}>{`${discountPercent} %`}</Text>
      </View>

      <View>
        <Text style={styles.productBrandName}>{brandName}</Text>
        <View>
          <Text style={styles.productPriceText}>{`$${sellingPrice}`}</Text>
          <Text style={styles.originalPriceText}>{`$${originalPrice}`}</Text>
        </View>
      </View>
    </Card>
  );
};

export default ProductTile;
