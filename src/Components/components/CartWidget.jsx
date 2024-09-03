
import "./CartWidget.css";
import { Link } from "react-router-dom";

export const CartWidget = () => {

    return <>
    
        <div className="cari-container">
        <Link className="img-carri-stile" to={"/carrite"}>🛒</Link>
            <span className="total-carri">0</span>
        </div>
    </>
}