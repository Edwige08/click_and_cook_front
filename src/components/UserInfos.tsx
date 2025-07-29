"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
  // id: number;
  // firstname: string;
  // lastname: string;
  // email: string;
  username: string;
  created_at: string;
}

interface UserContextType {
  user: User | null;
  error: string | null;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

async function fetchUser(): Promise<User | null> {
  const token = localStorage.getItem("auth_token");
  if (!token) return null;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/user/me/`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Erreur ${response.status}: ${response.statusText}`);
  }

  const data = await response.json();
  return data.user;
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const refreshUser = async () => {
    try {
      setError(null);
      const userData = await fetchUser();
      setUser(userData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Une erreur est survenue";
      setError(errorMessage);
      console.error("Erreur lors de la récupération de l'utilisateur:", errorMessage);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const value: UserContextType = {
    user,
    error,
    refreshUser,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};