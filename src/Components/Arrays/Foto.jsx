
import { Link, useParams } from "react-router-dom"
import { fotografias } from "./data";
import { NavBar } from "../NavBar/NavBar";

function Foto (){

    const {ProdId} = useParams();

    const resultadoFind = fotografias.find((foto)=>foto.id== (ProdId));

    const {img, precio, nombre,} = resultadoFind

    return(
        <>

        <NavBar/>

        <div className="detalles">
            <img className="detalle-img" src={img} alt="" />
            <h3>Nombre: {nombre}</h3>
            <h4>Precio: ${precio}</h4>
        </div>

        </>

    )
}

export default Foto;