import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { styles } from './EventScreen.styles';

const post = {
  author: 'Jane Doe',
  date: 'January 1, 2020',
};

// @ts-ignore
const EventScreen = ({route, navigation}) => {
  const {image, title, paragraph} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{borderRadius: 10}}
      />
      <View style={styles.wrapperContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.meta}>
          <Text style={styles.author}>by {post.author}</Text>
          <Text style={styles.date}>{post.date}</Text>
        </View>
        <Text style={styles.content}>{paragraph}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventScreen;
