import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {useTheme} from '@shopify/restyle';
import {Theme} from './Theme';

interface ButtonProps {
  label: string;
  varient: 'default' | 'primary';
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    fontFamily: 'SFProText-Semibold',
    textAlign: 'center',
  },
});

const Button = ({label, varient, onPress}: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    varient === 'primary'
      ? theme.colors.primary
      : theme.colors.buttonBackground;
  const color = varient === 'primary' ? theme.colors.white : theme.colors.title;
  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

export default Button;
