import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Box, theme} from '../../components';
const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;
export const BORDER_RADIUS = theme.borderRadii.xl;
const TITLE_CONTAINER_HEIGHT = 100;

console.log('width', width, height);

interface SlideProps {
  title: string;
  right?: boolean;
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: TITLE_CONTAINER_HEIGHT,
    justifyContent: 'center',
  },
});
const Slide = ({title, right}: SlideProps) => {
  const transform = [
    {
      translateY: (SLIDE_HEIGHT - TITLE_CONTAINER_HEIGHT) / 2,
    },
    {
      translateX: right ? width / 2 - 50 : -width / 2 + 50,
    },
    {
      rotate: right ? '-90deg' : '90deg',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text variant="hero">{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
