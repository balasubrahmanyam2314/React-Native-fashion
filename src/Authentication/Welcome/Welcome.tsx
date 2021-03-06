import React from 'react';
import {Image, Dimensions, StyleSheet} from 'react-native';
import {Box, theme, Text, Button} from '../../components';

const {width, height} = Dimensions.get('window');

interface WelcomeProps {}
const picture = {
  src: require('../../assets/5.png'),
  width: 339,
  height: 509,
};
const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        backgroundColor="gray"
        borderBottomRightRadius="xl"
        alignItems="center"
        justifyContent="flex-end">
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="gray"
          style={{...StyleSheet.absoluteFillObject}}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl">
          <Text variant="title2">Let's get Started</Text>
          <Text variant="body" textAlign="center">
            Login to your account belowor signupfor an amazing experience
          </Text>
          <Button
            varient="primary"
            label="Have an account? Login"
            onPress={() => console.log('')}
          />
          <Button label="Join us, it's free" onPress={() => console.log('')} />
          <Button
            varient="transparent"
            label="Forgot password?"
            onPress={() => console.log('')}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
