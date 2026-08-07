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

export default function RegisterScreen() {
  const router = useRouter();
  const { isDark, tokens, colors } = useTheme();
  const { width } = useWindowDimensions();

  const isWide = width >= 768;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleRegister = () => {
    router.replace('/(tabs)');
  };

  // SVG Google Logo Icon
  const GoogleIcon = () => (
    <View style={{ marginRight: 10 }}>
      {Platform.OS === 'web' ? (
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4"/>
              <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853"/>
              <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29H0.957275V4.95818C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
              <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
            </svg>`,
          }}
        />
      ) : (
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#4285F4' }}>G</Text>
      )}
    </View>
  );

  // Sparkle Icon in Left Pane Logo
  const SparkleIcon = () => (
    <View>
      {Platform.OS === 'web' ? (
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C12 7.97 16.03 12 21 12C16.03 12 12 16.03 12 21C12 16.03 7.97 12 3 12C7.97 12 12 7.97 12 3Z" stroke="${isDark ? '#225A39' : '#FFFFFF'}" stroke-width="1.8" stroke-linejoin="round"/>
            </svg>`,
          }}
        />
      ) : (
        <Text style={{ color: isDark ? '#225A39' : '#FFFFFF', fontSize: 18 }}>✦</Text>
      )}
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
          {/* Radial Glow overlay */}
          {Platform.OS === 'web' && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: isDark
                  ? 'radial-gradient(circle at 75% 50%, rgba(138, 105, 50, 0.35) 0%, rgba(54, 44, 26, 0) 75%)'
                  : 'radial-gradient(circle at 75% 50%, rgba(242, 226, 194, 0.6) 0%, rgba(245, 242, 234, 0) 70%)',
                pointerEvents: 'none',
              }}
            />
          )}

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
          {/* Floating Theme Toggle button */}
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
                  Create your account
                </Text>
                <Text style={[styles.formSubtitle, { color: isDark ? '#98A2B3' : '#535862' }]}>
                  A minute to set up, a clearer month ahead.
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

                {/* Name Field */}
                <View style={styles.inputGroup}>
                  <Text style={[styles.inputLabel, { color: isDark ? '#F5F5F5' : '#181D27' }]}>
                    Name
                  </Text>
                  <TextInput
                    style={[
                      styles.input,
                      {
                        backgroundColor: isDark ? '#0B0D12' : '#FFFFFF',
                        borderColor: isNameFocused
                          ? colors.primaryFocus || '#0071e3'
                          : isDark
                          ? '#252B37'
                          : '#D5D7DA',
                        color: isDark ? '#FFFFFF' : '#181D27',
                      },
                    ]}
                    placeholder="John Doe/Jane Doe"
                    placeholderTextColor={isDark ? '#535862' : '#A3A7AE'}
                    value={name}
                    onChangeText={setName}
                    onFocus={() => setIsNameFocused(true)}
                    onBlur={() => setIsNameFocused(false)}
                    autoCapitalize="words"
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

                {/* Submit Sign Up Button */}
                <TouchableOpacity
                  style={[styles.primaryButton, { backgroundColor: '#225A39' }]}
                  onPress={handleRegister}
                  activeOpacity={0.85}
                >
                  <Text style={styles.primaryButtonText}>Sign up</Text>
                </TouchableOpacity>

                {/* Footer Signin Link */}
                <View style={styles.signupContainer}>
                  <Text
                    style={[
                      styles.signupText,
                      { color: isDark ? '#98A2B3' : '#717680' },
                    ]}
                  >
                    Already have an account?{' '}
                  </Text>
                  <TouchableOpacity onPress={() => router.push('/')}>
                    <Text
                      style={[
                        styles.signupLink,
                        { color: isDark ? '#FFFFFF' : '#181D27' },
                      ]}
                    >
                      Sign in
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
