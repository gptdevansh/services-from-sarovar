"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { UserPreferenceModal } from "../components/UserPreferenceModal";
import type { UserType } from "../types";

type UserContextValue = {
  userType: UserType;
  setUserType: (nextUserType: UserType) => void;
};

export const UserContext = createContext<UserContextValue | undefined>(undefined);

const USER_TYPE_STORAGE_KEY = "corbett-safari-user-type";
const USER_TYPE_SEEN_KEY = "corbett-safari-user-preference-seen";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userType, setUserType] = useState<UserType>("indian");
  const [isPreferenceModalOpen, setIsPreferenceModalOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedUserType = window.localStorage.getItem(USER_TYPE_STORAGE_KEY);
      if (storedUserType === "indian" || storedUserType === "foreigner") {
        setUserType(storedUserType);
      }

      const hasSeenPreference = window.localStorage.getItem(USER_TYPE_SEEN_KEY) === "true";
      setIsPreferenceModalOpen(!hasSeenPreference);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  const handleSetUserType = useCallback((nextUserType: UserType) => {
    setUserType(nextUserType);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(USER_TYPE_STORAGE_KEY, nextUserType);
    }
  }, []);

  const handleClosePreferenceModal = useCallback(() => {
    setIsPreferenceModalOpen(false);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(USER_TYPE_SEEN_KEY, "true");
      window.localStorage.setItem(USER_TYPE_STORAGE_KEY, userType);
    }
  }, [userType]);

  const value = useMemo(
    () => ({ userType, setUserType: handleSetUserType }),
    [handleSetUserType, userType],
  );

  return (
    <UserContext.Provider value={value}>
      {children}
      {isHydrated && (
        <UserPreferenceModal
          open={isPreferenceModalOpen}
          userType={userType}
          onChange={handleSetUserType}
          onClose={handleClosePreferenceModal}
        />
      )}
    </UserContext.Provider>
  );
}
