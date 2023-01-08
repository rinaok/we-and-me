import React from 'react';
// @ts-ignore
import Carousel from 'react-native-anchor-carousel';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {ExploreCard} from '../UiCard/ExploreCard';
import {homeCardsData} from '../../../__mocks/home';

const {width: windowWidth} = Dimensions.get('window');

interface CarouselCardProps {
  carouselData?: Array<{
    title: any;
    body?: string;
    image: string;
  }>;
  showsPagination?: boolean;
}

const CarouselCard = (props: CarouselCardProps) => {
  const carouselRef = React.useRef(null);
  const renderItem = ({item, index}) => {
    const {image, title} = item;
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
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
      style={styles.carousel}
      itemWidth={windowWidth * 0.6}
      containerWidth={windowWidth}
      separatorWidth={5}
    />
  );
};

const styles = StyleSheet.create({
  carousel: {},
});

export default CarouselCard;
