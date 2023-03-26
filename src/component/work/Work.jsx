import "./work.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Work() {
  const [currentSlide,setCurrentSlide] = useState(0)
  const data= [
    {
      id : 1,
      img: "https://cdn.dribbble.com/userupload/5128611/file/original-0e263975ca196be052c3ce7eff928d07.png?compress=1&resize=1200x900",
      icon : "assest/image.png",
      title : "Design App",
      para : " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id : 2,
      img: "https://cdn.dribbble.com/users/6274150/screenshots/20096572/media/03710b9fa0a449f6ecd7e75ceccf0816.png?compress=1&resize=840x630&vertical=top",
      icon : "assest/world.png",
      title : "Media Player Mobile App",
      para : "Every laptop or computer system today comes with an already installed and decently functioning video player in it.This is among other legitimate reasons, is why a majority of users choose to download external video playing software instead."
    },
    {
      id : 3,
      img: "https://cdn.dribbble.com/userupload/5130750/file/original-61a2b57f31e2983d41fb9870b345990e.png?compress=1&resize=1200x900",
      icon : "assest/learning.png",
      title : "E-Learning Landing Page",
      para : "You worked hard on preparing the lessons for your courses, and now, they deserve to be presented in the most engaging way to your students. That is why we put extra effort into designing a beautiful and easy-to-use interface for you AND your students"
    },
  ]
  function clickHandle(way){
      way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : 
      setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1  : 0)
  }
  return (
    <div className="work" id ="work">
      
      <div className="slider" style={{transform :`translateX(-${currentSlide * 100}vw)`}}>
          {data.map((data) =>{
            return(
              
            <div className="container" key={data.id}>
              <div className="item">
            <div className="left">
              <div className="wrapper">
                <span >
                  <img src={data.icon} alt={data.title} />
                </span>
                
                <h2>{data.title}</h2>
                <p>{data.para}
                </p>
                <a href="#portfolio">Project</a>
              </div>
            </div>
            <div className="right">
              <div className="i-tag">
                <img src={data.img} alt={data.title} />
              </div>
            </div> 
            </div>
          </div>
          )
        })}  
        
      </div>
      <div className="arrow">
          <span onClick={()=>clickHandle("left")} className="left"><FontAwesomeIcon icon={faChevronLeft} className="icon"/></span>
          <span  onClick={()=>clickHandle()} className="right"><FontAwesomeIcon icon={faChevronRight} className="icon"/></span>
        </div>
    </div>
  )
}
// first  time change with git  
// second time change
export default Work