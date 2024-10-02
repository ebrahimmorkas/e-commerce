import React, { useState, useEffect, useContext } from 'react';
import ShopContext from '../context/ShopContext';
import SearchContext from '../context/SearchContext'

const SearchBar = () => {
  // const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const {isSearchVisible, toggleSearchBar} = useContext(SearchContext)

 

  // Clear the search input
  const clearSearchInput = () => {
    setSearchTerm('');
  };

  // Close the search bar when the user scrolls
  const handleScroll = () => {
    if (isSearchVisible) {
      // setIsSearchVisible(false);
      console.log('Hui')
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSearchVisible]);

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log('Search for:', searchTerm);
  };

  return (
    <div className="bg-blueGray-50">
      {/* Search Icon in Navbar */}
      {/* <button onClick={toggleSearchBar} className="text-xl p-2">
        🔍
      </button> */}

      {/* Search Bar */}
      {isSearchVisible && (
        <div className="fixed top-16 left-0 w-full bg-white z-50 bg-blueGray-50">
          <form
            onSubmit={handleSearch}
            className="flex items-center justify-center max-w-4xl mx-auto p-4 relative"
          >
            {/* Input Field with Backspace Icon Inside */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 pr-10"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearchInput}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 focus:outline-none"
                >
                  ⌫
                </button>
              )}
            </div>

            <button type="submit" className="ml-4 text-xl p-2 focus:outline-none">
              🔍
            </button>

            {/* Close Search Bar Button */}
            <button onClick={toggleSearchBar} className="ml-4 text-xl p-2 focus:outline-none">
              ❌
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
