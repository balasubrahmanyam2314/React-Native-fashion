import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text} from '../../components';
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
    marginBottom: 12,
  },
  description: {
    textAlign: 'center',
    marginBottom: 40,
  },
});

const Subslide = ({subtitle, description, last, onPress}: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subtitle}>
        {subtitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        varient={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};

export default Subslide;
