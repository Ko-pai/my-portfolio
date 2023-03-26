import "./porfolioList.scss"

function PorfolioList({title,id,active,setSelected}) {
  return (
    
        <li key={id} className={active ? "porList active" : "porList"} onClick={()=>{
          setSelected(id)
        }} >
            {title}
        </li>
    
  )
}

export default PorfolioList