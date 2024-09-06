import "./Fotografias.css";
import { Link } from "react-router-dom";
import {fotografias} from "./data"


function ProdFotos(){
    return(
        <main className="main-prod">
        
                {fotografias.map((foto)=>{
                    console.log(foto)
                    return (
                        <article key={foto.id}>
                            <h4>{foto.nombre}</h4>
                            <img src={foto.img} />
                            <h4>Precio: ${foto.precio}</h4>
                            <Link className="masInfo" to={`productoFot/${foto.id}`} >Mas info</Link>                            
                        </article>
                    )
                })}
         
        </main>
    )
}
export default ProdFotos;