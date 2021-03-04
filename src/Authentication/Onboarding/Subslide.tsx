import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {Button} from '../../components';
const {width, height} = Dimensions.get('window');

interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    // width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    marginBottom: 12,
    color: '#0C0D34',
  },
  description: {
    textAlign: 'center',
    fontFamily: 'SFProText-Regular',
    lineHeight: 24,
    fontSize: 16,
    color: '#0C0D34',
    marginBottom: 40,
  },
});

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        varient={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};

export default Subslide;
