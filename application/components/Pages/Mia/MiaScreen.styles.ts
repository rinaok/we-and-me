import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 20,
    paddingBottom: 10
  },
  input: {
    borderWidth: 0.2,
    color: '#929799',
    borderRadius: 5,
    borderColor: '#929799',
    height: 50,
    paddingLeft: 15,
    paddingRight: 15
  },
  button: {
    bottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#3F1054',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
