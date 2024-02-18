import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchFrom from '../SearchFrom/SearchFrom'
import './Header.css'
const Header = () => {
  return (
    <>
       <div className="holdre">
          <header className='header'>
            <Navbar/>
            <div className="header-content flex flex-c text-center text-white">
                <h2 className="header-titel text-capitalize">
                    find your book of choice
                </h2><br />
                <p className="header-text fs-18 fw-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, vero ullam nihil a laboriosam ratione dolores eum eius veniam. Sit fugiat necessitatibus quia fuga explicabo!</p>
                <SearchFrom/>
            </div>
          </header>
       </div>
    </>
  )
}

export default Header