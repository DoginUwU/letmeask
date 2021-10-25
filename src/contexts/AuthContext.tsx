import React, { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User as FirebaseUser,
} from 'firebase/auth';
import { auth } from '../services/firebase';
import { User } from '../@types/user';

interface AuthState {
  user: User;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthState>({} as AuthState);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  const handleUser = (firebaseUser: FirebaseUser): void => {
    if (!firebaseUser) return;
    const { uid, displayName, photoURL } = firebaseUser;

    if (!displayName || !photoURL)
      throw new Error('Informações de usuário faltando.');

    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL,
    });
  };

  const signIn = async (): Promise<void> => {
    if (user.id) return;
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      handleUser(result.user);
    } catch (error) {
      throw new Error('Usuário não autenticado.');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, firebaseUser => {
      if (firebaseUser) {
        handleUser(firebaseUser);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
export type { AuthState };
