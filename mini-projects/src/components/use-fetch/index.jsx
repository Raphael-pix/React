import { useEffect, useState } from "react";



export default function useFetch(url,options={}){

    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)


    async function fetchData(){
        setLoading(true)
        try{
            const response = await fetch(url,{...options})
            if(!response.ok)throw new Error(response.statusText)

            const result = await response.json()
            setData(result)
            setError(null)
            setLoading(false)

        }catch(err){
            setError(`${err},some error occurred`)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[url])

    return {data,error,loading}
}