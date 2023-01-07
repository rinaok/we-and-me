import * as React from 'react';
import CarouselCard from '../../ui-components/Carousel/CarouselCard';
import {Text, View} from 'react-native';
import {homeCardsData} from '../../../__mocks/home';

// @ts-ignore
export const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, margin: 5}}>
        <View style={{margin: 5}}>
          <Text>Explore We&Me</Text>
        </View>
        <View style={{flex: 1, marginHorizontal: 5}}>
          <CarouselCard carouselData={homeCardsData} showsPagination={false} />
        </View>
      </View>
      <View style={{flex: 2, margin: 5}}>{/*<CarouselCard />*/}</View>
      <View style={{flex: 2, margin: 5}}>{/*<CarouselCard />*/}</View>
    </View>
  );
};
export default HomeScreen;
