import React, {useEffect, useCallback, useState} from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {ImageBackground} from 'react-native';

interface ChatMessage {
  message: any;
  name: any;
  image: any;
}

// @ts-ignore
const ChatScreen = ({route}) => {
  const {chatMessages, backgroundImage} = route.params;
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const msgs = chatMessages.map((msg: ChatMessage, index: number) => {
      return {
        _id: index,
        text: msg.message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: msg.name,
          avatar: msg.image,
        },
      };
    });
    setMessages(msgs);
  }, []);

  const onSend = useCallback((allMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, allMessages),
    );
  }, []);

  const MessengerBarContainer = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: 'white',
          alignContent: 'center',
          justifyContent: 'center',
          borderWidth: 0,
          paddingTop: 6,
          marginHorizontal: 6,
          borderRadius: 32,
          borderTopColor: 'transparent',
        }}
      />
    );
  };

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="repeat"
      style={{height: '100%'}}>
      <GiftedChat
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        messages={messages}
        user={{
          _id: 'liorsap1@gmail.com',
          name: 'Lior',
          avatar: require('../../../assets/profiles/noam-profile.png'),
        }}
        renderInputToolbar={props => MessengerBarContainer(props)}
      />
    </ImageBackground>
  );
};

export default ChatScreen;
