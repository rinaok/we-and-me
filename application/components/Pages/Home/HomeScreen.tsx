import * as React from 'react';
import CarouselCard from '../../ui-components/Carousel/CarouselCard';
import {Text, View} from 'react-native';
import {homeCardsData} from '../../../__mocks/home';
import SwiperCard from '../../ui-components/SwiperCard/SwiperCard';

// @ts-ignore
export const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2, margin: 5}}>
        <View style={{margin: 5}}>
          <Text>Explore We&Me</Text>
        </View>
        <View style={{marginHorizontal: 15}}>
          <CarouselCard carouselData={homeCardsData} showsPagination={false} />
        </View>
      </View>
      <View style={{flex: 2, margin: 5}}>
        <SwiperCard />
      </View>
      <View style={{flex: 2, margin: 5}}>
        <View style={{margin: 5}}>
          <Text>Explore We&Me</Text>
        </View>
        <View style={{marginHorizontal: 15}}>
          <CarouselCard carouselData={homeCardsData} showsPagination={false} />
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;
