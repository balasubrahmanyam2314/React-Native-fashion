import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {Extrapolate, interpolate} from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const styles = StyleSheet.create({});

const Dot = ({index, currentIndex}: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        backgroundColor: '#2CB9B0',
        height: 10,
        width: 10,
        borderRadius: 5,
        margin: 5,
        opacity,
        transform: [{scale}],
      }}
    />
  );
};

export default Dot;
