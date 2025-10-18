import { createContext, useContext, useState, type PropsWithChildren } from "react";
import { type AuthStatus, type AuthState, type User } from "../types/authContextTypes";

const USER_LIST: User[] = [
  {
    name: "Enrique",
    email: "enrique@gmail.com",
    id: 1,
    password: "1234"
  },
  {
    name: "Julio",
    email: "julio@gmail.com",
    id: 2,
    password: "1234"
  },
]

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatus>("unauthenticated")
  const [user, setUser] = useState<User>()

  function signIn(email: string, password: string) {
    const usersFound = USER_LIST.filter(
      (value) => email === value.email && password === value.password
    )
    setStatus("checking")
    if (usersFound.length > 0) {
      setUser(usersFound[0])
      setTimeout(
        () => setStatus("authenticated"),
        3000
      )
    }
    else {
      setTimeout(
        () => setStatus("unauthenticated"),
        3000
      )
    };
  }



  return (<AuthContext.Provider
    value={{
      status: status,
      isChecking: status === "checking",
      isAuthenticated: status === "authenticated",
      user,
      signIn
    }}
  >
    {children}
  </AuthContext.Provider>
  );
};