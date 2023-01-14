import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';

export function WithSplashScreen({
  children,
  isAppReady,
}: {
  isAppReady: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      {isAppReady && children}

      <Splash isAppReady={isAppReady} />
    </>
  );
}

const LOADING_IMAGE = 'Loading image';
const FADE_IN_IMAGE = 'Fade in image';
const WAIT_FOR_APP_TO_BE_READY = 'Wait for app to be ready';
const FADE_OUT = 'Fade out';
const HIDDEN = 'Hidden';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Splash = ({isAppReady}: {isAppReady: boolean}) => {
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  let interval: number;

  const [state, setState] = useState<
    | typeof LOADING_IMAGE
    | typeof FADE_IN_IMAGE
    | typeof WAIT_FOR_APP_TO_BE_READY
    | typeof FADE_OUT
    | typeof HIDDEN
  >(LOADING_IMAGE);

  const [resizeImage, setResizeImage] = useState(0);

  useEffect(() => {
    if (state === FADE_IN_IMAGE) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1200, // Fade in duration
        useNativeDriver: true,
      }).start(() => {
        setState(WAIT_FOR_APP_TO_BE_READY);
      });
    }
  }, [imageOpacity, state]);

  useEffect(() => {
    if (state === WAIT_FOR_APP_TO_BE_READY) {
      if (isAppReady) {
        setState(FADE_OUT);
        interval = setInterval(() => {
          setResizeImage(resizeImage => resizeImage + 2);
        }, 20);
      }
    }
  }, [isAppReady, state]);

  useEffect(() => {
    if (state === FADE_OUT) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 8000, // Fade out duration
        delay: 8000, // Minimum time the logo will stay visible
        useNativeDriver: true,
      }).start(() => {
        clearInterval(interval);
        setState(HIDDEN);
      });
    }
  }, [containerOpacity, state]);

  if (state === HIDDEN) return null;

  const initialWidthSize = windowWidth / 2 + 200;
  const width =
    initialWidthSize - resizeImage > windowWidth / 2
      ? initialWidthSize - resizeImage
      : windowWidth / 2;
  const initialHeightSizeLeft = windowHeight / 3 + 200;
  const heightLeft =
    initialHeightSizeLeft - resizeImage > windowHeight / 3
      ? initialHeightSizeLeft - resizeImage
      : windowHeight / 3;

  const initialHeightSizeRight = windowHeight / 2 + 200;
  const heightRight =
    initialHeightSizeRight - resizeImage > windowHeight / 2
      ? initialHeightSizeRight - resizeImage
      : windowHeight / 2;

  return (
    <Animated.View
      collapsable={false}
      style={[style.container, {opacity: containerOpacity}]}>
      <View style={{flexDirection: 'row', position: 'absolute'}}>
        <View
          style={{
            flexDirection: 'column',
            width: windowWidth / 2,
            position: 'absolute',
            top: 0,
          }}>
          <View style={style.imageViewColumn1}>
            <Animated.Image
              source={require('../../../assets/splash/People1.png')}
              fadeDuration={0}
              style={{
                width,
                height: heightLeft,
                opacity: imageOpacity,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={style.imageViewColumn1}>
            <Animated.Image
              source={require('../../../assets/splash/People5.png')}
              fadeDuration={0}
              style={{
                width,
                height: heightLeft,
                opacity: imageOpacity,
              }}
              resizeMode="contain"
            />
          </View>
          <View style={style.imageViewColumn1}>
            <Animated.Image
              source={require('../../../assets/splash/People4.png')}
              fadeDuration={0}
              style={{
                width,
                height: heightLeft,
                opacity: imageOpacity,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: windowWidth / 2,
            height: windowHeight,
            position: 'absolute',
            top: 0,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              height: windowHeight / 2,
              ...style.imageViewColumn2,
            }}>
            <Animated.Image
              source={require('../../../assets/splash/People2.png')}
              fadeDuration={0}
              style={{
                width,
                height: windowHeight / 2,
                opacity: imageOpacity,
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              position: 'absolute',
              top: windowHeight / 2,
              left: windowWidth / 2,
              height: windowHeight / 2,
              ...style.imageViewColumn2,
            }}>
            <Animated.Image
              source={require('../../../assets/splash/People3.png')}
              fadeDuration={0}
              style={{
                width,
                height: windowHeight / 2,
                opacity: imageOpacity,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <View style={{position: 'absolute'}}>
        <Animated.Image
          source={require('../../../assets/Logo.png')}
          fadeDuration={0}
          onLoad={() => {
            setState(FADE_IN_IMAGE);
          }}
          style={{...style.image, opacity: imageOpacity}}
          resizeMode="contain"
        />
      </View>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
  image: {
    position: 'absolute',
    left: windowWidth / 2 - 60,
    top: windowHeight / 2 - 60,
    width: 120,
    height: 120,
  },
  imageViewColumn1: {
    position: 'relative',
    width: windowWidth / 2,
    height: windowHeight / 3,
  },
  imageViewColumn2: {
    width: windowWidth / 2,
  },
});
