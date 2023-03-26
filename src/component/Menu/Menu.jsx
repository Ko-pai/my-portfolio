import "./menu.scss"
export default function Menu({menuOpen,setMenu}) {
    function clickHand(){
        setMenu(!menuOpen)
    }
    return(
        <div className={"menu " + (menuOpen && "active") }>
        <ul className="listCon">
            <li onClick={clickHand}>
                <a href="#work">Home</a>
            </li>
            <li onClick={clickHand}>
                <a href="#intro">Contact</a>
            </li>
            <li onClick={clickHand}>
                <a href="#work">Service</a>
            </li>
            <li onClick={clickHand}>
                <a href="#work">Phone</a>
            </li>
        </ul>
        </div>
    )
}