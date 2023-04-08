import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped';

const Intro = () => {

  const textRef = useRef();
  useEffect(() => {
init(textRef.current ,
  {
     showCursor:true,
     backDelay:1500,
     strings:['Developer', 'Designer']
  })

  }, [])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img
            src='assest/man.png'
            alt="not found" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Hi There , I'am </h1>
          <h2>shaw kunal</h2>
          <h3>web <span ref={textRef}>Developer</span></h3>
        </div>

        <a href="#portfolio">
          <img src="assest/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro