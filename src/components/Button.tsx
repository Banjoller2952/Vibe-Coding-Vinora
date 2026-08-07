import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'dark-utility';
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary', style }) => {
  const { colors, typography, radii, spacing } = useTheme();

  const getVariantStyles = (): { container: ViewStyle; text: TextStyle } => {
    switch (variant) {
      case 'secondary':
        return {
          container: {
            backgroundColor: 'transparent',
            borderColor: colors.primary,
            borderWidth: 1,
            borderRadius: radii.pill,
            paddingVertical: 11,
            paddingHorizontal: 22,
          },
          text: {
            ...typography.body,
            color: colors.primary,
          },
        };
      case 'dark-utility':
        return {
          container: {
            backgroundColor: colors.ink,
            borderRadius: radii.sm,
            paddingVertical: 8,
            paddingHorizontal: 15,
          },
          text: {
            ...typography.buttonUtility,
            color: colors.onDark,
          },
        };
      case 'primary':
      default:
        return {
          container: {
            backgroundColor: colors.primary,
            borderRadius: radii.pill,
            paddingVertical: 11,
            paddingHorizontal: 22,
          },
          text: {
            ...typography.body,
            color: colors.onPrimary,
          },
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.95} // System-wide micro-interaction (scale roughly translates to this feel in RN without reanimated)
      style={[variantStyles.container, style]}
    >
      <Text style={[variantStyles.text, { textAlign: 'center' }]}>{title}</Text>
    </TouchableOpacity>
  );
};
