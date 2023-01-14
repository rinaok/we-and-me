import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const SwiperCard = (props: {data?: any[]}) => {
  const dataToShow = props.data || ['Hello Swiper', 'Beautiful', 'And simple'];
  return (
    <Swiper style={styles.wrapper} showsHorizontalScrollIndicator={true}>
      {dataToShow.map(d => {
        return (
          <View style={styles.slide} key={d.title}>
            <Image source={d.image} />
            <Text style={styles.text}>{d.title}</Text>
          </View>
        );
      })}
    </Swiper>
  );
};

export default SwiperCard;
