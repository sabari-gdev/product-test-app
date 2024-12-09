import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen';
import FrequentlyBoughtScreen from '../screens/FrequentlyBought/FrequentlyBoughtScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    ProductDetail: {
      screen: ProductDetailScreen,
      options: {
        headerShown: false,
      },
    },
    FrequentlyBought: FrequentlyBoughtScreen,
  },
});

const RootNavigator = createStaticNavigation(RootStack);

export default RootNavigator;
