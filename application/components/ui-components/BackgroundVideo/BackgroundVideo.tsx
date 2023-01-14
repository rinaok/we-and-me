import * as React from 'react';
import Video from "react-native-video";
import { Dimensions, StyleSheet, View, Image } from 'react-native';

export const BackgroundVideo = () => {
    return (
        <View>
            <Video
                style={styles.backgroundVideo}
                source={require('../../../assets/videos/home.mp4')}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
                ignoreSilentSwitch={"obey"}
            />
            <View style={styles.wrapper}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo/home-logo.png')}
                />
            </View>
        </View>
    );
};
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    backgroundVideo: {
        height: height / 2,
        top: 0,
        left: 0,
        alignItems: "stretch",
        right: 0,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        position: 'absolute',
        bottom: 200
    },
    wrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    },
});
