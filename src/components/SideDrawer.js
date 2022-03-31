import React, { useState } from 'react'
import './SideDrawer.css'

const SideDrawer = ({ active, click }) => {
  return (
    <div className={`${active ? 'sidedrawer ' + 'active' : 'sidedrawer'} `}>
      <ul className="ullist">
        <li>
          <a className="homee" href="#intro" onClick={click}>
            Home
          </a>
        </li>
        <li>
          <a className="skillss" href="#skills" onClick={click}>
            Skills
          </a>
        </li>

        <li>
          <a className="workss" href="#work" onClick={click}>
            Works
          </a>
        </li>
        <li>
          <a className="aboutt" href="#about" onClick={click}>
            About Me
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideDrawer
