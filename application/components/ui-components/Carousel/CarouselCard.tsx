import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import {ExploreCard} from '../UiCard/ExploreCard';

interface CarouselCardProps {
  carouselData?: Array<{
    title: any;
    body?: string;
    image: string;
  }>;
  showsPagination?: boolean;
}

const CarouselCard = (props: CarouselCardProps) => {
  const {carouselData, showsPagination} = props;
  const display =
    carouselData &&
    carouselData.map((data, index) => (
      // <View style={styles.slide}>
      //   <View style={CardStyle}>
      //     <ExploreCard title={data.title} />
      //   </View>
      // </View>
      <View style={styles.slide} key={index}>
        <Text>{data.title}</Text>
      </View>
    ));
  return (
    <Swiper
      showsButtons={false}
      loop={false}
      loadMinimal={true}
      removeClippedSubviews={false}
      showsPagination={showsPagination}>
      {display}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    width: '30%',
    margin: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
});

const CardStyle = {
  width: '100%',
};

export default CarouselCard;
