import React, { useEffect, useState } from 'react'
import ShopContext from './ShopContext'

const ShopContextProvider = (props) => {
    const [filters, setFilters] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])

    const updateCartProducts = (product) => {
        // Logic to add products in cart
        console.log("Add to cart")
        setCartProducts([...cartProducts, product])
    }

    // This useEffect has been written to fetch the data
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const res = await fetch('http://localhost:3000/products')
                const data = await res.json()
                setProducts(data)
                setFilteredProducts(data)
            } catch(e) {
                console.log(`Error fetching the data ${e}`)
            }
        }
        fetchProducts()
    }, [])

    // This function will be called when the filters are checked or unchecked
    const updateFilters = (category) => {
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

    // UseEffect that will actually filter out the data
    useEffect(() => {
        console.log(`filters: ${filters}`)
        if(products.length > 0) {
            // Data has been fetched
            // console.log("Data present")

            // In the below line logic is: If the filters array state length is zero then return all the products and if it nopt zero then check whether the category of the product is present or not in the filters array and is it is present then return that product.
            const selectedCategoryProducts = filters.length === 0 ? products : products.filter(product => filters.includes(product.category))
            // const selectedCategoryProducts = filters.length == 0 ? console.log('Zero') : console.log('Not')
            // console.log(selectedCategoryProducts)
            setFilteredProducts(selectedCategoryProducts)
            // console.log(products)
        }
    }, [filters, products])

    // useEffect(() => {console.log(filteredProducts)}, [filteredProducts])

return (
    <ShopContext.Provider value={{filters, updateFilters, filteredProducts, products, cartProducts, updateCartProducts}}>
        {props.children}
    </ShopContext.Provider>
)
}

export default ShopContextProvider