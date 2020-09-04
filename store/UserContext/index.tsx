import React, { createContext } from "react";

// import { Container } from './styles';

type ContextProps = {
  authenticated: boolean;
  name: string;
  email: string;
  password: string;
};

const UserAuth = createContext<Partial<ContextProps>>({});

const UserContext: React.FC = ({ children }) => {
  return (
    <UserAuth.Provider
      value={{
        authenticated: false,
        name: null,
        email: null,
        password: null,
      }}
    >
      {children}
    </UserAuth.Provider>
  );
};

export { UserContext, UserAuth };
