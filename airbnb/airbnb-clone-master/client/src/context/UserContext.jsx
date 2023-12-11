import {createContext, useEffect, useState} from "react";
import { userInstance } from "../apiCalls/axiosInstance";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      userInstance.get('/api/profile').then(({data}) => {
        setUser(data);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  );
}