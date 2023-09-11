import PorfolioList from "./porfolioList/PorfolioList"
import "./portfolio.scss"
import {
  featurePortfolio,
  contentPortfolio,
  mobileAppPortfolio

} from "../../data"
import { useEffect, useState } from "react"

function Portfolio() {
  const [selected, setSelected] = useState("feature")
  const [data,setData] = useState([])
  const list =[
    {
      id : "feature",
      title : "Feature"
    },
    {
      id : "content",
      title : "Content"
    },
    {
      id : "mobile app",
      title : "Mobile App"
    },
    {
      id : "web app",
      title : "Web App"
    },
    {
      id : "design",
      title : "Design"
    },
  ]

  useEffect(()=>{
    switch(selected){
        case "feature":
          setData(featurePortfolio)
          break
        case "content":
          setData(contentPortfolio)
          break
          case "mobile app":
            setData(mobileAppPortfolio)
            break
        default :
          setSelected(selected)
    }
  },[selected])
  return (
    <div className='portfolio' id="portfolio">
      
        <h1>Portfolio</h1>
      
      <div className="ul-con">
        <ul>
          {list.map((lis)=> {
            return( <PorfolioList title={lis.title} active ={selected === lis.id} setSelected= {setSelected} id={lis.id}/> )
            
          }
            
          )}
        </ul>
        </div>
        <div className="project-container">
            {data.map((e)=>{
              return(
                <div className="project-list">
                  <img  src={e.img} alt={e.title} />
                  <h3> {e.title} </h3>
                </div>
              )
            })}
        </div>
       
      
      
    </div>
  )
}

export default Portfolio