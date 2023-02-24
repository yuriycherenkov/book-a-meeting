import React, { useState, useContext } from 'react';

type IValues = { [key: string]: string };
interface IAuthContext {
  // userInfo: {};
  firstName: string;
  lastName: string;
  updateContext: () => void;
}

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [context, setContext] = useState<IAuthContext>({
    firstName: 'Yurii',
    lastName: 'Cherenkov',
  } as IAuthContext);

  const updateContext = (values: IValues = {}) => {
    setContext((prev) => ({
      ...prev,
      values,
    }));
  };

  return <AuthContext.Provider value={{ ...context, updateContext }}>{children}</AuthContext.Provider>;
};

const AuthContext = React.createContext<IAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
