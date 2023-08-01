import React from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
};

const AuthContext = React.createContext<AuthContextValue>({
  isLoggedIn: false,
});

export default AuthContext;
