import {StyleSheet} from 'react-native';

export const styles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    searchBar: {
      borderWidth: 1,
      position: 'absolute',
      width: 0.9 * width,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 25,
      top: height / 2 - 70,
      left: (0.1 * width) / 2,
      borderColor: 'grey',
    },
    searchBarTextUpper: {
      fontSize: 16,
      fontWeight: '700',
    },
    searchBarTextLower: {
      fontSize: 12,
      fontWeight: '300',
      opacity: 0.7,
    },
  });
