import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useTheme} from '@shopify/restyle';
import {Theme, Text} from './Theme';

interface ButtonProps {
  label?: string;
  varient: 'default' | 'primary' | 'transparent';
  onPress: () => void;
  children?: ReactNode;
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
    textAlign: 'center',
  },
});

const Button = ({label, varient, onPress, children}: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    varient === 'primary'
      ? theme.colors.primary
      : varient === 'transparent'
      ? theme.colors.transparent
      : theme.colors.gray;
  const color = varient === 'primary' ? theme.colors.white : theme.colors.title;
  return (
    <RectButton style={[styles.container, {backgroundColor}]} {...{onPress}}>
      {children ? (
        children
      ) : (
        <Text variant="button" style={[styles.label, {color}]}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = {
  varient: 'default',
};

export default Button;
