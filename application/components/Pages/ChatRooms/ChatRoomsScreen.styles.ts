import {StyleSheet} from 'react-native';

export const styles = (windowWidth: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      backgroundColor: '#ffffff',
    },
    separator: {
      marginTop: 0.5,
    },
    /******** card **************/
    card: {
      margin: 0,
      borderRadius: 2,
      borderColor: '#DCDCDC',
      backgroundColor: '#DCDCDC',
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
      //overlay efect
      flex: 1,
      height: 200,
      position: 'absolute',
      zIndex: 100,
      left: 0,
      right: 0,
    },
    cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 15,
      paddingBottom: 0,
      paddingVertical: 7.5,
      paddingHorizontal: 0,
    },
    cardImage: {
      flex: 1,
      height: 170,
      width: windowWidth,
    },
    /******** card components **************/
    title: {
      fontSize: 22,
      color: '#ffffff',
      marginTop: 10,
      fontWeight: 'bold',
    },
    time: {
      fontSize: 13,
      color: '#ffffff',
      marginTop: 5,
      fontWeight: '700',
    },
    icon: {
      width: 25,
      height: 25,
    },
    /******** social bar ******************/
    socialBarContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      flex: 1,
    },
    socialBarSection: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      flex: 1,
    },
    newMessages: {
      marginLeft: 8,
      alignSelf: 'flex-start',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: 16,
      color: '#ffffff',
    },
    socialBarButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
