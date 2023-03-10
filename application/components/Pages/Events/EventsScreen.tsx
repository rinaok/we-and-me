import * as React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {UiCard} from '../../ui-components/UiCard/UiCard';
import {eventsCardsData} from '../../../__mocks/events';

// @ts-ignore
const EventsScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        {eventsCardsData.map(event => {
          const {image, title, paragraph} = event;
          return (
            <TouchableOpacity
              style={CardStyle}
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

const CardStyle = {
  padding: 3,
};
export default EventsScreen;
