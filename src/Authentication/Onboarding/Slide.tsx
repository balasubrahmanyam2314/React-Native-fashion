import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {Text} from '../../components';
const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = height * 0.61;
export const BORDER_RADIUS = 75;
const TITLE_CONTAINER_HEIGHT = 100;

console.log('width', width, height);

interface SlideProps {
  title: string;
  right?: boolean;
  picture: number;
}

const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    height: TITLE_CONTAINER_HEIGHT,
    justifyContent: 'center',
  },

  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});
const Slide = ({title, picture, right}: SlideProps) => {
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
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, {transform}]}>
        <Text variant='hero' >{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
