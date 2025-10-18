export type AuthStatus = "checking" | "authenticated" | "unauthenticated";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isAuthenticated: boolean;
  isChecking: boolean;
  signIn: (email: string, password: string) => void;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
