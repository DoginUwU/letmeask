import { useContext } from 'react';
import { AuthContext, AuthState } from '../contexts/AuthContext';

const useAuth = (): AuthState => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};

export default useAuth;
