import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {UiCard} from '../../ui-components/UiCard/UiCard';

const EventsScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={CardStyle}>
          <UiCard
            title={"Noam's Club"}
            paragraph={
              'You are welcome to join the event Please check the details section for further information'
            }
            subtitle={'BOOKINGS OPENS Tue, 27 Dec, 11:50 am'}
          />
        </View>
        <View style={CardStyle}>
          <UiCard
            title={"Alexa's Club"}
            paragraph={
              'You are welcome to join the event Please check the details section for further information'
            }
            subtitle={'BOOKINGS OPENS Tue, 27 Dec, 11:50 am'}
          />
        </View>
        <View style={CardStyle}>
          <UiCard
            title={"Ronaldo's Club"}
            paragraph={
              'You are welcome to join the event Please check the details section for further information'
            }
            subtitle={'BOOKINGS OPENS Tue, 27 Dec, 11:50 am'}
          />
        </View>
        <View style={CardStyle}>
          <UiCard
            title={"Lior's Club"}
            paragraph={
              'You are welcome to join the event Please check the details section for further information'
            }
            subtitle={'BOOKINGS OPENS Tue, 27 Dec, 11:50 am'}
          />
        </View>
      </View>
      {/*<UiCard title={'This is the title'} paragraph={'bla bla bla'} />*/}
    </ScrollView>
  );
};

const CardStyle = {
  width: '99%',
  padding: 1,
};
export default EventsScreen;
