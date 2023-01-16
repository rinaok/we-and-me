import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import CarouselCard from '../../ui-components/Carousel/CarouselCard';
import {eventsCardsData} from '../../../__mocks/events';
import {ExploreEventCard} from '../../ui-components/Explore/ExploreEventCard/ExploreEventCard';

const {width: windowWidth} = Dimensions.get('window');

const ExploreEvents = () => {
  return (
    <View style={{flex: 2, margin: 10}}>
      <View style={{marginBottom: 5}}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>
          Explore We&Me Events
        </Text>
      </View>
      <View>
        <CarouselCard
          data={eventsCardsData}
          Component={ExploreEventCard}
          itemWidth={windowWidth}
        />
      </View>
    </View>
  );
};

export default ExploreEvents;
