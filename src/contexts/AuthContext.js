import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { ref, get, set } from 'firebase/database';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('farmUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const usersRef = ref(db, 'users');
      const snapshot = await get(usersRef);
      const users = snapshot.val();

      if (users) {
        const userEntry = Object.values(users).find(
          (u) => u.email === email && u.password === password
        );

        if (userEntry) {
          setUser(userEntry);
          localStorage.setItem('farmUser', JSON.stringify(userEntry));
          return { success: true };
        }
      }
      return { success: false, message: 'Invalid credentials' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const register = async (name, email, password) => {
    if (!name || !email || !password) {
      return { success: false, message: 'All fields are required' };
    }

    try {
      const usersRef = ref(db, 'users');
      const snapshot = await get(usersRef);
      const users = snapshot.val() || {};

      // Check if email already exists
      const exists = Object.values(users).some((u) => u.email === email);
      if (exists) return { success: false, message: 'Email already registered' };

      const id = Date.now().toString();
      const newUser = { id, name, email, password };

      await set(ref(db, `users/${id}`), newUser);

      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('farmUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
