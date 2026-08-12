import { useState, useCallback, useRef } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { UserProfile } from '../components/LoginForm';

interface UseGoogleAuthOptions {
  onSuccess: (user: UserProfile) => void;
  onError?: (errorMsg: string) => void;
}

export function useGoogleAuth({ onSuccess, onError }: UseGoogleAuthOptions) {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const rawClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
  const isClientIdValid =
    Boolean(rawClientId) &&
    !rawClientId.includes('your-google-client-id') &&
    rawClientId.endsWith('.apps.googleusercontent.com');

  const clearSafetyTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleOAuthSuccess = useCallback(
    async (tokenResponse: { access_token: string }) => {
      clearSafetyTimeout();
      setIsGoogleLoading(true);
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        if (!res.ok) {
          throw new Error(`Google API responded with status ${res.status}`);
        }
        const profile = await res.json();
        onSuccess({
          name: profile.name || profile.given_name || 'Google User',
          email: profile.email,
          avatar: profile.picture,
        });
      } catch (err) {
        console.error('Failed to fetch Google profile', err);
        const errorMsg = 'Failed to retrieve profile from Google. Please try again.';
        if (onError) onError(errorMsg);
        // Fallback to demo modal if API call fails
        setIsModalOpen(true);
      } finally {
        setIsGoogleLoading(false);
      }
    },
    [clearSafetyTimeout, onSuccess, onError]
  );

  const handleOAuthError = useCallback(
    (error: any) => {
      clearSafetyTimeout();
      setIsGoogleLoading(false);
      console.error('Google OAuth Login Error / Popup Closed:', error);
      
      // If native OAuth encounters error or invalid client ID, fall back to interactive demo modal
      setIsModalOpen(true);
    },
    [clearSafetyTimeout]
  );

  // Hook from @react-oauth/google
  const googleLoginNative = useGoogleLogin({
    onSuccess: handleOAuthSuccess,
    onError: handleOAuthError,
  });

  const triggerGoogleLogin = useCallback(() => {
    if (!isClientIdValid) {
      // Client ID is not configured or placeholder -> use fallback Demo Modal
      setIsModalOpen(true);
      return;
    }

    setIsGoogleLoading(true);
    clearSafetyTimeout();

    // Set safety timeout of 12s to recover from unhandled popup close or SDK hangs
    timeoutRef.current = setTimeout(() => {
      setIsGoogleLoading((loading) => {
        if (loading) {
          console.warn('Google login timed out or popup closed. Opening fallback modal.');
          setIsModalOpen(true);
          return false;
        }
        return false;
      });
    }, 12000);

    try {
      googleLoginNative();
    } catch (err) {
      console.error('Synchronous error triggering google login native:', err);
      clearSafetyTimeout();
      setIsGoogleLoading(false);
      setIsModalOpen(true);
    }
  }, [isClientIdValid, clearSafetyTimeout, googleLoginNative]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setIsGoogleLoading(false);
  }, []);

  return {
    isGoogleLoading,
    isModalOpen,
    isClientIdValid,
    triggerGoogleLogin,
    closeModal,
    handleSelectAccount: onSuccess,
  };
}
