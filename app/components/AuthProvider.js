'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for token in localStorage on mount
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      const token = localStorage.getItem('auth-token');
      if (token) {
        // In a real app, you'd verify the token with your API
        // For now, we'll just assume it's valid
        setUser({ token });
        // Also set it in cookies for middleware
        document.cookie = `auth-token=${token}; path=/; max-age=86400`; // 24 hours
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = (token, userData = {}) => {
    // Store token in localStorage
    localStorage.setItem('auth-token', token);
    
    // Store token in cookies for middleware
    document.cookie = `auth-token=${token}; path=/; max-age=86400`; // 24 hours
    
    // Set user in state
    setUser({ token, ...userData });
    
    // Redirect to dashboard
    router.push('/dashboard');
  };

  const logout = () => {
    // Clear localStorage
    localStorage.removeItem('auth-token');
    
    // Clear cookies
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    
    // Clear user state
    setUser(null);
    
    // Redirect to login
    router.push('/auth/login');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}