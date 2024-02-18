import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import LogoImg from '../../images/logo.png'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
// import {BsFillCartCheckFill} from 'react-icons/bs'

const Navbar = () => {
  const [toggleMenu , settoggleMenu] = useState(false)
  const handelNavbar =() => settoggleMenu(!toggleMenu)
  return (
    <nav className='navbar' id='navbar'>
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to='/' className='navbar-brand flex'>
            <img src={LogoImg} alt="site logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1">
              BookStore
            </span>
          </Link>
          <button type='button' className='navbar-toggler-btn' onClick={handelNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{color:`${toggleMenu ? '#fff' : '#010101'}`}}/>
          </button>
        </div>
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className='navbar-nav'>
            <li className="nav-item">
              <Link to='book' className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='about' className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                about
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link to='about' className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>
                <BsFillCartCheckFill size={20} className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' />
              </Link> */}
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar