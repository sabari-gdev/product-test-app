import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import {ActivityIndicator, Divider, List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import productData from '../../data/data';

import ColorSelectorMenu from '../../components/ColorSelector/ColorSelectorMenu';
import ProductTile from '../../components/ProductTile/ProductTile';
import BestSellerTag from '../../components/BestSellerTag/BestSellerTag';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import AddedToCartDialog from '../../components/AddedToCartDialog/AddedToCartDialog';

const ProductDetailScreen = () => {
  const navigation = useNavigation();

  const [selectedColor, setSelectedColor] = useState<string>(
    productData.colors[0].name,
  );
  const [selectedImage, setSelectedImage] = useState(
    productData.images[selectedColor][0],
  );

  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);

  const [showAddedToCartDialog, setShowAddedToCartDialog] = useState(false);

  const showDialog = () => setShowAddedToCartDialog(true);

  const hideDialog = () => setShowAddedToCartDialog(false);

  useEffect(() => {
    setSelectedImage(productData.images[selectedColor][0]);
  }, [selectedColor]);

  const handleAddToCart = () => {
    setAddingToCart(true);

    setTimeout(() => {
      setAddingToCart(false);
      setShowAddedToCartDialog(true);
    }, 4000);
  };

  return (
    <ScrollView style={styles.container}>
      <BestSellerTag />
      <View style={styles.productImageSection}>
        <Image
          source={{uri: selectedImage}}
          style={{width: '100%', height: 350}}
        />
        <FlatList
          horizontal
          data={productData.images[selectedColor]}
          renderItem={({item, index}) => (
            <Pressable onPress={() => setSelectedImage(item)}>
              <Image
                key={index}
                source={{uri: item}}
                style={[
                  styles.imageThumbnail,
                  selectedImage === item && styles.selectedImageThumbnail,
                ]}
              />
            </Pressable>
          )}
        />
      </View>

      <View style={styles.productDetailsContainer}>
        <View style={[styles.productDetailsSection, styles.sectionContent]}>
          <View>
            <Text style={styles.productBrandName}>Brand</Text>
            <View style={styles.productPriceDetailSection}>
              <Text style={styles.productPriceText}>{`$ ${productData?.prices[
                selectedColor
              ].toFixed(2)}`}</Text>
              <Text style={styles.originalPriceText}>
                {productData.originalPrices[selectedColor]}
              </Text>
              <Text
                style={
                  styles.discountPercentText
                }>{`${productData.discountPercentages[selectedColor]} %`}</Text>
            </View>

            <View style={styles.productRatingSection}>
              <Icon name="star" size={18} color="yellow" />
              <Text>{`${productData.ratings[selectedColor].rating} (${productData.ratings[selectedColor].totalRatings})`}</Text>
            </View>
          </View>

          <Text style={styles.productCommonDescriptionText}>
            {productData?.commonDescription}
          </Text>
        </View>

        <Divider />

        <View style={styles.sectionContent}>
          <Text style={styles.sectionTitleText}>Colors</Text>
          <ColorSelectorMenu
            colors={productData?.colors}
            onSelect={setSelectedColor}
            selectedColor={selectedColor}
          />
        </View>

        <Divider />

        <List.Accordion
          title={
            <Text style={styles.sectionTitleText}>Product Description</Text>
          }
          style={{backgroundColor: '#fff'}}
          right={props => <Icon name={props.isExpanded ? 'up' : 'down'} />}>
          <Text style={[styles.productDescriptionText, styles.sectionContent]}>
            {productData?.descriptions[selectedColor]}
          </Text>
        </List.Accordion>

        <Divider />

        <List.Accordion
          style={{backgroundColor: '#fff'}}
          title={<Text style={styles.sectionTitleText}>Size</Text>}
          right={props => <Icon name={props.isExpanded ? 'up' : 'down'} />}>
          {Object.entries(productData.sizeDetails).map(([key, value]) => (
            <View key={key}>
              <View style={[styles.sizeItem, styles.sectionContent]}>
                <Text style={styles.sizeDetailText}>
                  {`${key
                    .replace(/([a-z])([A-Z])/g, '$1 $2')
                    .replace(/^./, str => str.toUpperCase())}:`}
                </Text>
                <Text>{value}</Text>
              </View>

              <Divider style={{backgroundColor: 'red'}} />
            </View>
          ))}

          <Image
            source={{uri: productData.dimensionImage}}
            style={{width: '100%', height: 350}}
          />
        </List.Accordion>

        <Divider />

        <View style={styles.sectionContent}>
          <View style={styles.sectionTitleWithSeeMore}>
            <Text style={styles.sectionTitleLargeText}>Frequently bought</Text>
            <Pressable
              onPress={() => navigation.navigate('FrequentlyBought' as never)}>
              <Text style={styles.seeMoreText}>See More</Text>
            </Pressable>
          </View>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={productData.frequentlyBought}
            renderItem={({item}) => (
              <ProductTile
                key={item.id}
                brandName={item.name}
                image={item.image}
                discountPercent={item.discountPercentage}
                originalPrice={item.price}
                sellingPrice={item.discountedPrice}
                ratings={item.ratings}
              />
            )}
          />
        </View>
      </View>

      <View style={styles.addToCartContainer}>
        <TouchableOpacity onPress={() => setAddedToWishlist(!addedToWishlist)}>
          <View style={styles.wishlistIcon}>
            <Icon
              name={addedToWishlist ? 'heart' : 'hearto'}
              size={18}
              color={'#156651'}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleAddToCart}
          style={styles.addToCartButton}>
          {addingToCart ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.addToCartText}>Add To Cart</Text>
          )}
        </TouchableOpacity>
      </View>

      <AddedToCartDialog
        visible={showAddedToCartDialog}
        hideDialog={hideDialog}
      />
    </ScrollView>
  );
};

export default ProductDetailScreen;
