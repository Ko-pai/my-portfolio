import { useState , useEffect } from "react";
import "./Contact.scss"



export default function Contact() {
  /*
  const [user,setUser] = useState([]);
  

  useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(json=>{
          setUser(json.data);
        });
  },[])

  */
  return (

    <div className="contact">
        <div className="left">
          <div className="imgContainer">
            <img src="assest/shake.svg" alt="shake" />
          </div>
        </div>
        <div className="right">
            <div className="inputContainer">
              <h2>Contact.</h2>

              <div className="inputBox">
                <input type="text" name="email" placeholder="Email"/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message" className="message"></textarea>
              </div>
            </div>
        </div>
    </div>
  )
}
