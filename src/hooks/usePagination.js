import { useMemo } from "react";

export default function usePagination(totalPages) {
    let result = useMemo( ()=>{
        let result = []
        for (let i = 1; i <= totalPages; i++) {
            result.push(i)
        }
        return result
    }, [totalPages]) 

    return [result]
}