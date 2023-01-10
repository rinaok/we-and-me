import React from 'react';
// @ts-ignore
import Carousel from 'react-native-anchor-carousel';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {ExploreCard} from '../ExploreCard/ExploreCard';
import {homeCardsData} from '../../../__mocks/home';

const {width: windowWidth} = Dimensions.get('window');

const CarouselCard = () => {
  const carouselRef = React.useRef(null);
  // @ts-ignore
  const renderItem = ({item, index}) => {
    const {image, title} = item;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          // @ts-ignore
          carouselRef.current.scrollToIndex(index);
        }}>
        <ExploreCard source={image} title={title} />
      </TouchableOpacity>
    );
  };
  return (
    <Carousel
      ref={carouselRef}
      data={homeCardsData}
      renderItem={renderItem}
      itemWidth={windowWidth * 0.5}
      showsHorizontalScrollIndicator={true}
      containerWidth={windowWidth * 0.9}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: '90%',
    height: '90%',
  },
});

export default CarouselCard;
