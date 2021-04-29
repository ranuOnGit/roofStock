import React from 'react'
import { BsImages } from 'react-icons/bs'
import './Error.css'

const Error = () => {
  return (
    <div className='error-div'>
      <BsImages size={ 400 } className='error-icon'/>
      <h2 className='error-message'>SORRY!  <br/> NO DETAILS AVAILABLE </h2>
    </div>
  )
}

export default Error
