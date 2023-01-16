import React from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';
import {ProfileSection} from '../../ui-components/ProfileSection/ProfileSection';
import {MockProfileData} from '../../../__mocks/profile';
import {styles} from './ProfileScreen.styles';

const ProfileScreen = () => {
  const {
    name,
    membershipId,
    membershipName,
    dob,
    occupation,
    password,
    phone,
    description,
    email,
  } = MockProfileData;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.photo}
          source={require('../../../assets/profiles/noam-profile.png')}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{occupation}</Text>
        <Button title="Edit Profile" onPress={() => {}} />
      </View>
      <View style={styles.card}>
        <Text style={styles.membership}>{membershipName}</Text>
        <Text style={styles.membershipId}>Tenant No. {membershipId}</Text>
      </View>
      <View style={styles.body}>
        <ProfileSection title={'About Me'} item={description} />
        <ProfileSection title={'Contact No'} item={phone} />
        <ProfileSection title={'Date of Birth'} item={dob} />
        <ProfileSection title={'Email Address'} item={email} />
        <ProfileSection title={'Password'} item={password} />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
