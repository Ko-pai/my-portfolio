import "./testimonials.scss";





const data = [
  {
    id: 1,
    name : "John",
    work : "Senior Developer",
    img : "assest/manPhoto.jpg",
    icon : "assest/twitter.png",
    card1 : true
  },
  {
    id: 2,
    name : "Katherine",
    work : "Designer",
    img : "assest/woman.jpg",
    icon : "assest/youtube.png",
    card1 : true
  },
  {
    id: 3,
    name : "Mr.Louis",
    work : "CEO of Good.Ltd",
    img : "assest/old man.jpg",
    icon : "assest/linkedin.png",
    card1 : true
  },
]


function Testimonials() {
  
  
  return (
    <div className="testimo" id="testimo">
      <h1>Testimonials</h1>
      <div className="container" >
       {data.map((data)=>{
        return(
          <div className={data.card1 ? "card1 active " : "card1" }  key={data.id}>
            <div className="top">
              <img src="assest/arrow.png" alt=""/>
                <div className="img-container">
                  <img src={data.img} alt=""/>
                </div>
              <img src={data.icon} alt="" className="icon"/>
            </div>
            <div className="middle">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="bottom">
              <h2>{data.name}</h2>
              <h3>{data.work}</h3>
            </div>
          
          {/* <div className="card2">
            
          </div>
          <div className="card3">
            
          </div> */}
        </div>
        )
       })}
          
      </div>
    </div>
  )
}

export default Testimonials