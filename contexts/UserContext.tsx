"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useAuth } from "@clerk/nextjs";

// Define the user type
export type UserType = "instructor" | "learner" | null;

interface UserContextValue {
  userType: UserType;
  loading: boolean;
}

const UserContext = createContext<UserContextValue>({
  userType: null,
  loading: true,
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { userId } = useAuth();
  const [userType, setUserType] = useState<UserType>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setUserType(null);
      setLoading(false);
      return;
    }
    setLoading(true);

    // Query API endpoint to determine user type
    fetch("/api/user-type")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user type");
        return res.json();
      })
      .then((data) => {
        setUserType(data.userType);
        setLoading(false);
      })
      .catch(() => {
        setUserType(null);
        setLoading(false);
      });
  }, [userId]);

  return (
    <UserContext.Provider value={{ userType, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
