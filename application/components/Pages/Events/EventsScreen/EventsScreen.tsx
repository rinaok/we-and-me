import * as React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {UiCard} from '../../../ui-components/UiCard/UiCard';
import {eventsCardsData} from '../../../../__mocks/events';
import {styles} from './EventsScreen.styles';

// @ts-ignore
const EventsScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        {eventsCardsData.map(event => {
          const {image, title, paragraph} = event;
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate('Event', {image, title, paragraph})
              }>
              <UiCard
                title={title}
                paragraph={paragraph}
                source={image}
                subtitle={'BOOKINGS OPENS Tue, 27 Dec, 11:50 am'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default EventsScreen;
