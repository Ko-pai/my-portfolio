import "./App.scss"
import TopBar from "./component/topbar/TopBar";
 import Portfolio from "./component/portfolio/Portfolio";
 import Work from "./component/work/Work";
 import Testimonials from "./component/testimonials/Testimonials";
 import Contact from "./component/Contact/Contact";
 import { useState } from "react";
import Introl from "./component/Introl/Introl";
import Menu from "./component/Menu/Menu";

function App()
  {
    const [value,setValue]= useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={value} setMenu={setValue}/>
      <Menu menuOpen={value} setMenu={setValue} />
      <div className="section">
        <Introl/>
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
