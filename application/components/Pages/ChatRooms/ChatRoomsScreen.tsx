import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import {chatsData} from '../../../__mocks/chatRooms';
import {styles as chatRoomsStyle} from './ChatRoomsScreen.styles';

const windowWidth = Dimensions.get('window').width;
const styles = chatRoomsStyle(windowWidth);

// @ts-ignore
const ChatRoomsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={chatsData}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={chatData => {
          const item = chatData.item;
          const params = {
            ...item,
          };
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat', params)}>
              <View style={styles.card}>
                <Image style={styles.cardImage} source={item.image} />
                <View style={styles.cardContent}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>

                  <View style={styles.cardFooter}>
                    <View style={styles.socialBarContainer}>
                      <View style={styles.socialBarSection}>
                        <TouchableOpacity style={styles.socialBarButton}>
                          <AntDesign
                            name={'message1'}
                            color={'white'}
                            size={22}
                          />
                          <Text style={styles.newMessages}>
                            {item.newMessages}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ChatRoomsScreen;
