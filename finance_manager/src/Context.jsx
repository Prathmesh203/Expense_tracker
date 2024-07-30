import { useContext,createContext, useState } from "react";
import React from 'react'

export const userContext = createContext(null);

export function Context({children}) {
    
    const[username,setusername]=useState('User!!');
    const[Expences,setexpences]=useState([]);
    const [showContent,setContent] = useState(false);
    const [Budget, setBudget] = useState("")
    
   return (
    <userContext.Provider value={{username,Expences,setusername,setexpences,showContent,setContent,Budget,setBudget}}>
        {children}
    </userContext.Provider>
   )
 }
  export function useUserContext(){
    const expences = useContext(userContext);
    return expences;
  }
 
 