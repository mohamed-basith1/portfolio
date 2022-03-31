import React from 'react'
import './Loading.css'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'

const Loading = () => {
  return (
    <div className="loading">
      <div className="loadimg">
        <div className="svg">
          <Bounce left>
            <img className="svgfile" src="sunglass.svg" alt="" />
          </Bounce>
          <Bounce top cascade>
            <p className="firstlogo">{'</>'}</p>
            <p className="secondlogo">{'</>'}</p>
          </Bounce>
        </div>
        <p>
          <Zoom left cascade>
            <Zoom left cascade>
              Basith
            </Zoom>
          </Zoom>
        </p>
      </div>
    </div>
  )
}

export default Loading
