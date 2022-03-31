import React from 'react'
import './Blur.css'

const Blur = ({ click, active }) => {
  return (
    <div
      className={`${active ? 'blur ' + 'active' : 'blur'}`}
      onClick={click}
    ></div>
  )
}

export default Blur
