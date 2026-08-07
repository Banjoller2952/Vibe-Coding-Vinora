import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { useTheme } from '../src/theme/ThemeContext';
import { ThemeToggle } from '../src/components/ThemeToggle';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const { isDark, tokens, colors } = useTheme();
  const { width, height } = useWindowDimensions();

  const isWide = width >= 768;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)/dashboard');
  };

  // Google Logo Icon using pure React Native components
  const GoogleIcon = () => (
    <View style={{ marginRight: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#4285F4' }}>G</Text>
    </View>
  );

  // Sparkle Icon in Left Pane Logo
  const SparkleIcon = () => (
    <View>
      <Text style={{ color: isDark ? '#225A39' : '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>✦</Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#0B0D12' : '#FFFFFF' }]}>
      <View style={[styles.contentWrapper, { flexDirection: isWide ? 'row' : 'column' }]}>
        {/* Left Pane (Hero / Branding) */}
        <View
          style={[
            styles.leftPane,
            {
              width: isWide ? '50%' : '100%',
              backgroundColor: isDark ? '#362C1A' : '#F5F2EA',
              paddingHorizontal: isWide ? 64 : 28,
              paddingVertical: isWide ? 56 : 36,
            },
          ]}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: isDark ? 'rgba(138, 105, 50, 0.15)' : 'rgba(242, 226, 194, 0.3)',
            }}
          />

          {/* Top Logo */}
          <View style={styles.logoContainer}>
            <View
              style={[
                styles.logoIconCircle,
                {
                  backgroundColor: isDark ? '#FFFFFF' : '#225A39',
                },
              ]}
            >
              <SparkleIcon />
            </View>
            <Text style={[styles.logoText, { color: isDark ? '#FFFFFF' : '#0B0D12' }]}>
              Vinora
            </Text>
          </View>

          {/* Center Copy */}
          <View style={styles.heroTextContainer}>
            <Text style={[styles.heroHeadline, { color: isDark ? '#FFFFFF' : '#0B0D12' }]}>
              Where did it come{'\n'}from, where did it go.
            </Text>
            <Text style={[styles.heroSubtitle, { color: isDark ? '#D5D7DA' : '#535862' }]}>
              A calm ledger for income, spending and savings goals. No noise, no gamification — just a clear view of your month.
            </Text>
          </View>

          {/* Footer Tagline */}
          <View style={styles.footerContainer}>
            <Text style={[styles.footerTagline, { color: isDark ? '#A3A7AE' : '#717680' }]}>
              CALM BY DESIGN
            </Text>
          </View>
        </View>

        {/* Right Pane (Form Area) */}
        <View
          style={[
            styles.rightPane,
            {
              width: isWide ? '50%' : '100%',
              backgroundColor: isDark ? '#0B0D12' : '#FFFFFF',
              paddingHorizontal: isWide ? 64 : 28,
              paddingVertical: isWide ? 56 : 36,
            },
          ]}
        >
          {/* Floating Theme Toggle button in top right corner */}
          <View style={styles.themeTogglePosition}>
            <ThemeToggle />
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.keyboardAvoid}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.formContainer}>
                {/* Form Title & Subtitle */}
                <Text style={[styles.formTitle, { color: isDark ? '#FFFFFF' : '#0B0D12' }]}>
                  Welcome back
                </Text>
                <Text style={[styles.formSubtitle, { color: isDark ? '#98A2B3' : '#535862' }]}>
                  Sign in to pick up where you left off.
                </Text>

                {/* Google Sign In Button */}
                <TouchableOpacity
                  style={[
                    styles.googleButton,
                    {
                      backgroundColor: isDark ? '#0B0D12' : '#FFFFFF',
                      borderColor: isDark ? '#252B37' : '#D5D7DA',
                    },
                  ]}
                  activeOpacity={0.8}
                >
                  <GoogleIcon />
                  <Text
                    style={[
                      styles.googleButtonText,
                      { color: isDark ? '#FFFFFF' : '#181D27' },
                    ]}
                  >
                    Sign in with Google
                  </Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                  <View
                    style={[
                      styles.dividerLine,
                      { backgroundColor: isDark ? '#252B37' : '#E9EAEB' },
                    ]}
                  />
                  <Text
                    style={[
                      styles.dividerText,
                      { color: isDark ? '#717680' : '#717680' },
                    ]}
                  >
                    OR
                  </Text>
                  <View
                    style={[
                      styles.dividerLine,
                      { backgroundColor: isDark ? '#252B37' : '#E9EAEB' },
                    ]}
                  />
                </View>

                {/* Email Field */}
                <View style={styles.inputGroup}>
                  <Text style={[styles.inputLabel, { color: isDark ? '#F5F5F5' : '#181D27' }]}>
                    Email
                  </Text>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        backgroundColor: isDark ? '#0B0D12' : '#FFFFFF',
                        borderColor: isEmailFocused
                          ? colors.primaryFocus || '#0071e3'
                          : isDark
                          ? '#252B37'
                          : '#D5D7DA',
                        color: isDark ? '#FFFFFF' : '#181D27',
                      },
                    ]}
                    placeholder="yours@example.com"
                    placeholderTextColor={isDark ? '#535862' : '#A3A7AE'}
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                {/* Password Field */}
                <View style={styles.inputGroup}>
                  <Text style={[styles.inputLabel, { color: isDark ? '#F5F5F5' : '#181D27' }]}>
                    Password
                  </Text>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        backgroundColor: isDark ? '#0B0D12' : '#FFFFFF',
                        borderColor: isPasswordFocused
                          ? colors.primaryFocus || '#0071e3'
                          : isDark
                          ? '#252B37'
                          : '#D5D7DA',
                        color: isDark ? '#FFFFFF' : '#181D27',
                      },
                    ]}
                    placeholder="At least 8 characters"
                    placeholderTextColor={isDark ? '#535862' : '#A3A7AE'}
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                    secureTextEntry
                  />
                </View>

                {/* Submit Sign In Button */}
                <TouchableOpacity
                  style={[styles.primaryButton, { backgroundColor: '#225A39' }]}
                  onPress={handleLogin}
                  activeOpacity={0.85}
                >
                  <Text style={styles.primaryButtonText}>Sign in</Text>
                </TouchableOpacity>

                {/* Footer Signup Link */}
                <View style={styles.signupContainer}>
                  <Text
                    style={[
                      styles.signupText,
                      { color: isDark ? '#98A2B3' : '#717680' },
                    ]}
                  >
                    New to Vinora?{' '}
                  </Text>
                  <TouchableOpacity onPress={() => router.push('/register')}>
                    <Text
                      style={[
                        styles.signupLink,
                        { color: isDark ? '#FFFFFF' : '#181D27' },
                      ]}
                    >
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    minHeight: '100%' as any,
  },
  leftPane: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2,
  },
  logoIconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily: Platform.OS === 'web' ? 'SF Pro Display, system-ui, -apple-system, sans-serif' : undefined,
    letterSpacing: -0.3,
  },
  heroTextContainer: {
    marginVertical: 40,
    zIndex: 2,
  },
  heroHeadline: {
    fontSize: 40,
    fontWeight: '600',
    fontFamily: Platform.OS === 'web' ? 'SF Pro Display, system-ui, -apple-system, sans-serif' : undefined,
    lineHeight: 46,
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    marginTop: 16,
    maxWidth: 440,
    fontFamily: Platform.OS === 'web' ? 'SF Pro Text, system-ui, -apple-system, sans-serif' : undefined,
  },
  footerContainer: {
    zIndex: 2,
  },
  footerTagline: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  rightPane: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  themeTogglePosition: {
    position: 'absolute',
    top: 24,
    right: 24,
    zIndex: 10,
  },
  keyboardAvoid: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    paddingVertical: 20,
  },
  formTitle: {
    fontSize: 32,
    fontWeight: '600',
    letterSpacing: -0.4,
    marginBottom: 8,
    fontFamily: Platform.OS === 'web' ? 'SF Pro Display, system-ui, -apple-system, sans-serif' : undefined,
  },
  formSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 28,
    fontFamily: Platform.OS === 'web' ? 'SF Pro Text, system-ui, -apple-system, sans-serif' : undefined,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderWidth: 1,
    borderRadius: 9999,
    marginBottom: 24,
    cursor: Platform.OS === 'web' ? 'pointer' : 'default',
  } as any,
  googleButtonText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Platform.OS === 'web' ? 'SF Pro Text, system-ui, -apple-system, sans-serif' : undefined,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    paddingHorizontal: 14,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: Platform.OS === 'web' ? 'SF Pro Text, system-ui, -apple-system, sans-serif' : undefined,
  },
  input: {
    height: 46,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 15,
    outlineStyle: Platform.OS === 'web' ? 'none' : undefined,
  } as any,
  primaryButton: {
    height: 48,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
    cursor: Platform.OS === 'web' ? 'pointer' : 'default',
  } as any,
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: Platform.OS === 'web' ? 'SF Pro Text, system-ui, -apple-system, sans-serif' : undefined,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
  },
  signupLink: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
