import * as React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import SwiperCard from '../../ui-components/SwiperCard/SwiperCard';
import {apartmentsData} from '../../../__mocks/apartments';
import {BackgroundVideo} from '../../ui-components/BackgroundVideo/BackgroundVideo';
import ExploreEvents from './ExploreEvents';
import ExploreCities from './ExploreCities';
import {styles as homeStyle} from './HomeScreen.styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = homeStyle(windowWidth, windowHeight);

// @ts-ignore
export const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{flex: 2}}>
        <BackgroundVideo />
        <View style={styles.searchBar}>
          <View style={{flexDirection: 'row'}}>
            <View style={{top: 8, left: 10}}>
              <MaterialIcons name={'search'} color={'black'} size={34} />
            </View>
            <View
              style={{flexDirection: 'column', marginTop: 8, marginLeft: 20}}>
              <Text style={styles.searchBarTextUpper}>Find your home</Text>
              <Text style={styles.searchBarTextLower}>
                Keep on living, work and explore
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 2}}>
        <View style={{flex: 2, margin: 10}}>
          <ExploreCities />
        </View>
        <View style={{flex: 2, marginTop: 5}}>
          <SwiperCard data={apartmentsData} />
        </View>
        <View style={{flex: 2, margin: 10}}>
          <ExploreEvents />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
