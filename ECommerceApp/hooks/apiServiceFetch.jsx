import { View, Text } from 'react-native'
import React, { use, useCallback, useEffect, useState } from 'react'
import {useNetworkConfig} from "../hooks/NetworkConfigProvider"

const useApiServiceFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    
    const useGet = useCallback(async (route) => {
        console.log(route)
        try{
            setIsLoading(true); // setting is loading flag when fetching data and unset if fetching is over
            const response = await fetch(`${route}`,{
                headers: {
                    "Content-Type":"application/json"
                },
            }); // fetching up data using provided url
            console.log("LOG: Successfully Get element in the database table!, function : useGet");
            return (await response.json()); // setting up the promise data or return data
        }catch(error){
            console.log("LOG: Failed to Get element in the database table, function: useGet");
            setError(error); // setting up the error returned while fetching data
        }finally{
            setIsLoading(false); // unsetting the isloading flag
        }
    }, []);

    const usePost = useCallback(async (route, body) => {
        try{
            setIsLoading(true); // setting is loading flag when fetching data and unset if fetching is over
            const response = await fetch(route,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(body)
            }); // fetching up data using provided url
            console.log("LOG: Successfully Posted element in the database table!, function : usePost")
            return (await response.json()); // setting up the promise data or return data
        }catch(error){
            console.log("LOG: Failed to Post element in the database table, function: usePost");
            setError(error); // setting up the error returned while fetching data
        }finally{
            setIsLoading(false); // unsetting the isloading flag
        }
    }, []);

    return ({useGet, usePost})
}

export default useApiServiceFetch;