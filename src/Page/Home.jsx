import ProdFotos from "../Components/Arrays/Fotografias";
import { NavBar } from "../Components/NavBar/NavBar";



export const Home = () => {
    return(
        <>
            <NavBar/>

            <div>
                <ProdFotos/>
            </div>

        </>
    )
}