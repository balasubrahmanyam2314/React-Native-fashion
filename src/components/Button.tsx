import React from 'react';
import { StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
  label: string;
  varient: 'default' | 'primary';
  onPress: ()=> void;
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

const Button = ({label, varient,onPress}: ButtonProps) => {
  const backgroundColor =
    varient === 'primary' ? '#2CB9B0' : 'rgba(12,13,52,0.05)';
  const color = varient === 'primary' ? 'white' : '#0C0D34';
  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </RectButton>
  );
};

export default Button;
