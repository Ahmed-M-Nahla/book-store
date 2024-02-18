import React , {useRef,useEffect} from 'react'
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import './SearchFrom.css'
const SearchFrom = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(()=>searchText.current.focus(),[]);
  const handelSubmit = (e)=>{
    e.preventDefault();
    let tempSearchTerm= searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm('Find the book you want')
      setResultTitle('please Enter Something')
    }else{
      setSearchTerm(searchText.current.value)
    }
    navigate("/book")
  }
  return (
    <div className='search-form'>
    <div className='container'>
      <div className='search-form-content'>
        <form className='search-form' onSubmit={handelSubmit}>
          <div className='search-form-elem flex flex-sb bg-white'>
            <input type = "text" className='form-control' placeholder='Find the book you want ...'ref={searchText}/>
            <button type = "submit" className='flex flex-c' onClick={handelSubmit}>
              <FaSearch className='text-purple' size = {32} />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SearchFrom