import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
