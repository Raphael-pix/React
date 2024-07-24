import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const featuredFlagsContext = createContext(null)

export default function FeaturedFlagGlobalState({children}){
   const [loading,setLoading]=useState(false)
   const [enabledFlags,setEnebaledFlags]=useState({})

    async function fetchFeaturedFlags(){
        try{
            setLoading(true)

            const response =await featureFlagsDataServiceCall()
            setEnebaledFlags(response)
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            throw new Error(err)
        }
    }

   useEffect(()=>{
    fetchFeaturedFlags()
   },[])
   
   return <featuredFlagsContext.Provider value={{loading,enabledFlags}}>
            {children}
        </featuredFlagsContext.Provider>

}