import React, {ReactNode} from 'react';
import {Image, Dimensions, StyleSheet, StatusBar} from 'react-native';
import theme, {Box} from './Theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const bgImg = require('../assets/patterns/1.png');
const {width} = Dimensions.get('window');
const aspectRatio = 1023 / 1535;
const height = width * aspectRatio;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({children, footer}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}>
          <Image
            source={bgImg}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>

      <Box flex={1} overflow="hidden">
        <Image
          source={bgImg}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            borderBottomLeftRadius: theme.borderRadii.xl,
            top: -height * 0.61,
          }}
        />
        <Box
          flex={1}
          borderRadius="xl"
          borderTopLeftRadius="none"
          backgroundColor="white">
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

export default Container;
