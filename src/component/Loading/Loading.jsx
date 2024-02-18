import React from 'react';
import LoaderImg from "../../images/loader.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loading;