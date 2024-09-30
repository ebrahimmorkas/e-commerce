import React, { useEffect, useState } from 'react'
import ShopContext from './ShopContext'

const ShopContextProvider = (props) => {
    const [filters, setFilters] = useState([])
    const updateFilters = (category) => {
        // setFilters((prevFilters) => {
        //     // const isEmpty = filters.length > 0 ? false : true
        //     // if(filters.includes(category)) {
        //         //     // Remove the category as it has been unchecked
        //         //     prevFilters.filter((item) => item !== category)
        //         // }
        //         // else {
        //             // Category iks not present in the array it has been checked
        //             [...prevFilters, category]
        //             console.log(`Function calledhfggerrfertfe5rtg ${category}`)
        //     // }
        // })
        // setFilters([category])
        if(filters.includes(category)) {
            // The category has already been checked and user is unchecking it so remove it from filters
            setFilters((prevFilters) => {
                return prevFilters.filter((item) => item!==category)
            })
        } else {
            // The user is checking the category and add it to the filters.
            setFilters((prevFilters) => [...prevFilters, category])
        }
    }
    useEffect(() => {
        console.log(`filters: ${filters}`)
    }, [filters])

return (
    <ShopContext.Provider value={{filters, updateFilters}}>
        {props.children}
    </ShopContext.Provider>
)
}

export default ShopContextProvider