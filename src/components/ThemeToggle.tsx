import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { isDark, setThemeMode, themeMode } = useTheme();

  const toggleTheme = () => {
    setThemeMode(isDark ? 'light' : 'dark');
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)',
          borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.12)',
        },
      ]}
      onPress={toggleTheme}
      activeOpacity={0.7}
      accessibilityLabel="Toggle Light/Dark Theme"
    >
      <Text style={styles.icon}>{isDark ? '☀️' : '🌙'}</Text>
      <Text
        style={[
          styles.text,
          { color: isDark ? '#FFFFFF' : '#181D27' },
        ]}
      >
        {isDark ? 'Light' : 'Dark'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    cursor: Platform.OS === 'web' ? 'pointer' : 'default',
  } as any,
  icon: {
    fontSize: 14,
    marginRight: 6,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
  },
});
