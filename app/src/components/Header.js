import React from 'react'
import '../styles/Header.css'
import earthImage from '../images/smiling-earth.jpg'
import cartImage from '../images/cart.png'
import profileImage from '../images/profile.png'
import searchImage from '../images/search.png'

function Header({searchTerm, setSearchTerm, handleSearch}) {

  const handleSearchChange=(e) =>{
    handleSearch(e.target.value);
  }

  const handleSearchClick=(e)=>{
    if(e.key==="Enter"){
      handleSearch(e.target.value);
    }
  }
  return (
    <header>
        <img src={earthImage} alt="Earth" className="earth-image"></img>
        <b>Earth Store</b>
        
        <div className='search-box'>
            <input 
              type="text" 
              placeholder='Search anything on Earth...' 
              className='search-box input'
              onChange={handleSearchChange}
            />
            <button 
              className='search-image button'
              onClick={handleSearchClick}
              >
                <img src={searchImage} alt="Search" className="search-image"></img>
            </button>
        </div>
        
        <img src={cartImage} alt='Cart' className="cart-image"></img>
        <img src={profileImage} alt='Profile' className="profile-image"></img>
    </header>
  )
}

export default Header