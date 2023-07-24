import { useState } from "react";

export default function useFetching(callback) {
    const [isLoader, setIsLoader] = useState(false)
    const [error, setError] = useState('')

    
    async function fetching(){
        try {
            setIsLoader(true)

            // artificial delay
            // await new Promise((resolve) => setTimeout(resolve, 1500));

            await callback() 
                          
        } catch (error) {
            setError(error.message)
        } finally{
            setIsLoader(false)
        }
    }

    return [fetching, isLoader, error]
}
