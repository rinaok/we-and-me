import React from 'react';
import {Text, View} from 'react-native';
import CarouselCard from '../../ui-components/Carousel/CarouselCard';

const ExploreCities = () => {
  return (
    <View>
      <View style={{marginBottom: 5}}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>Explore We&Me</Text>
      </View>
      <View>
        <CarouselCard />
      </View>
    </View>
  );
};

export default ExploreCities;
