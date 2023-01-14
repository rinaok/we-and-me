import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import {ProfileSection} from '../../ui-components/ProfileSection/ProfileSection';
import {MockProfileData} from '../../../__mocks/profile';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#eee',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  photo: {
    marginTop: 5,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: '600',
  },
  membership: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  membershipId: {
    fontSize: 14,
    opacity: 0.4,
  },
  title: {
    fontSize: 16,
    color: 'gray',
  },
  body: {
    marginTop: 20,
  },
});

export default ProfileScreen;
