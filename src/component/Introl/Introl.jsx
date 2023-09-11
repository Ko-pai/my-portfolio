import "./introl.scss"
import { init } from 'ityped' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef } from "react"

function Introl() {
  const textName = useRef()
  useEffect(() =>{
    init(
      textName.current,
      { 
        showCursor : true ,
        backDelay : 1500,
        backSpeed: 100,
        strings :["Web Developer","Front-end Developer","Web developer"]
      })
  },[])
  return (
    <div className="introl" id="intro">
      
        <div className="left">
          <div className="imgContainer">
            <img src="assest/FB_IMG_1657980323077.jpg" alt="my-profile" />
          </div>
        </div>
      
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Pai Thet Kyaw</h1>
          <h3>Freelance <span ref={textName}></span></h3>
          
          <a href="#portfolio">
            <FontAwesomeIcon icon={faAngleDown}  className="angleDown"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Introl