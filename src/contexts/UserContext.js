import { createContext, useEffect, useState } from "react";
import { shopName } from "../services/api";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const local = shopName;
  
  function setValue(value) {
    const item = window.localStorage.getItem(local);
    
    if(item && value === undefined) {
      const obj = JSON.parse(item);
      setUserData({ ...userData, ...obj });
      return { ...userData, ...obj };
    };
    if(value) {
      window.localStorage.setItem(local, JSON.stringify(value));
      setUserData({ ...userData, ...value });
    }
    return { ...userData };
  }

  return (
    <UserContext.Provider value={{ setValue, userData }}>
      {children}
    </UserContext.Provider>
  );
}
