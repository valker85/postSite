import React from 'react'
import usePagination from '../../../hooks/usePagination'

export default function Pagination({setPage, totalPages}) {
    const [pagesArr] = usePagination(totalPages)

    return (
        <div>
        {
            pagesArr.map((page)=>{
                return <span 
                    key={page}
                    style={{padding: '5px 10px', cursor: 'pointer', border: '1px solid black'}}
                    onClick={()=>{setPage(page)}}
                >
                    {page}
                </span>
            })
        }
        </div>
    )
}
