import { createContext, useCallback } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);

  const login = useCallback(async (credentials) => {
    try {
      if (!credentials.email || !credentials.password) {
        toast.error('Please enter email and password');
        return false;
      }

      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: credentials.email.split('@')[0],
        email: credentials.email,
      };

      setUser(mockUser);
      toast.success(`Welcome back, ${mockUser.name}!`);
      return true;
    } catch (error) {
      toast.error('Login failed. Please try again.');
      return false;
    }
  }, [setUser]);

  const register = useCallback(async (credentials) => {
    try {
      if (!credentials.name || !credentials.email || !credentials.password) {
        toast.error('Please fill all fields');
        return false;
      }

      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: credentials.name,
        email: credentials.email,
        phone: credentials.phone || '',
      };

      setUser(mockUser);
      toast.success(`Welcome, ${mockUser.name}!`);
      return true;
    } catch (error) {
      toast.error('Registration failed. Please try again.');
      return false;
    }
  }, [setUser]);

  const logout = useCallback(() => {
    setUser(null);
    toast.success('Logged out successfully');
  }, [setUser]);

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
