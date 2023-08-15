import React, { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  auth: any; // Replace 'any' with the appropriate type for your authentication data
  setAuth: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the appropriate type for your setAuth function
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
