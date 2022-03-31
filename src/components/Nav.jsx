import React from 'react'
import './Nav.css'

const Nav = ({ click, active }) => {
  return (
    <div className="nav">
      <a className="logo" href="#intro">
        <img className="logo" src="logonew.svg" alt="bascode" />
      </a>
      <div
        className={`${active ? 'hamberger ' + 'active' : 'hamberger'}`}
        onClick={click}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  )
}

export default Nav
