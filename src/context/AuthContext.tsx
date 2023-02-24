import React, { useState, useContext } from "react";

interface IAuthContext {
  userInfo: {};
}

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [context, setContext] = useState<IAuthContext>({} as IAuthContext);

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

const AuthContext = React.createContext<IAuthContext | null>(null);

export const useAuth = () => {
  // const context = useContext(AuthContext);

  // if (!context) {
  //   throw new Error("useAuth must be used within a AuthProvider");
  // }

  // return context.userInfo;
  return { firstName: "Yurii", lastName: "Cherenkov" };
};
