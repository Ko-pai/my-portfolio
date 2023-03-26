import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import { Person } from '@material-ui/icons'
import Maxwidth from '../maxwidthMenu/maxWidth'

 
import "./TopBar.scss"
import { SvgIcon } from '@material-ui/core'
import { useState} from 'react'

function TopBar({menuOpen,setMenu,prop}) {
  

  return (
    <div  className={"topBar " + (menuOpen && "active")} >
      <div className="wrapper">
      <div className="left">
         <a href="#intro" className='lernon'>PAI.</a>
            
          <div className="iconContainer1" onClick={()=>{window.alert("Phone Number is: 09-444-555-221")}}>
            <FontAwesomeIcon className='icon' icon={faUser} />
            <span className='phone1'>
               +959-444-555-221 
            </span>
            <span className='phone2'  >
               Phone
            </span>
          </div>
          <div className="iconContainer2" >
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
            <span className='email1'>ptkyaw1998@gmail.com</span>
            <span className='email2'  onClick={()=>{window.alert(`Email is kyawp8217@gmail.com .`)}}>Email</span>
          </div>
      </div>
        <div className='right'>
          <Maxwidth />
          
          <div className='hamburger '   onClick={()=>setMenu(!menuOpen)} >
             <span className='line1'></span>
             <span className='line2'></span>
             <span className='line3'></span>
          </div>
         
        </div>
      
      </div>
    </div>
  )
}

export default TopBar