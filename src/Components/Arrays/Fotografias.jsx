


import { Link } from "react-router-dom";
import {Fotografias} from "./data.js"

function pordFotos(){
    return(
        <main>
            <h1>Productos</h1>
            <div>
                {Fotografias.map((producto)=>{
                    return (
                        <article key={Fotografias.id}>
                            <h4>{Fotografias.title}</h4>
                            <img src={Fotografias.image}/>
                            <Link to={`productos/${Fotografias.id}`} >Mas info</Link>                            
                        </article>
                    )
                })}
            </div>
        </main>
    )
}
export default pordFotos;