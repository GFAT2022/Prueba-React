import { CartWidget } from "../components/CartWidget.jsx"
import "./NavBar.css";


export const NavBar = () => {
    return <>
    
        <nav className="navContainer" >
            <ul className="navUl">
                <li className="li"><a href="#">Galeria</a></li>
                <li className="li"><a href="#">Destacados</a></li>
                <li className="li"><a href="#">Sobre mi</a></li>
                <li className="li"><a href="#">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
    
    </>
}