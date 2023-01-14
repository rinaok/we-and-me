import * as React from 'react';
import CarouselCard from '../../ui-components/Carousel/CarouselCard';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import SwiperCard from '../../ui-components/SwiperCard/SwiperCard';
import { ExploreEventCard } from '../../ui-components/ExploreEventCard/ExploreEventCard';
import { eventsCardsData } from '../../../__mocks/events';
import { apartmentsData } from '../../../__mocks/apartments';
import { BackgroundVideo } from '../../ui-components/BackgroundVideo/BackgroundVideo';
const { width: windowWidth } = Dimensions.get('window');

// @ts-ignore
export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 2 }}>
        <BackgroundVideo />
      </View>
      <View>
        <View style={{ flex: 2, margin: 10 }}>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 24, fontWeight: '700' }}>Explore We&Me</Text>
          </View>
          <View>
            <CarouselCard />
          </View>
        </View>
        <View style={{ flex: 2, marginTop: 5 }}>
          <SwiperCard data={apartmentsData} />
        </View>
        <View style={{ flex: 2, margin: 10 }}>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 24, fontWeight: '700' }}>
              Explore We&Me Events
            </Text>
          </View>
          <View style={{ flex: 2, marginTop: 5 }}>
            <SwiperCard data={apartmentsData} />
          </View>
          <View style={{ flex: 2, margin: 10 }}>
            <View style={{ marginBottom: 5 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
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
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

export default HomeScreen;
