import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initState = { isAuthenticated: false };
function reducer() {}
function AuthProvider({ children }) {
  const [{ isAuthenticated }, dispatch] = useReducer(reducer, initState);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
function useAuth() {
  return useContext(AuthContext);
}
export { AuthProvider, useAuth };
