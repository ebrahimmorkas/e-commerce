import React, {useState} from 'react'
import SearchContext from './SearchContext'

const SearchContextProvider = (props) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearchBar = () => {
        console.log("Cliclkerd")
        setIsSearchVisible(!isSearchVisible)
    }
  return (
    <SearchContext.Provider value={{isSearchVisible, toggleSearchBar}}>
        {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider