import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const post = {
  author: 'Jane Doe',
  date: 'January 1, 2020',
};

// @ts-ignore
const EventScreen = ({route}) => {
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

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  meta: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  author: {
    fontSize: 14,
    color: '#999',
    marginRight: 10,
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    marginTop: 10,
  },
  wrapperContent: {
    padding: 10,
  },
  button: {
    position: 'absolute',
    bottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    flexDirection: 'row',
    marginBottom: 5,
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#3F1054',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default EventScreen;
