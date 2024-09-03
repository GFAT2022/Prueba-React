import { CartWidget } from "../components/CartWidget.jsx"
import "./NavBar.css";
import { Link } from "react-router-dom";


export const NavBar = () => {
    return <>
    
        <nav className="navContainer" >

            <div>
                <h1 className="li"><a href="#">EL PORTAL</a></h1>
            </div>
            <ul className="navUl">
                <Link className="li-stile" to={"/galeri"}>Galeria</Link>
            </ul>
            <CartWidget/>
        </nav>
    
    </>
}


