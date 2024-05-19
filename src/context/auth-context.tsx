import { Session } from "@supabase/supabase-js";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { supabase } from "../libs/supabase/config";

const AuthContext = createContext<Session | null | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userSession, setUserSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserSession(session);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  return <AuthContext.Provider value={userSession}>{children}</AuthContext.Provider>;
};

export const useSession = () => useContext(AuthContext);
