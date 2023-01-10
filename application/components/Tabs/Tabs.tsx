import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Pages/Home/HomeScreen';
import EventsScreen from '../Pages/Events/EventsScreen';
import SwitchScreen from '../Pages/Switch/SwitchScreen';
import ProfileScreen from '../Pages/Profile/ProfileScreen';
import ChatRoomsScreen from '../Pages/ChatRooms/ChatRoomsScreen';
import MiaScreen from '../Pages/Mia/MiaScreen';
import EventScreen from '../Pages/Events/EventScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="ChatRooms" component={ChatRoomsScreen} />
      <Stack.Screen name="Mia" component={MiaScreen} />
    </Stack.Navigator>
  );
}

function SwitchStack() {
  return (
    <Stack.Navigator
      initialRouteName="Switch"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="ChatRooms" component={ChatRoomsScreen} />
      <Stack.Screen name="Mia" component={MiaScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChatRooms" component={ChatRoomsScreen} />
      <Stack.Screen name="Mia" component={MiaScreen} />
    </Stack.Navigator>
  );
}

function EventsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Events"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="ChatRooms" component={ChatRoomsScreen} />
      <Stack.Screen name="Mia" component={MiaScreen} />
      <Stack.Screen name="Event" component={EventScreen} />
    </Stack.Navigator>
  );
}

function ChatRoomsScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="ChatRooms"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatRooms" component={ChatRoomsScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Mia" component={MiaScreen} />
    </Stack.Navigator>
  );
}

function MiaScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Mia"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Mia" component={MiaScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChatRooms" component={ChatRoomsScreen} />
    </Stack.Navigator>
  );
}

const handleIcon = (
  routeName: string,
  focused: boolean,
  size: number,
  color: string,
) => {
  const routeToIconComponent = {
    HomeStack: MaterialIcons,
    EventsStack: Ionicons,
    SwitchStack: MaterialCommunityIcons,
    ProfileStack: MaterialCommunityIcons,
    ChatRoomsStack: Ionicons,
    MiaStack: Ionicons,
  };
  let iconName;
  if (routeName === 'HomeStack') {
    iconName = 'search';
  } else if (routeName === 'SwitchStack') {
    iconName = focused ? 'home-switch' : 'home-switch-outline';
  } else if (routeName === 'ProfileStack') {
    iconName = focused ? 'account-settings' : 'account-settings-outline';
  } else if (routeName === 'EventsStack') {
    iconName = focused ? 'calendar' : 'calendar-outline';
  } else if (routeName === 'ChatRoomsStack') {
    iconName = focused ? 'chatbox' : 'chatbox-outline';
  } else if (routeName === 'MiaStack') {
    iconName = focused ? 'md-heart-circle' : 'md-heart-circle-outline';
  }
  // @ts-ignore
  const IconComponent = routeToIconComponent[routeName];
  return <IconComponent name={iconName} size={size} color={color} />;
};

export const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({route}) => ({
          headerStyle: {backgroundColor: '#fff'},
          headerTintColor: 'black',
          headerTitleStyle: {fontWeight: 'bold'},
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({focused, color, size}) => {
            return handleIcon(route.name, focused, size, color);
          },
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Explore',
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="ChatRoomsStack"
          component={ChatRoomsScreenStack}
          options={{
            tabBarLabel: 'ChatRooms',
            title: 'ChatRooms',
          }}
        />
        <Tab.Screen
          name="EventsStack"
          component={EventsStack}
          options={{
            tabBarLabel: 'Events',
            title: 'Events',
          }}
        />
        <Tab.Screen
          name="MiaStack"
          component={MiaScreenStack}
          options={{
            tabBarLabel: 'Mia',
            title: 'Mia',
          }}
        />
        <Tab.Screen
          name="SwitchStack"
          component={SwitchStack}
          options={{
            tabBarLabel: 'Switch',
            title: 'Switch',
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            title: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
